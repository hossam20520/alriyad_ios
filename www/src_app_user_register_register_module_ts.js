(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_user_register_register_module_ts"],{

/***/ 1349:
/*!**********************************************************!*\
  !*** ./src/app/user/register/register-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6273);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 6186:
/*!**************************************************!*\
  !*** ./src/app/user/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1349);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6273);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 6273:
/*!************************************************!*\
  !*** ./src/app/user/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 362);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 7001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/form-asistant.service */ 7728);
/* harmony import */ var _serv_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv/auth.service */ 7536);
/* harmony import */ var _serv_vars_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../serv/vars.service */ 9183);









let RegisterPage = class RegisterPage {
    constructor(formBuilder, cValid, router, auth, cuVars) {
        this.formBuilder = formBuilder;
        this.cValid = cValid;
        this.router = router;
        this.auth = auth;
        this.cuVars = cuVars;
        this.password_type = 'password';
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            email: ['', this.cValid.validByT('email')],
            name: ['', this.cValid.validByT('co_name')],
            phone: ['', this.cValid.validByT('phone')],
            password: ['', this.cValid.validByT('password')]
        });
    }
    onSubmitUserData() {
        this.auth.register(this.credentialsForm.value);
    }
    togglePasswordMode() {
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_2__.FormAssistantService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _serv_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _serv_vars_service__WEBPACK_IMPORTED_MODULE_4__.VarsService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 7001:
/*!**************************************************!*\
  !*** ./src/app/user/register/register.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-back-button {\n  padding: 10px;\n}\n\n.title {\n  margin: 0 0 30px;\n}\n\nform {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\nion-item {\n  box-shadow: 1px 3px 13px #00000021;\n  border-radius: 30px;\n  margin-bottom: 20px;\n}\n\nion-item ion-icon {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBRUE7RUFDRyxpQkFBQTtFQUNBLG9CQUFBO0FBQ0g7O0FBQ0E7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBSTtFQUNJLGNBQUE7QUFFUiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnRpdGxlIHtcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xufVxuZm9ybSB7XG4gICBwYWRkaW5nLXRvcDogNTBweDsgXG4gICBwYWRkaW5nLWJvdHRvbTogNTBweDsgXG59XG5pb24taXRlbSB7XG4gICAgYm94LXNoYWRvdzogMXB4IDNweCAxM3B4ICMwMDAwMDAyMTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIH1cbn1cblxuIl19 */");

/***/ }),

/***/ 362:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"login\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.register' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmitUserData()\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\" class=\"ion-padding\">\n          <div>\n\n            <ion-item class=\"ion-margin-bottom ion-no-padding\">\n              <ion-icon color=\"primary\" name=\"phone-portrait-outline\"></ion-icon>\n              <ion-input autofocus formControlName=\"phone\" type=\"text\" placeholder=\"{{ 'LOGIN.phone' | translate }}\" ></ion-input>\n            </ion-item>\n\n            <ion-item class=\"ion-margin-bottom ion-no-padding\">\n              <ion-icon color=\"primary\" name=\"mail-outline\"></ion-icon>\n              <ion-input autofocus formControlName=\"email\" type=\"text\" placeholder=\"{{ 'LOGIN.email' | translate }}\" ></ion-input>\n            </ion-item>\n\n            <ion-item class=\"ion-margin-bottom ion-no-padding\">\n              <ion-icon color=\"primary\" name=\"person-outline\"></ion-icon>\n              <ion-input autofocus formControlName=\"name\" type=\"text\" placeholder=\"{{ 'LOGIN.name' | translate }}\" ></ion-input>\n            </ion-item>\n            <ion-item class=\"ion-margin-bottom ion-no-padding\">\n              <ion-icon color=\"primary\" name=\"lock-closed-outline\"></ion-icon>\n              <ion-input formControlName=\"password\" [type]=\"password_type\" placeholder=\"{{ 'LOGIN.password' | translate }}\" ></ion-input>\n              <ion-icon name=\"eye\" item-right (click)=\"togglePasswordMode()\"></ion-icon> \n            </ion-item>\n          </div>\n\n\n          <div padding>\n            <ion-button class=\"submit\" type=\"submit\" [disabled]=\"!credentialsForm.valid\" expand=\"block\">{{ 'LOGIN.register' | translate }}</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_user_register_register_module_ts.js.map