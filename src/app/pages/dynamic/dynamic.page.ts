import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../serv/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.page.html',
  styleUrls: ['./dynamic.page.scss'],
})
export class DynamicPage implements OnInit {
  skeleton = true;
  postId:any=0;
  post: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public GeneralService:GeneralService,
  ) { }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    this.loadPageData();
  }

  async loadPageData() {
		this.GeneralService.api.generalGet('getPost',{"pid":this.postId}, "GET").then(data => {
      this.skeleton = false;
     if(data["data"]){
        this.post = data["data"];
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
