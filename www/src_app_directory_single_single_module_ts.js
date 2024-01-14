(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_directory_single_single_module_ts"],{

/***/ 3134:
/*!***********************************************************!*\
  !*** ./src/app/directory/single/single-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SinglePageRoutingModule": () => (/* binding */ SinglePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _single_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single.page */ 273);




const routes = [
    {
        path: '',
        component: _single_page__WEBPACK_IMPORTED_MODULE_0__.SinglePage
    }
];
let SinglePageRoutingModule = class SinglePageRoutingModule {
};
SinglePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SinglePageRoutingModule);



/***/ }),

/***/ 9148:
/*!***************************************************!*\
  !*** ./src/app/directory/single/single.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SinglePageModule": () => (/* binding */ SinglePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _single_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-routing.module */ 3134);
/* harmony import */ var _single_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single.page */ 273);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pipes/safe.pipe */ 5436);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);









let SinglePageModule = class SinglePageModule {
};
SinglePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _single_routing_module__WEBPACK_IMPORTED_MODULE_0__.SinglePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_single_page__WEBPACK_IMPORTED_MODULE_1__.SinglePage, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe]
    })
], SinglePageModule);



/***/ }),

/***/ 273:
/*!*************************************************!*\
  !*** ./src/app/directory/single/single.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SinglePage": () => (/* binding */ SinglePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_single_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./single.page.html */ 7685);
/* harmony import */ var _single_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single.page.scss */ 9477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);






let SinglePage = class SinglePage {
    constructor(activatedRoute, GeneralService) {
        this.activatedRoute = activatedRoute;
        this.GeneralService = GeneralService;
        this.skeleton = true;
    }
    ngOnInit() {
        this.postId = this.activatedRoute.snapshot.paramMap.get('id');
        //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
        this.loadPageData();
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.api.generalGet('getPost', { 'pid': this.postId }, "GET").then(data => {
                this.skeleton = false;
                if (data["data"]) {
                    var element = data["data"];
                    let vX = 'title_' + this.GeneralService.cuVars.cLang.value;
                    element.title = (element[vX]) ? element[vX] : element.title;
                    this.post = element;
                }
            });
        });
    }
};
SinglePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService }
];
SinglePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-single',
        template: _raw_loader_single_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_single_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SinglePage);



/***/ }),

/***/ 9477:
/*!***************************************************!*\
  !*** ./src/app/directory/single/single.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top-co {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: -16px;\n}\n.top-co ion-buttons {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n.g-msg {\n  font-size: 0.8em;\n}\n.av-in {\n  box-shadow: 0 2px 12px #c0c0c0;\n  padding: 15px 20px;\n  border-radius: 10px;\n  margin: 15px 0;\n  line-height: 1;\n}\n.av-in .se-title {\n  margin: 0 0 15px 0;\n}\n.av-in ul {\n  padding: 0;\n  margin: 0;\n}\n.av-in li {\n  display: inline-block;\n  margin-inline-end: 15px;\n  margin-bottom: 7px;\n}\n.av-in li:before {\n  content: \" \";\n  background: var(--ion-color-primary);\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  margin-inline-end: 6px;\n  border-radius: 50px;\n}\nion-item {\n  padding: 12px 0;\n}\nion-item h2 {\n  font-size: 14px;\n  white-space: normal;\n}\nion-item ion-icon {\n  opacity: 0.7;\n  font-size: 1.8em;\n  margin-inline-end: 15px;\n}\nion-item .phones {\n  margin-top: 5px;\n}\nion-item .phones a:after {\n  content: \" - \";\n  margin-inline: 5px;\n}\nion-item .phones a:nth-last-child(1):after {\n  content: \"\";\n  display: none;\n}\nion-item .locations {\n  line-height: 1.1;\n}\nion-item .locations span {\n  margin-inline-end: 16px;\n  line-height: 1.1;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFSO0FBSUE7RUFDSSxnQkFBQTtBQURKO0FBSUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0k7RUFDSSxrQkFBQTtBQURSO0FBR0k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQURSO0FBSUk7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlRO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFGWjtBQU9BO0VBQ0ksZUFBQTtBQUpKO0FBTUk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU1JO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFKUjtBQU1JO0VBQ0ksZUFBQTtBQUpSO0FBUVk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFOaEI7QUFVZ0I7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQVJwQjtBQWFJO0VBQ0ksZ0JBQUE7QUFYUjtBQWFRO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBWFoiLCJmaWxlIjoic2luZ2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtY28ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xyXG5cclxuXHJcbiAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZy1tc2cge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLmF2LWluIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggI2MwYzBjMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuICAgIC5zZS10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMTVweDtcclxuICAgIH1cclxuICAgIC5waG9uZXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAgICAgYSB7XHJcblxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIC0gXCI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4taW5saW5lOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvY2F0aW9ucyB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 7685:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/directory/single/single.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n\n  <div class=\"top-co\">\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"directory\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <img *ngIf=\"!post || ! post.cover\" src=\"assets/covers/dir-g.jpg\">\n    <img *ngIf=\"post && post.cover\" [src]=\"post.cover\">\n  </div>\n\n  <h2 *ngIf=\"post && post.title\">{{ post?.title }}</h2>\n\n  <p class=\"g-msg\">{{ 'DIRECTORY.singleGeneralInfo' | translate }}</p>\n\n  <div *ngIf=\"skeleton\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n  </div>\n\n  <div *ngIf=\"post && post.content\" [innerHTML]=\"post.content | safe: 'html'\" class=\"p-content\"></div>\n\n  <div class=\"av-in\" *ngIf=\"post && post.available_in.length > 0\">\n    <h3 class=\"se-title\">{{ 'DIRECTORY.singleAvIn' | translate }}</h3>\n    <ul>\n      <li *ngFor=\"let itemX of post.available_in\">{{itemX.name}}</li>\n    </ul>\n  </div>\n\n  <ion-list *ngIf=\"post && post.directory_units\" class=\"di-co\">\n\n    <ion-item *ngFor=\"let itemX of post.directory_units\">\n      <ion-icon src=\"assets/icon/focus1.svg\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>{{ itemX.name }}</h2>\n        <p *ngIf=\"itemX.phones && itemX.phones.length > 0\" class=\"phones\">\n          <a *ngFor=\"let phone of itemX.phones\" href=\"tel:{{ phone.phone }}\">{{ phone.phone }}</a>\n        </p>\n        <p *ngIf=\"itemX.locations && itemX.locations.length > 0\" class=\"locations\">\n          <span *ngFor=\"let location of itemX.locations\">{{ location.name }}</span>\n        </p>\n        <p *ngIf=\"itemX.address\" class=\"address\">{{itemX.address}}</p>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_directory_single_single_module_ts.js.map