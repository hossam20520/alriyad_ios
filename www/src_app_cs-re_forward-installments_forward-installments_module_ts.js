(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_cs-re_forward-installments_forward-installments_module_ts"],{

/***/ 4954:
/*!***********************************************************************************!*\
  !*** ./src/app/cs-re/forward-installments/forward-installments-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForwardInstallmentsPageRoutingModule": () => (/* binding */ ForwardInstallmentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forward_installments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forward-installments.page */ 5926);




const routes = [
    {
        path: '',
        component: _forward_installments_page__WEBPACK_IMPORTED_MODULE_0__.ForwardInstallmentsPage
    }
];
let ForwardInstallmentsPageRoutingModule = class ForwardInstallmentsPageRoutingModule {
};
ForwardInstallmentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForwardInstallmentsPageRoutingModule);



/***/ }),

/***/ 6965:
/*!***************************************************************************!*\
  !*** ./src/app/cs-re/forward-installments/forward-installments.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForwardInstallmentsPageModule": () => (/* binding */ ForwardInstallmentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _forward_installments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forward-installments-routing.module */ 4954);
/* harmony import */ var _forward_installments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forward-installments.page */ 5926);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let ForwardInstallmentsPageModule = class ForwardInstallmentsPageModule {
};
ForwardInstallmentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forward_installments_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForwardInstallmentsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_forward_installments_page__WEBPACK_IMPORTED_MODULE_1__.ForwardInstallmentsPage]
    })
], ForwardInstallmentsPageModule);



/***/ }),

/***/ 5926:
/*!*************************************************************************!*\
  !*** ./src/app/cs-re/forward-installments/forward-installments.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForwardInstallmentsPage": () => (/* binding */ ForwardInstallmentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_forward_installments_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forward-installments.page.html */ 5381);
/* harmony import */ var _forward_installments_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forward-installments.page.scss */ 321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);






let ForwardInstallmentsPage = class ForwardInstallmentsPage {
    constructor(GeneralService, formBuilder) {
        this.GeneralService = GeneralService;
        this.formBuilder = formBuilder;
        this.skeleton = true;
        this.financial = [];
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            colectDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            installments: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
        this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var tDate = new Date();
            var date = ('0' + tDate.getDate()).slice(-2);
            var month = ('0' + (tDate.getMonth() + 1)).slice(-2);
            var year = tDate.getFullYear();
            this.colectDateMin = year + '-' + month + '-' + date;
            var newDate = new Date(tDate.setMonth(tDate.getMonth() + 2));
            var date = ('0' + newDate.getDate()).slice(-2);
            var month = ('0' + (newDate.getMonth() + 1)).slice(-2);
            var year = newDate.getFullYear();
            this.colectDateMax = year + '-' + month + '-' + date;
            this.GeneralService.api.generalGet('financial_get', {}, "GET").then(data => {
                this.skeleton = false;
                if (data["data"] && data["data"].financial) {
                    this.financial = [];
                    data["data"].financial.forEach(element => {
                        if (parseInt(element.payment_made) == 1) {
                            return;
                        }
                        let dateX = this.GeneralService.dateFromYMD(element.date, '-');
                        element.date = dateX;
                        this.financial.push(element);
                    });
                }
            });
        });
    }
    onSubmitUserData() {
    }
};
ForwardInstallmentsPage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ForwardInstallmentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-forward-installments',
        template: _raw_loader_forward_installments_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forward_installments_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForwardInstallmentsPage);



/***/ }),

/***/ 321:
/*!***************************************************************************!*\
  !*** ./src/app/cs-re/forward-installments/forward-installments.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3J3YXJkLWluc3RhbGxtZW50cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5381:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cs-re/forward-installments/forward-installments.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"cs-re/financial-gate\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.forwardInstallments' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p>{{ 'FINANCIAL.forwardInstallmentsInfo' | translate }}</p>\n\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmitUserData()\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center ion-padding-vertical>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\" class=\"ion-padding-horizontal\">\n            <ion-item class=\"ion-margin-bottom ion-no-padding\">\n              <ion-icon color=\"primary\" name=\"calendar-outline\"></ion-icon>\n              <ion-datetime formControlName=\"colectDate\" displayFormat=\"DD-MM-YYYY\" min=\"{{colectDateMin}}\" max=\"{{colectDateMax}}\" placeholder=\"{{ 'FINANCIAL.colectDate' | translate }}\"></ion-datetime>\n            </ion-item>\n\n            <ion-skeleton-text *ngIf=\"skeleton\" animated style=\"height: 45px;margin-bottom: 15px;border-radius: 50px;\"></ion-skeleton-text>\n\n            <ion-item class=\"ion-margin-bottom ion-no-padding\" *ngIf=\"financial.length > 0\">\n              <ion-icon color=\"primary\" name=\"calculator-outline\"></ion-icon>\n              <ion-select  formControlName=\"installments\" multiple=\"true\" okText=\"{{ 'GENERAL.ok' | translate }}\" cancelText=\"{{ 'GENERAL.cancel' | translate }}\" placeholder=\"{{ 'FINANCIAL.installments' | translate }}\">\n                <ion-select-option *ngFor=\"let insta of financial\">{{insta.title + ' ' + insta.date}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          <div padding>\n            <ion-button class=\"submit\" type=\"submit\" [disabled]=\"!credentialsForm.valid\" expand=\"block\">{{ 'GENERAL.send' | translate }}</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cs-re_forward-installments_forward-installments_module_ts.js.map