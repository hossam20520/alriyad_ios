(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_user_first-time_first-time_module_ts"],{

/***/ 1343:
/*!**************************************************************!*\
  !*** ./src/app/user/first-time/first-time-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstTimePageRoutingModule": () => (/* binding */ FirstTimePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _first_time_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-time.page */ 8016);




const routes = [
    {
        path: '',
        component: _first_time_page__WEBPACK_IMPORTED_MODULE_0__.FirstTimePage
    }
];
let FirstTimePageRoutingModule = class FirstTimePageRoutingModule {
};
FirstTimePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FirstTimePageRoutingModule);



/***/ }),

/***/ 5857:
/*!******************************************************!*\
  !*** ./src/app/user/first-time/first-time.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstTimePageModule": () => (/* binding */ FirstTimePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _first_time_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-time-routing.module */ 1343);
/* harmony import */ var _first_time_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-time.page */ 8016);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let FirstTimePageModule = class FirstTimePageModule {
};
FirstTimePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _first_time_routing_module__WEBPACK_IMPORTED_MODULE_0__.FirstTimePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_first_time_page__WEBPACK_IMPORTED_MODULE_1__.FirstTimePage]
    })
], FirstTimePageModule);



/***/ }),

/***/ 8016:
/*!****************************************************!*\
  !*** ./src/app/user/first-time/first-time.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstTimePage": () => (/* binding */ FirstTimePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_first_time_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./first-time.page.html */ 1882);
/* harmony import */ var _first_time_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-time.page.scss */ 3968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);







let FirstTimePage = class FirstTimePage {
    constructor(router, GeneralService) {
        this.router = router;
        this.GeneralService = GeneralService;
        this.didInit = false;
        this.cLang = 'rtl';
    }
    ngOnInit() {
        let stFirstKey = this.GeneralService.cuVars.firstTKey;
        this.GeneralService.storage.setItem(stFirstKey, 'first');
    }
    myBackButton() {
        this.router.navigate(['login']);
        //this.location.back();
    }
    swipeNext() {
        this.slides.isEnd().then((isFinal) => {
            if (isFinal) {
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
                rtlTranslate: true,
                //autoplay:true
                on: {
                    beforeInit: function () {
                        const swiper = this;
                        thisT.GeneralService.cuVars.AppLang.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe((data) => {
                            if (data == 'ar') {
                                thisT.cLang = 'rtl';
                                swiper.rtl = true;
                                swiper.rtlTranslate = true;
                            }
                            else {
                                thisT.cLang = 'ltr';
                                swiper.rtl = false;
                                swiper.rtlTranslate = false;
                            }
                        });
                    }
                }
            };
            this.didInit = true;
        }, 1500);
    }
};
FirstTimePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService }
];
FirstTimePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['slideWithNav',] }]
};
FirstTimePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-first-time',
        template: _raw_loader_first_time_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_first_time_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FirstTimePage);



/***/ }),

/***/ 3968:
/*!******************************************************!*\
  !*** ./src/app/user/first-time/first-time.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-slides, ion-slide {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide.start-s {\n  display: flex;\n  flex-direction: column;\n}\n\n.swiper-pagination {\n  text-align: inherit !important;\n}\n\n.swiper-slide img {\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n.patt-bg {\n  position: absolute;\n  top: 2vh;\n  right: 2px;\n  width: 18vw;\n}\n\n.img-co {\n  height: 60vh;\n  width: 88%;\n  border-radius: 36px;\n  margin: auto;\n  background-position: bottom center;\n  background-size: cover;\n  margin-top: 10vh;\n}\n\nh4 {\n  width: 80%;\n  margin: auto;\n  transform: translateY(-50%);\n  background: var(--ion-color-primary);\n  color: #fff;\n  border-radius: 15px;\n}\n\n.bar-ac {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #efefef;\n  z-index: 8;\n  padding: 5px 15px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  line-height: 1;\n}\n\n.bar-ac a {\n  padding: 10px;\n}\n\n.bar-ac .next {\n  margin-left: auto;\n}\n\n[dir=rtl] :host .bar-ac .next {\n  margin-left: 0;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LXRpbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ1I7O0FBR0E7RUFDSSw4QkFBQTtBQUFKOztBQUlBO0VBQ0ksb0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFESjs7QUFJQTtFQUNJLHFDQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDSCxVQUFBO0VBQ0csV0FBQTtBQURKOztBQUdBO0VBQ0MsWUFBQTtFQUNHLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUk7RUFDSSxhQUFBO0FBQVI7O0FBRUk7RUFDSSxpQkFBQTtBQUFSOztBQU9RO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBSloiLCJmaWxlIjoiZmlyc3QtdGltZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzLCBpb24tc2xpZGUge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAmLnN0YXJ0LXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5iIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG59XG5cbnAgYiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbn1cblxuLnBhdHQtYmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDJ2aDtcblx0cmlnaHQ6IDJweDtcbiAgICB3aWR0aDogMTh2dztcbn1cbi5pbWctY28ge1xuXHRoZWlnaHQ6IDYwdmg7XG4gICAgd2lkdGg6IDg4JTtcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbn1cblxuaDQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmJhci1hYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgei1pbmRleDogODtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgYSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIC5uZXh0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxufVxuXG5cbltkaXI9XCJydGxcIl0gOmhvc3Qge1xuICAgIC5iYXItYWMge1xuICAgICAgICAubmV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 1882:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/first-time/first-time.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\t<img src=\"assets/patt-dots.png\" class=\"patt-bg\">\n  <div *ngIf=\"!didInit\">\n    <div class=\"img-co\" style=\"background-image: url(assets/first/1.jpg);\"></div>\n     <h4 class=\"ion-padding\">{{ 'FIRST_TIME.s1_title' | translate }}</h4>\n </div>\n\t<ion-slides pager=\"true\" [options]=\"slideOptsOne\" *ngIf=\"didInit\" style=\"direction: {{cLang}};\" #slideWithNav>\n\t\t   <ion-slide>\n         <div class=\"img-co\" style=\"background-image: url(assets/first/1.jpg);\"></div>\n          <h4 class=\"ion-padding\">{{ 'FIRST_TIME.s1_title' | translate }}</h4>\n\t\t\t</ion-slide>\n\t\t   <ion-slide>\n        <div class=\"img-co\" style=\"background-image: url(assets/first/2.jpg);\"></div>\n        <h4 class=\"ion-padding\">{{ 'FIRST_TIME.s2_title' | translate }}</h4>\n\t\t\t</ion-slide>\n\t\t   <ion-slide>\n        <div class=\"img-co\" style=\"background-image: url(assets/first/3.jpg);\"></div>\n        <h4 class=\"ion-padding\">{{ 'FIRST_TIME.s3_title' | translate }}</h4>\n      </ion-slide>\n      \n      <ion-slide class=\"start-s\">\n        <h2>{{ 'FIRST_TIME.ready_start' | translate }}</h2>\n        <ion-button fill=\"clear\" (click)=\"myBackButton()\">{{ 'FIRST_TIME.continue' | translate }} <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\n\t\t\t</ion-slide>\n\t</ion-slides>\n  \n  <div class=\"bar-ac ion-text-uppercase\">\n    <a color=\"light\" (click)=\"myBackButton()\">\n      {{ 'FIRST_TIME.skip' | translate }}\n    </a>\n    <a class=\"next\" (click)=\"swipeNext()\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n  </div>\n\n\t \n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_user_first-time_first-time_module_ts.js.map