import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-installments',
  templateUrl: './installments.page.html',
  styleUrls: ['./installments.page.scss'],
})
export class InstallmentsPage implements OnInit {
  skeleton = true;
  total;
  total_paid;
  total_paid_pr;

  nextInstallment;
  financial;


  constructor(
    public GeneralService:GeneralService,
  ) { }

  ngOnInit() {
    this.GeneralService.whenUserInfoSet(this, 'loadPageData');
  }

  async loadPageData() {

    //GET Total points
		this.GeneralService.api.generalGet('financial_get', {}, "GET").then(data => {
     this.skeleton = false;
     if(data["data"] && data["data"].financial){
      
      this.total =  data["data"].total;
      this.total_paid = data["data"].total_paid;
      this.total_paid_pr =  data["data"].total_paid_pr;

      this.financial = [];
      data["data"].financial.forEach(element => {
        let t = new Date();
        let date = ('0' + t.getDate()).slice(-2);
        let month = ('0' + (t.getMonth() + 1)).slice(-2);
        let year = t.getFullYear();

        let dateComp = element.date - parseInt(year+month+date);
       
        if(parseInt(element.payment_made) == 1) {
          element.status = 'done'; 
          element.satusIcon = 'checkmark-circle'; 
          return;
        }
        else if(dateComp < 0){
          element.status = 'delay'; 
          element.satusIcon = 'calendar-outline'; 
        }

        else if(dateComp < 10){
          element.status = 'warning'; 
          element.satusIcon = 'calendar-outline'; 
        }

        else{
          element.status = 'wait'; 
          element.satusIcon = 'checkmark-circle'; 
        }

        let dateX = this.GeneralService.dateFromYMD(element.date, '-');
        element.date = dateX;
        

        if(parseInt(element.payment_made) != 1 && ! this.nextInstallment) {
          this.nextInstallment = dateX;
        }


        this.financial.push(element);
      });
     }
    });
    
		  
  }

  doRefresh(event) {
    this.loadPageData();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }



}
