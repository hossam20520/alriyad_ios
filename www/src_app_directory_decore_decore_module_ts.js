(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_directory_decore_decore_module_ts"],{

/***/ 3925:
/*!***********************************************************!*\
  !*** ./src/app/directory/decore/decore-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecorePageRoutingModule": () => (/* binding */ DecorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _decore_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decore.page */ 4596);




const routes = [
    {
        path: '',
        component: _decore_page__WEBPACK_IMPORTED_MODULE_0__.DecorePage
    }
];
let DecorePageRoutingModule = class DecorePageRoutingModule {
};
DecorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DecorePageRoutingModule);



/***/ }),

/***/ 5848:
/*!***************************************************!*\
  !*** ./src/app/directory/decore/decore.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecorePageModule": () => (/* binding */ DecorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _decore_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decore-routing.module */ 3925);
/* harmony import */ var _decore_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decore.page */ 4596);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pipes/safe.pipe */ 5436);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);









let DecorePageModule = class DecorePageModule {
};
DecorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _decore_routing_module__WEBPACK_IMPORTED_MODULE_0__.DecorePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_decore_page__WEBPACK_IMPORTED_MODULE_1__.DecorePage, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe]
    })
], DecorePageModule);



/***/ }),

/***/ 4596:
/*!*************************************************!*\
  !*** ./src/app/directory/decore/decore.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecorePage": () => (/* binding */ DecorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_decore_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./decore.page.html */ 5445);
/* harmony import */ var _decore_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decore.page.scss */ 1932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);







let DecorePage = class DecorePage {
    constructor(GeneralService, formBuilder, nav) {
        this.GeneralService = GeneralService;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.activeAcc = -1;
        this.userSpaceMeters = 0;
        this.skeleton = true;
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            decoreFDate: ['', []],
            decoreFSpace: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            decoreFType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
        //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
        this.loadPageData();
    }
    loadPageData() {
        this.GeneralService.api.generalGet('getPost', { 'pid': this.GeneralService.cuVars.decorePid }, "GET").then(data => {
            this.skeleton = false;
            if (data["data"]) {
                this.post = data["data"];
            }
        });
        var tDate = new Date();
        var date = ('0' + tDate.getDate()).slice(-2);
        var month = ('0' + (tDate.getMonth() + 1)).slice(-2);
        var year = tDate.getFullYear();
        this.decoreFDateMin = year + '-' + month + '-' + date;
    }
    accordionAct(ii) {
        this.activeAcc = (this.activeAcc == ii) ? -1 : ii;
    }
    pushToNextScreenWithParams(pageUrl, params) {
        let textareaInfo = "";
        if (this.userSpaceMeters) {
            textareaInfo += "Space:" + this.userSpaceMeters + "M \n";
        }
        if (this.activeAcc >= 0) {
            textareaInfo += "Package:" + this.post.finishing_packages[this.activeAcc].name + "\n";
        }
        this.nav.navigateForward(pageUrl, { state: { typeInfo: params, textareaInfo: textareaInfo } });
    }
    onChangeUserData(e) {
        this.userSpaceMeters = e.detail.value;
    }
};
DecorePage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
DecorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-decore',
        template: _raw_loader_decore_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_decore_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DecorePage);



/***/ }),

