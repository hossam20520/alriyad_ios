import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../serv/general.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forward-installments',
  templateUrl: './forward-installments.page.html',
  styleUrls: ['./forward-installments.page.scss'],
})
export class ForwardInstallmentsPage implements OnInit {

  public credentialsForm: FormGroup;
  skeleton = true;
  financial=[];
  colectDateMin;
  colectDateMax;

  constructor(
    public GeneralService:GeneralService,
    private formBuilder: FormBuilder
  ) { }

  
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      colectDate: ['', [Validators.required]],
      installments: ['', [Validators.required]]
    });

    this.GeneralService.whenUserInfoSet(this, 'loadPageData');
  }


  async loadPageData() {

    var tDate = new Date();
    var date = ('0' + tDate.getDate()).slice(-2);
    var month = ('0' + (tDate.getMonth() + 1)).slice(-2);
    var year = tDate.getFullYear();

    this.colectDateMin = year+'-'+month+'-'+date;

    var newDate = new Date(tDate.setMonth(tDate.getMonth()+2));
    var date = ('0' + newDate.getDate()).slice(-2);
    var month = ('0' + (newDate.getMonth() + 1)).slice(-2);
    var year = newDate.getFullYear();

    this.colectDateMax = year+'-'+month+'-'+date;

		this.GeneralService.api.generalGet('financial_get', {}, "GET").then(data => {
      this.skeleton = false;
      if(data["data"] && data["data"].financial){
       
       this.financial = [];
       data["data"].financial.forEach(element => {
 
         if(parseInt(element.payment_made) == 1) {
           return;
         }
         
         let dateX = this.GeneralService.dateFromYMD(element.date, '-');
         element.date = dateX;
         
 
 
         this.financial.push(element);
       });
      }

     });
     
  }

  

  public onSubmitUserData() {
    
  }
}
