import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';

import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.page.html',
  styleUrls: ['./cat.page.scss'],
})
export class CatPage implements OnInit {
  skeleton = true;
  skeletonNumbers;
  posts: any;
	typeToP: any;
	page = 1;
  thumbGroupActive = 'line';

  thumbGroupG1    = ["real-estate", "post", 'previous-projects'];

  


  constructor(
		private route: ActivatedRoute, private router: Router,
    public GeneralService:GeneralService
  ) { 
    this.skeletonNumbers = Array(7).fill(0).map((x,i)=>i);
  }

  
  ngOnInit() {
    this.typeToP = this.route.snapshot.paramMap.get('type');
    if(this.thumbGroupG1.includes(this.typeToP)){
      this.thumbGroupActive = 'g1';
    }
    //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    this.loadPageData();
  }

  async loadPageData() {
    this.GeneralService.api.generalGet('getPosts', {'post_type':this.typeToP}, "GET").then(data => {
      this.skeleton = false;

      if(data["data"]){
        this.posts = [];
        data["data"].forEach(element => {
          if(element.p_state !== "sold-end"){
            this.posts.push(element);
          }
        });
      }
     
    });
  }

  openDetailsWithQueryParams() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: 43333
      }
    };
    this.router.navigate(['new-post/ds1_tickets'], navigationExtras);
  }

  doRefresh(event) {
    this.loadPageData();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
