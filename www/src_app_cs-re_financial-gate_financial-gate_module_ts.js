(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_cs-re_financial-gate_financial-gate_module_ts"],{

/***/ 7582:
/*!***********************************************************************!*\
  !*** ./src/app/cs-re/financial-gate/financial-gate-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialGatePageRoutingModule": () => (/* binding */ FinancialGatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _financial_gate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./financial-gate.page */ 7877);




const routes = [
    {
        path: '',
        component: _financial_gate_page__WEBPACK_IMPORTED_MODULE_0__.FinancialGatePage
    }
];
let FinancialGatePageRoutingModule = class FinancialGatePageRoutingModule {
};
FinancialGatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FinancialGatePageRoutingModule);



/***/ }),

/***/ 6871:
/*!***************************************************************!*\
  !*** ./src/app/cs-re/financial-gate/financial-gate.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialGatePageModule": () => (/* binding */ FinancialGatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _financial_gate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./financial-gate-routing.module */ 7582);
/* harmony import */ var _financial_gate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./financial-gate.page */ 7877);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let FinancialGatePageModule = class FinancialGatePageModule {
};
FinancialGatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _financial_gate_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinancialGatePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_financial_gate_page__WEBPACK_IMPORTED_MODULE_1__.FinancialGatePage]
    })
], FinancialGatePageModule);



/***/ }),

/***/ 7877:
/*!*************************************************************!*\
  !*** ./src/app/cs-re/financial-gate/financial-gate.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialGatePage": () => (/* binding */ FinancialGatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_financial_gate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./financial-gate.page.html */ 7623);
/* harmony import */ var _financial_gate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./financial-gate.page.scss */ 6801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FinancialGatePage = class FinancialGatePage {
    constructor() { }
    ngOnInit() {
    }
};
FinancialGatePage.ctorParameters = () => [];
FinancialGatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-financial-gate',
        template: _raw_loader_financial_gate_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_financial_gate_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FinancialGatePage);



/***/ }),

/***/ 6801:
/*!***************************************************************!*\
  !*** ./src/app/cs-re/financial-gate/financial-gate.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".row-w-gr {\n  padding: 0;\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n}\n.row-w-gr ion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmFuY2lhbC1nYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7QUFDUiIsImZpbGUiOiJmaW5hbmNpYWwtZ2F0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LXctZ3Ige1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC0tcGFkZGluZy10b3A6IDVweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 7623:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cs-re/financial-gate/financial-gate.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.financialGate' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list lines=\"none\" class=\"ion-padding-vertical \">\n    <ion-item class=\"row-w-gr\" routerLink-ddd=\"/cs-re/financial-gate/account-statement\" routerDirection=\"forward\">\n      <ion-icon slot=\"start\" color=\"medium\" src=\"assets/icon/report.svg\"></ion-icon>\n      <ion-label>{{ 'FINANCIAL.accountStatement' | translate }}</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"lock-closed-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item class=\"row-w-gr\" routerLink-ddd=\"/cs-re/financial-gate/forward-installments\" routerDirection=\"forward\">\n      <ion-icon slot=\"start\" color=\"medium\" src=\"assets/icon/wallet.svg\"></ion-icon>\n      <ion-label>{{ 'FINANCIAL.forwardInstallments' | translate }}</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"lock-closed-outline\"></ion-icon>\n    </ion-item>\n    \n    <ion-item class=\"row-w-gr\" routerLink-ddd=\"/cs-re/financial-gate/financial\" routerDirection=\"forward\">\n      <ion-icon slot=\"start\" color=\"medium\" src=\"assets/icon/money.svg\"></ion-icon>\n      <ion-label>{{ 'FINANCIAL.financial' | translate }}</ion-label>\n      <ion-icon slot=\"end\" color=\"medium\" name=\"lock-closed-outline\"></ion-icon>\n    </ion-item>\n    \n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cs-re_financial-gate_financial-gate_module_ts.js.map