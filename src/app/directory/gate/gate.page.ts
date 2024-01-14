import { Component, OnInit } from '@angular/core';

import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.page.html',
  styleUrls: ['./gate.page.scss'],
})
export class GatePage implements OnInit {
  skeleton = true;
  skeletonNumbers;
  posts=[];

  constructor(
    public GeneralService:GeneralService
  ) {
    this.skeletonNumbers = Array(10).fill(0).map((x,i)=>i);
   }

  ngOnInit() {
    this.GeneralService.whenUserInfoSet(this, 'loadPageData');
  }

  
  async loadPageData() {
    this.GeneralService.api.generalGet('getPosts', {'post_type':'ds1_directory'}, "GET").then(data => {
      this.skeleton = false;
      if(data["data"]){
        data["data"].forEach(element => {
          
          let vX = 'title_'+this.GeneralService.cuVars.cLang.value;
          element.title=(element[vX])? element[vX] : element.title;

          this.posts.push(element);
        });
      }
     
    });
  }

}
