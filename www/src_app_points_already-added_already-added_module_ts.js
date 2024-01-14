(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_points_already-added_already-added_module_ts"],{

/***/ 2803:
/*!**********************************************************************!*\
  !*** ./src/app/points/already-added/already-added-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlreadyAddedPageRoutingModule": () => (/* binding */ AlreadyAddedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _already_added_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./already-added.page */ 8475);




const routes = [
    {
        path: '',
        component: _already_added_page__WEBPACK_IMPORTED_MODULE_0__.AlreadyAddedPage
    }
];
let AlreadyAddedPageRoutingModule = class AlreadyAddedPageRoutingModule {
};
AlreadyAddedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlreadyAddedPageRoutingModule);



/***/ }),

/***/ 52:
/*!**************************************************************!*\
  !*** ./src/app/points/already-added/already-added.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlreadyAddedPageModule": () => (/* binding */ AlreadyAddedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _already_added_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./already-added-routing.module */ 2803);
/* harmony import */ var _already_added_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./already-added.page */ 8475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let AlreadyAddedPageModule = class AlreadyAddedPageModule {
};
AlreadyAddedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _already_added_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlreadyAddedPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_already_added_page__WEBPACK_IMPORTED_MODULE_1__.AlreadyAddedPage]
    })
], AlreadyAddedPageModule);



/***/ }),

/***/ 8475:
/*!************************************************************!*\
  !*** ./src/app/points/already-added/already-added.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlreadyAddedPage": () => (/* binding */ AlreadyAddedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_already_added_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./already-added.page.html */ 1030);
/* harmony import */ var _already_added_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./already-added.page.scss */ 5705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);





let AlreadyAddedPage = class AlreadyAddedPage {
    constructor(GeneralService) {
        this.GeneralService = GeneralService;
        this.skeleton = true;
        this.friendsList = [];
        this.skeletonNumbers = Array(5).fill(0).map((x, i) => i);
    }
    ngOnInit() {
        this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //GET Total points
            this.GeneralService.api.generalGet('points_reasons', {}, "GET").then(data => {
                this.skeleton = false;
                if (data["data"]) {
                    for (let dataX of data["data"]) {
                        if (dataX.reason == "friend") {
                            this.friendsList.push(dataX);
                        }
                    }
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
AlreadyAddedPage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService }
];
AlreadyAddedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-already-added',
        template: _raw_loader_already_added_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_already_added_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlreadyAddedPage);



/***/ }),

/***/ 5705:
/*!**************************************************************!*\
  !*** ./src/app/points/already-added/already-added.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbHJlYWR5LWFkZGVkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1030:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/points/already-added/already-added.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"points\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.pointsAdded' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"skeleton\">\n    <ion-list>\n      <ion-item *ngFor=\"let number of skeletonNumbers\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n          <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n          <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-list *ngIf=\"friendsList\">\n    <ion-item *ngFor=\"let itemX of friendsList\">\n      <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>{{ itemX.title }}</h2>\n        <p>{{ itemX.unique }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_points_already-added_already-added_module_ts.js.map