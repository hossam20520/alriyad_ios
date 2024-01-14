import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GeneralService } from '../../serv/general.service';


@Component({
  selector: 'app-view-points',
  templateUrl: './view-points.page.html',
  styleUrls: ['./view-points.page.scss'],
})
export class ViewPointsPage implements OnInit {
  totalPoints;
  
  constructor(
    public GeneralService:GeneralService,
    public nav:NavController
  ) { }


  ngOnInit() {
    this.GeneralService.whenUserInfoSet(this, 'loadPageData');
  }


  async loadPageData() {
    //GET Total points
    this.totalPoints = this.getTotalPoints();

    //subscribe if total points changed
    this.GeneralService.cuVars.totalPoints.subscribe( (data) => {
     
      this.totalPoints= data;
    });
		  
  }



  //GET Total points
  async getTotalPoints() {
	  await	this.GeneralService.api.generalGet('points_get_total', {}, "GET").then(data => {
      if(data["data"]){
        console.log(data)
        let nextV = (data["data"] > 0 ) ? this.GeneralService.kFormatter( data["data"] ) : {'s':0, 'p':0, 'pfx':''}; 
        this.GeneralService.cuVars.totalPoints.next( nextV );
        return this.GeneralService.kFormatter( data["data"] );
      }
     });
  }
  
  
  pushToNextScreenWithParams(pageUrl: any, params: any) {
    this.nav.navigateForward(pageUrl, { state: {typeInfo:params} });
  }


  doRefresh(event) {
    this.loadPageData();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
