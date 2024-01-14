(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_pages_dynamic-content_dynamic-content_module_ts"],{

/***/ 6766:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dynamic-content/dynamic-content-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicContentPageRoutingModule": () => (/* binding */ DynamicContentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dynamic_content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-content.page */ 4813);




const routes = [
    {
        path: '',
        component: _dynamic_content_page__WEBPACK_IMPORTED_MODULE_0__.DynamicContentPage
    }
];
let DynamicContentPageRoutingModule = class DynamicContentPageRoutingModule {
};
DynamicContentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DynamicContentPageRoutingModule);



/***/ }),

/***/ 7709:
/*!*****************************************************************!*\
  !*** ./src/app/pages/dynamic-content/dynamic-content.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicContentPageModule": () => (/* binding */ DynamicContentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dynamic_content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-content-routing.module */ 6766);
/* harmony import */ var _dynamic_content_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-content.page */ 4813);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let DynamicContentPageModule = class DynamicContentPageModule {
};
DynamicContentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dynamic_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.DynamicContentPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_dynamic_content_page__WEBPACK_IMPORTED_MODULE_1__.DynamicContentPage]
    })
], DynamicContentPageModule);



/***/ }),

/***/ 4813:
/*!***************************************************************!*\
  !*** ./src/app/pages/dynamic-content/dynamic-content.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicContentPage": () => (/* binding */ DynamicContentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dynamic_content_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dynamic-content.page.html */ 8926);
/* harmony import */ var _dynamic_content_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-content.page.scss */ 3406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);






let DynamicContentPage = class DynamicContentPage {
    constructor(activatedRoute, GeneralService) {
        this.activatedRoute = activatedRoute;
        this.GeneralService = GeneralService;
    }
    ngOnInit() {
        this.typeToP = this.activatedRoute.snapshot.paramMap.get('type');
        this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.api.generalGet('getPost', { "pid": this.typeToP }, "GET").then(data => {
                if (data["data"]) {
                    this.pageContent = data["data"];
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
DynamicContentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService }
];
DynamicContentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dynamic-content',
        template: _raw_loader_dynamic_content_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dynamic_content_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DynamicContentPage);



/***/ }),

/***/ 3406:
/*!*****************************************************************!*\
  !*** ./src/app/pages/dynamic-content/dynamic-content.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWNvbnRlbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 8926:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-content/dynamic-content.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.'+typeToP | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content class=\"ion-padding\">\n    <div class=\"data\" *ngIf=\"pageContent\" [innerHTML]=\"pageContent | safe: 'html'\">\n    </div>\n  </ion-content>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dynamic-content_dynamic-content_module_ts.js.map