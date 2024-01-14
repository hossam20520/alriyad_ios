(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_pages_dynamic_dynamic_module_ts"],{

/***/ 4706:
/*!*********************************************************!*\
  !*** ./src/app/pages/dynamic/dynamic-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicPageRoutingModule": () => (/* binding */ DynamicPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dynamic_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic.page */ 4448);




const routes = [
    {
        path: '',
        component: _dynamic_page__WEBPACK_IMPORTED_MODULE_0__.DynamicPage
    }
];
let DynamicPageRoutingModule = class DynamicPageRoutingModule {
};
DynamicPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DynamicPageRoutingModule);



/***/ }),

/***/ 1342:
/*!*************************************************!*\
  !*** ./src/app/pages/dynamic/dynamic.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicPageModule": () => (/* binding */ DynamicPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dynamic_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-routing.module */ 4706);
/* harmony import */ var _dynamic_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic.page */ 4448);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pipes/safe.pipe */ 5436);









let DynamicPageModule = class DynamicPageModule {
};
DynamicPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _dynamic_routing_module__WEBPACK_IMPORTED_MODULE_0__.DynamicPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_dynamic_page__WEBPACK_IMPORTED_MODULE_1__.DynamicPage, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe]
    })
], DynamicPageModule);



/***/ }),

/***/ 4448:
/*!***********************************************!*\
  !*** ./src/app/pages/dynamic/dynamic.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicPage": () => (/* binding */ DynamicPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dynamic_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dynamic.page.html */ 3701);
/* harmony import */ var _dynamic_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic.page.scss */ 4454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);






let DynamicPage = class DynamicPage {
    constructor(activatedRoute, GeneralService) {
        this.activatedRoute = activatedRoute;
        this.GeneralService = GeneralService;
        this.skeleton = true;
        this.postId = 0;
    }
    ngOnInit() {
        this.postId = this.activatedRoute.snapshot.paramMap.get('id');
        //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
        this.loadPageData();
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.api.generalGet('getPost', { "pid": this.postId }, "GET").then(data => {
                this.skeleton = false;
                if (data["data"]) {
                    this.post = data["data"];
                }
            });
        });
    }
    doRefresh(event) {
        this.loadPageData();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
DynamicPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService }
];
DynamicPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dynamic',
        template: _raw_loader_dynamic_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dynamic_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DynamicPage);



/***/ }),

/***/ 4454:
/*!*************************************************!*\
  !*** ./src/app/pages/dynamic/dynamic.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-skeleton-text {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJkeW5hbWljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1za2VsZXRvbi10ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgICBcbn0iXX0= */");

/***/ }),

/***/ 3701:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic/dynamic.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"post && post.title\">{{ post.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"skeleton\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n  </div>\n  \n  <img *ngIf=\"post && post.cover\" [src]=\"post.cover\" [style.width]=\"'100%'\">\n  <div class=\"data\" *ngIf=\"post && post.content\" [innerHTML]=\"post.content | safe: 'html'\">\n\t</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dynamic_dynamic_module_ts.js.map