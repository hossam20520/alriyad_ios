import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-already-added',
  templateUrl: './already-added.page.html',
  styleUrls: ['./already-added.page.scss'],
})
export class AlreadyAddedPage implements OnInit {
  skeleton = true;
  skeletonNumbers;
  friendsList=[];
  constructor(
    public GeneralService:GeneralService,
  ) {
    this.skeletonNumbers = Array(5).fill(0).map((x,i)=>i);
  }

  ngOnInit() {
    this.GeneralService.whenUserInfoSet(this, 'loadPageData');
  }

  async loadPageData() {

    //GET Total points
		this.GeneralService.api.generalGet('points_reasons', {}, "GET").then(data => {
      this.skeleton = false;
     if(data["data"]){ 
      for(let dataX of data["data"]) {
        if(dataX.reason == "friend"){
          this.friendsList.push(dataX);
        }
      }
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
