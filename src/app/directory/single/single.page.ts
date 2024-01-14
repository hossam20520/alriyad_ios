import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {
  skeleton = true;

  postId;
  post;

  constructor(
    private activatedRoute: ActivatedRoute,
    public GeneralService:GeneralService
  ) { }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    
    //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    this.loadPageData();
  }

  async loadPageData() {
    this.GeneralService.api.generalGet('getPost', {'pid':this.postId}, "GET").then(data => {
      this.skeleton = false;
      if(data["data"]){
          var element = data["data"];
          let vX = 'title_'+this.GeneralService.cuVars.cLang.value;
          element.title=(element[vX])? element[vX] : element.title;

          this.post = element;
      }
      
     
    });
  }

}
