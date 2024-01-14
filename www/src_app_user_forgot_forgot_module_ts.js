(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_user_forgot_forgot_module_ts"],{

/***/ 5146:
/*!******************************************************!*\
  !*** ./src/app/user/forgot/forgot-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageRoutingModule": () => (/* binding */ ForgotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page */ 12);




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ 2760:
/*!**********************************************!*\
  !*** ./src/app/user/forgot/forgot.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageModule": () => (/* binding */ ForgotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-routing.module */ 5146);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page */ 12);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPage]
    })
], ForgotPageModule);



/***/ }),

/***/ 12:
/*!********************************************!*\
  !*** ./src/app/user/forgot/forgot.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPage": () => (/* binding */ ForgotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgot.page.html */ 5465);
/* harmony import */ var _forgot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page.scss */ 9850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/form-asistant.service */ 7728);
/* harmony import */ var _serv_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv/auth.service */ 7536);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../serv/general.service */ 9852);








let ForgotPage = class ForgotPage {
    constructor(formBuilder, cValid, auth, GeneralService) {
        this.formBuilder = formBuilder;
        this.cValid = cValid;
        this.auth = auth;
        this.GeneralService = GeneralService;
        this.password_type = 'password';
        this.formStep = 1;
        this.username = '';
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            username: ['', this.cValid.validByT('username')]
        });
        this.credentialsForm_2 = this.formBuilder.group({
            username: ['', this.cValid.validByT('username')],
            active_code: ['', this.cValid.validByT('forgot_code')],
            password: ['', this.cValid.validByT('password')]
        });
    }
    onSubmitUserData($step) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.loadingPanel('open');
            if ($step == 'step1') {
                let result = yield this.auth.sendPassActiveCode(this.credentialsForm.value);
                this.GeneralService.loadingPanel('close');
                if (result.st == 'done') {
                    this.formStep = 2;
                    this.username = this.credentialsForm.value.username;
                }
            }
            if ($step == 'step2') {
                let result = yield this.auth.changePassword(this.credentialsForm_2.value);
                this.GeneralService.loadingPanel('close');
                if (result.st == 'done') {
                    this.formStep = 1;
                    this.auth.login({
                        'username': this.username,
                        'password': this.credentialsForm_2.value.password
                    });
                }
            }
        });
    }
    togglePasswordMode() {
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    }
    toggleFormHaveCode() {
        this.formStep = 21;
    }
};
ForgotPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_2__.FormAssistantService },
    { type: _serv_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService }
];
ForgotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgot',
        template: _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotPage);



/***/ }),

/***/ 9850:
/*!**********************************************!*\
  !*** ./src/app/user/forgot/forgot.page.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".iconx-co {\n  font-size: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiZm9yZ290LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ueC1jbyB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xufSJdfQ== */");

/***/ }),

/***/ 5465:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot/forgot.page.html ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"login\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.forgot' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"iconx-co ion-text-center ion-padding ion-margin-bottom\">\n    <ion-icon src=\"assets/icon/forgot.svg\"></ion-icon>\n  </div>\n\n  <form class=\"step1\" *ngIf=\"formStep == 1\" [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmitUserData('step1')\">\n    <ion-item class=\"ion-margin-bottom ion-no-padding\">\n      <div tabindex=\"0\"></div>\n      <ion-icon color=\"primary\" name=\"person-outline\"></ion-icon>\n      <ion-input name=\"username\" type=\"text\" formControlName=\"username\" placeholder=\"{{ 'LOGIN.username' | translate }}\"></ion-input>      \n    </ion-item>\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" [disabled]=\"!credentialsForm.valid\">\n        {{ 'GENERAL.send' | translate }}\n      </ion-button>\n    </div>\n\n    <p (click)=\"toggleFormHaveCode()\" class=\"ion-text-center\">{{ 'LOGIN.haveCode' | translate }}</p>\n  </form>\n\n\n  <form class=\"step2\" *ngIf=\"formStep == 2 || formStep == 21\" [formGroup]=\"credentialsForm_2\" (ngSubmit)=\"onSubmitUserData('step2')\">\n    <ion-item class=\"ion-margin-bottom ion-no-padding\">\n      <div tabindex=\"0\"></div>\n      <ion-icon color=\"primary\" name=\"person-outline\"></ion-icon>\n      <ion-input [ngModel]=\"username\" type=\"text\" formControlName=\"username\" placeholder=\"{{ 'LOGIN.username' | translate }}\"></ion-input>      \n    </ion-item>\n    <ion-item class=\"ion-margin-bottom ion-no-padding\">\n      <div tabindex=\"0\"></div>\n      <ion-icon color=\"primary\" name=\"barcode-outline\"></ion-icon>\n      <ion-input type=\"text\" name=\"active_code\" formControlName=\"active_code\" autocomplete=\"off\" placeholder=\"{{ 'LOGIN.code' | translate }}\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"ion-margin-bottom ion-no-padding\">\n      <div tabindex=\"0\"></div>\n      <ion-icon color=\"primary\" name=\"lock-closed-outline\"></ion-icon>\n      <ion-input [type]=\"password_type\" name=\"new-password\" formControlName=\"password\" autocomplete=\"new-password\" placeholder=\"{{ 'LOGIN.password' | translate }}\"></ion-input>\n      <ion-icon name=\"eye\" item-right (click)=\"togglePasswordMode()\"></ion-icon> \n      \n    </ion-item>\n\n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" [disabled]=\"!credentialsForm_2.valid\">\n        {{ 'GENERAL.change' | translate }}\n      </ion-button>\n    </div>\n  </form>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_user_forgot_forgot_module_ts.js.map