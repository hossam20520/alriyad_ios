import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { take } from 'rxjs/operators';

import { Router } from '@angular/router';
import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-first-time',
  templateUrl: './first-time.page.html',
  styleUrls: ['./first-time.page.scss'],
})
export class FirstTimePage implements OnInit {
  @ViewChild('slideWithNav')  slides: IonSlides;
  didInit = false;
  cLang = 'rtl';
  slideOptsOne:any;
  
  constructor(
    private router: Router,
    public GeneralService : GeneralService,
  ) { }

  ngOnInit() {
    let stFirstKey = this.GeneralService.cuVars.firstTKey;
    this.GeneralService.storage.setItem(stFirstKey, 'first');

  }
  myBackButton(){
    this.router.navigate(['login']);
    //this.location.back();
  }
  swipeNext(){
    this.slides.isEnd().then((isFinal) => {
      if(isFinal){
        this.myBackButton();
      }
      else {
        this.slides.slideNext();
      }
    });

  }

  

  ngAfterViewInit() {
      setTimeout(() => {

        var thisT = this;
        this.slideOptsOne = {
          initialSlide: 0,
          slidesPerView: 1,
          centeredSlides: true,
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          rtl: true,
          rtlTranslate:true,
          //autoplay:true
          on: {
            beforeInit: function () {
              const swiper = this;
              
              thisT.GeneralService.cuVars.AppLang.pipe(take(1)).subscribe( (data) => {
                if(data == 'ar') {
                  thisT.cLang = 'rtl';
                  swiper.rtl = true;
                  swiper.rtlTranslate = true;
                }
                else {
                  thisT.cLang = 'ltr';
                  swiper.rtl = false;
                  swiper.rtlTranslate = false;
                }
              })

              
              
            }
          }
        };
        this.didInit = true;
        
      }, 1500);

  }
}


