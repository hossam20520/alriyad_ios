(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_cs-re_account-statement_account-statement_module_ts"],{

/***/ 3407:
/*!*****************************************************************************!*\
  !*** ./src/app/cs-re/account-statement/account-statement-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatementPageRoutingModule": () => (/* binding */ AccountStatementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _account_statement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-statement.page */ 9957);




const routes = [
    {
        path: '',
        component: _account_statement_page__WEBPACK_IMPORTED_MODULE_0__.AccountStatementPage
    }
];
let AccountStatementPageRoutingModule = class AccountStatementPageRoutingModule {
};
AccountStatementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountStatementPageRoutingModule);



/***/ }),

/***/ 4821:
/*!*********************************************************************!*\
  !*** ./src/app/cs-re/account-statement/account-statement.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatementPageModule": () => (/* binding */ AccountStatementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _account_statement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-statement-routing.module */ 3407);
/* harmony import */ var _account_statement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-statement.page */ 9957);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let AccountStatementPageModule = class AccountStatementPageModule {
};
AccountStatementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_statement_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountStatementPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_account_statement_page__WEBPACK_IMPORTED_MODULE_1__.AccountStatementPage]
    })
], AccountStatementPageModule);



/***/ }),

/***/ 9957:
/*!*******************************************************************!*\
  !*** ./src/app/cs-re/account-statement/account-statement.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatementPage": () => (/* binding */ AccountStatementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_account_statement_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account-statement.page.html */ 8155);
/* harmony import */ var _account_statement_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-statement.page.scss */ 8188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AccountStatementPage = class AccountStatementPage {
    constructor() { }
    ngOnInit() {
    }
};
AccountStatementPage.ctorParameters = () => [];
AccountStatementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-account-statement',
        template: _raw_loader_account_statement_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_statement_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccountStatementPage);



/***/ }),

/***/ 8188:
/*!*********************************************************************!*\
  !*** ./src/app/cs-re/account-statement/account-statement.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtc3RhdGVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoiYWNjb3VudC1zdGF0ZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ 8155:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cs-re/account-statement/account-statement.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"cs-re/financial-gate\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.accountStatement' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p>{{ 'FINANCIAL.accountStatementInfo' | translate }}</p>\n\n <div class=\"action ion-text-center ion-padding-vertical\">\n  <ion-button>\n    <ion-icon slot=\"icon-only\" name=\"download-outline\"></ion-icon>\n    {{ 'FINANCIAL.accountStatementDown' | translate }}\n  </ion-button>\n </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cs-re_account-statement_account-statement_module_ts.js.map