/***/ 1932:
/*!***************************************************!*\
  !*** ./src/app/directory/decore/decore.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".page-custom-header {\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n}\n\n.act-btn-co {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 100%;\n  padding-inline: 15px;\n}\n\n.co-d {\n  padding-inline: 20px;\n}\n\n.g1 {\n  margin-top: -45px;\n  background: #fff;\n  box-shadow: 0 3px 15px #4848483b;\n  border-radius: 10px;\n  position: relative;\n  padding: 18px 20px;\n  z-index: 5;\n}\n\nform ion-icon {\n  margin-inline-end: 7px;\n}\n\n.calc-co .tt {\n  background: #e9e9e9;\n}\n\n.calc-co ion-label {\n  opacity: 0.8;\n}\n\n.packages .title {\n  --background: #e9e9e9;\n  --padding: 9px;\n  --border-radius: 20px;\n  --min-height: 40px;\n  margin-bottom: 10px;\n}\n\n.packages .title ion-icon {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.packages .info-co {\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.packages .meter_price {\n  padding: 4px 10px;\n  margin-bottom: 10px;\n  border: 1px solid #dadada;\n}\n\n.packages .up, .packages .down {\n  font-size: 1em;\n}\n\n.packages .up {\n  display: none;\n}\n\n.packages .active .title {\n  --background: var(--ion-color-primary);\n}\n\n.packages .active .info-co {\n  max-height: 380vh;\n  opacity: 1;\n  margin-bottom: 10px;\n}\n\n.packages .active .up {\n  display: block;\n}\n\n.packages .active .down {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY29yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksb0JBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGSjs7QUFNSTtFQUNJLHNCQUFBO0FBSFI7O0FBUUk7RUFDSSxtQkFBQTtBQUxSOztBQVFJO0VBQ0ksWUFBQTtBQU5SOztBQVVJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUFI7O0FBU1E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFQWjs7QUFVSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVJSOztBQVdJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBVFI7O0FBV0k7RUFDSSxjQUFBO0FBVFI7O0FBV0k7RUFDSSxhQUFBO0FBVFI7O0FBYVE7RUFDSSxzQ0FBQTtBQVhaOztBQWFRO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFYWjs7QUFhUTtFQUNJLGNBQUE7QUFYWjs7QUFhUTtFQUNJLGFBQUE7QUFYWiIsImZpbGUiOiJkZWNvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLnBhZ2UtY3VzdG9tLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmFjdC1idG4tY28ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XHJcbn1cclxuXHJcbi5jby1kIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAyMHB4O1xyXG59XHJcblxyXG4uZzEge1xyXG4gICAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTVweCAjNDg0ODQ4M2I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYWxjLWNvIHtcclxuICAgIC50dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxufVxyXG4ucGFja2FnZXMge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgICAgICAgLS1wYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmZvLWNvIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXRlcl9wcmljZSB7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xyXG4gICAgfVxyXG4gICAgLnVwLCAuZG93biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgICAudXAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvLWNvIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzgwdmg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51cCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZG93biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 5445:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/directory/decore/decore.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"page-custom-header\">\n    <div class=\"act-btn-co\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"directory\" routerDirection=\"backward\"></ion-back-button>\n      </ion-buttons>\n    </div>\n\n    <img src=\"assets/covers/decore.jpg\" alt=\"\">\n  </div>\n  <div class=\"co-d\">\n    <div class=\"g1\">\n      <h2 class=\"page-title\">{{ 'P_TITLES.directoryDecore' | translate }}</h2>\n      <div *ngIf=\"post && post.content\" [innerHTML]=\"post.content | safe: 'html'\" class=\"p-content ion-margin-bottom\"></div>\n\n      <div *ngIf=\"skeleton\">\n        <div class=\"ion-margin-bottom\">\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n        </div>\n        <div class=\"custom-skeleton\">\n          <ion-skeleton-text animated style=\"height:35px;border-radius:20px;margin-bottom:10px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"height:35px;border-radius:20px;margin-bottom:10px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"height:35px;border-radius:20px;margin-bottom:10px;\"></ion-skeleton-text>\n        </div>\n      </div>\n\n      <div *ngIf=\"post && post.finishing_packages\">\n\n        <div class=\"calc-co\">\n          <h4 class=\"tt\">{{ 'DIRECTORY.decoreCalc' | translate }}</h4>\n          <ion-item class=\"ion-margin-bottom ion-no-padding\">\n            <ion-icon color=\"primary\" name=\"expand-outline\"></ion-icon>\n            <ion-label>{{ 'DIRECTORY.decoreFSpace' | translate }}</ion-label>\n            <ion-input type=\"number\" placeholder=\"{{ 'DIRECTORY.decoreFSpacebyM' | translate }}\" (ionChange)=\"onChangeUserData($event)\"></ion-input>\n            <ion-label slot=\"end\">{{ 'REALESTATE.m' | translate }}</ion-label>\n          </ion-item>\n        </div>\n\n        <div class=\"packages\">\n          <div class=\"unit\" *ngFor=\"let package of post.finishing_packages; let i = index\" [ngClass]=\"{'active' : i == activeAcc}\">\n            <ion-item class=\"title\" lines=\"none\" detail=\"false\" (click)=\"accordionAct(i)\">\n              <ion-icon name=\"reader-outline\" slot=\"start\"> </ion-icon>\n              {{package.name}} \n              <ion-icon class=\"down\" name=\"arrow-down-outline\" slot=\"end\"></ion-icon>\n              <ion-icon class=\"up\" name=\"arrow-up-outline\" slot=\"end\"></ion-icon>\n            </ion-item>\n            <div class=\"info-co\">\n              <div [innerHTML]=\"package.info | safe: 'html'\" class=\"p-content\"></div>\n              <div class=\"meter_price\" *ngIf=\"package.meter_price\">\n                <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\n                {{ 'DIRECTORY.decoreFCost' | translate }} \n                {{package.meter_price}} {{ 'GENERAL.EGP' | translate }}\n\n                <span *ngIf=\"userSpaceMeters\" class=\"meter-x-price d-block\"><ion-icon name=\"home-outline\" slot=\"start\"></ion-icon> {{ 'DIRECTORY.decoreFTotalCost' | translate }} : {{userSpaceMeters * package.meter_price }} {{ 'GENERAL.EGP' | translate }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"action-list ion-text-center\">\n          <ion-button (click)=\"pushToNextScreenWithParams('/new-post/ds1_tickets', 'decore')\">{{ 'DIRECTORY.apply' | translate }}</ion-button>\n        </div>\n      </div>\n\n\n\n\n\n\n\n\n      <!--\n        \n        <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmitUserData()\">\n        <ion-grid>\n          <ion-row color=\"primary\" justify-content-center ion-padding-vertical>\n            <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\" class=\"ion-padding-horizontal\">\n                <ion-item class=\"ion-margin-bottom ion-no-padding\">\n                  <ion-icon color=\"primary\" name=\"calendar-outline\"></ion-icon>\n                  <ion-datetime formControlName=\"decoreFDate\" displayFormat=\"DD-MM-YYYY\" min=\"{{decoreFDateMin}}\" placeholder=\"{{ 'DIRECTORY.decoreFDate' | translate }}\"></ion-datetime>\n                </ion-item>\n    \n                <ion-item class=\"ion-margin-bottom ion-no-padding\">\n                  <ion-icon color=\"primary\" name=\"expand-outline\"></ion-icon>\n                  <ion-input formControlName=\"decoreFSpace\" type=\"number\" placeholder=\"{{ 'DIRECTORY.decoreFSpace' | translate }}\"></ion-input>\n                </ion-item>\n    \n                <ion-item class=\"ion-margin-bottom ion-no-padding\">\n                  <ion-icon color=\"primary\" name=\"color-fill-outline\"></ion-icon>\n                  <ion-select  formControlName=\"decoreFType\"  multiple=\"true\" okText=\"{{ 'GENERAL.ok' | translate }}\" cancelText=\"{{ 'GENERAL.cancel' | translate }}\" placeholder=\"{{ 'DIRECTORY.decoreFType' | translate }}\">\n                    <ion-select-option >{{ 'DIRECTORY.decoreFDeluce' | translate }}</ion-select-option>\n                    <ion-select-option >{{ 'DIRECTORY.decoreFUltraL' | translate }}</ion-select-option>\n                    <ion-select-option >{{ 'DIRECTORY.decoreFSuperaL' | translate }}</ion-select-option>\n                    <ion-select-option >{{ 'DIRECTORY.decoreFLux' | translate }}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n                <div padding>\n                  <ion-button class=\"submit\" type=\"submit\" [disabled]=\"!credentialsForm.valid\" expand=\"block\">{{ 'GENERAL.send' | translate }}</ion-button>\n                </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>-->\n    </div>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_directory_decore_decore_module_ts.js.map