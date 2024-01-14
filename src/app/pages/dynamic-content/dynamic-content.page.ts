import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.page.html',
  styleUrls: ['./dynamic-content.page.scss'],
})
export class DynamicContentPage implements OnInit {
	typeToP: any;
  pageContent;
  constructor(
		private activatedRoute: ActivatedRoute,
    public GeneralService:GeneralService,
  ) { }

  ngOnInit() {
    this.typeToP = this.activatedRoute.snapshot.paramMap.get('type');
    this.GeneralService.whenUserInfoSet(this, 'loadPageData');
  }
  async loadPageData() {
    this.GeneralService.api.generalGet('getPost',{"pid":this.typeToP}, "GET").then(data => {
      if(data["data"]){
        this.pageContent = data["data"];
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
