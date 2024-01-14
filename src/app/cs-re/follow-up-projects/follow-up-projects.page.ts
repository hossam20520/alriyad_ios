import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomModalPage } from 'src/app/pages/custom-modal/custom-modal.page';
import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-follow-up-projects',
  templateUrl: './follow-up-projects.page.html',
  styleUrls: ['./follow-up-projects.page.scss'],
})
export class FollowUpProjectsPage implements OnInit {
  skeleton = true;
  projects=[];
  constructor(
    public GeneralService:GeneralService,
    private modalCtr: ModalController
  ) { }

  ngOnInit() {
    this.GeneralService.whenUserInfoSet(this, 'loadPageData');
  }

  async loadPageData() {

		this.GeneralService.api.generalGet('follow_get', {}, "GET").then(data => {
      this.skeleton = false;
     if( data["data"] ){
      console.log(data["data"]);
      data["data"].forEach(element => {
        
        if( element.due_date ){
          let dateX = this.GeneralService.dateFromYMD(element.due_date, '-');
          element.due_date = dateX;          
        }

        


        this.projects.push(element);
      });
     }
    });
    
		  
  }

  async openImagePrev(prevData){
    const modal = await this.modalCtr.create({
      component: CustomModalPage,
      cssClass:'transparent-modal',
      componentProps:{
        prevData:prevData
      }
    });
    modal.present();
  }

  doRefresh(event) {
    this.loadPageData();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
