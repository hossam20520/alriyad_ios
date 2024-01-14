(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_user_control_control_module_ts"],{

/***/ 5674:
/*!********************************************************!*\
  !*** ./src/app/user/control/control-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlPageRoutingModule": () => (/* binding */ ControlPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _control_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.page */ 9237);




const routes = [
    {
        path: '',
        component: _control_page__WEBPACK_IMPORTED_MODULE_0__.ControlPage
    }
];
let ControlPageRoutingModule = class ControlPageRoutingModule {
};
ControlPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ControlPageRoutingModule);



/***/ }),

/***/ 9909:
/*!************************************************!*\
  !*** ./src/app/user/control/control.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlPageModule": () => (/* binding */ ControlPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _control_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-routing.module */ 5674);
/* harmony import */ var _control_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control.page */ 9237);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let ControlPageModule = class ControlPageModule {
};
ControlPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _control_routing_module__WEBPACK_IMPORTED_MODULE_0__.ControlPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_control_page__WEBPACK_IMPORTED_MODULE_1__.ControlPage]
    })
], ControlPageModule);



/***/ }),

/***/ 9237:
/*!**********************************************!*\
  !*** ./src/app/user/control/control.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlPage": () => (/* binding */ ControlPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_control_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./control.page.html */ 7889);
/* harmony import */ var _control_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control.page.scss */ 6181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/form-asistant.service */ 7728);
/* harmony import */ var _serv_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv/auth.service */ 7536);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../serv/general.service */ 9852);








let ControlPage = class ControlPage {
    constructor(GeneralService, formBuilder, cValid, auth) {
        this.GeneralService = GeneralService;
        this.formBuilder = formBuilder;
        this.cValid = cValid;
        this.auth = auth;
        this.password_type = 'password';
    }
    ngOnInit() {
        this.currentLang = this.GeneralService.cuVars.cLang.value;
        this.GeneralService.cuVars.cLang.subscribe((data) => {
            this.currentLang = data;
        });
        this.credentialsForm = this.formBuilder.group({
            password: ['', this.cValid.validByT('password')]
        });
    }
    onChangeLang($event) {
        this.GeneralService.changeLanguage($event.target.value);
    }
    onChangeNotifi($event) {
    }
    logOut() {
        this.auth.logout();
    }
    onSubmitUserData() {
        this.auth.changePassword(this.credentialsForm.value);
    }
    togglePasswordMode() {
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    }
    strongPassMeter($event) {
        let value = $event.target.value;
        // regex 
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (value == '') {
            this.passwordStrong = "transparent";
        }
        else if (strongRegex.test(value)) {
            this.passwordStrong = "green";
        }
        else if (mediumRegex.test(value)) {
            this.passwordStrong = "orange";
        }
        else {
            this.passwordStrong = "red";
        }
    }
};
ControlPage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_4__.GeneralService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_2__.FormAssistantService },
    { type: _serv_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
ControlPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-control',
        template: _raw_loader_control_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_control_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ControlPage);



/***/ }),

/***/ 6181:
/*!************************************************!*\
  !*** ./src/app/user/control/control.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item-group {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJjb250cm9sLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 7889:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/control/control.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.control' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-label>{{ 'GENERAL.settings' | translate }}</ion-label>\n    </ion-item-divider>\n  \n    <ion-item>\n      <div tabindex=\"0\"></div>\n      <ion-label>{{ 'USER_CONTROL.change_language' | translate }}</ion-label>\n      <ion-select (ionChange)=\"onChangeLang($event)\" cancelText=\"{{ 'GENERAL.cancel' | translate }}\" okText=\"{{ 'GENERAL.ok' | translate }}\" id=\"selectLang\" name=\"selectLang\" value=\"{{ currentLang }}\">\n        <ion-select-option value=\"en\">English</ion-select-option>\n        <ion-select-option value=\"ar\">عربى</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <div tabindex=\"0\"></div>\n      <ion-label>{{ 'USER_CONTROL.notifi_settings' | translate }}</ion-label>\n      <ion-select (ionChange)=\"onChangeNotifi($event)\" multiple=\"true\" cancelText=\"{{ 'GENERAL.cancel' | translate }}\" okText=\"{{ 'GENERAL.ok' | translate }}\" value=\"general\">\n        <ion-select-option value=\"general\">{{ 'USER_CONTROL.general_notifi' | translate }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-item-group>\n  \n  <ion-item-group> \n    <ion-item-divider>\n      <ion-label>{{ 'USER_CONTROL.change_password' | translate }}</ion-label>\n    </ion-item-divider>\n\n    <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmitUserData()\" padding-right>\n      <ion-item>\n        <div tabindex=\"0\"></div>\n        <ion-input [type]=\"password_type\" formControlName=\"password\" (ionChange)=\"strongPassMeter($event)\" placeholder=\"{{ 'LOGIN.password' | translate }}\"></ion-input>\n        <ion-icon name=\"eye\" item-right (click)=\"togglePasswordMode()\"></ion-icon> \n        <ion-button item-right type=\"submit\" [disabled]=\"!credentialsForm.valid\">\n        {{ 'GENERAL.change' | translate }}\n        </ion-button>\n      </ion-item>\n      <div class=\"pass-strong {{ passwordStrong }}\" style=\"height:2px;background-color:{{ passwordStrong }};\"></div>\n    </form>\n  </ion-item-group>\n\n  <ion-item-group>\n    <div class=\"d ion-margin-bottom\">{{ 'USER_CONTROL.logout_info' | translate }}</div>\n    <ion-button (click)=\"logOut()\" color=\"danger\">\n      <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n    {{ 'USER_CONTROL.logout' | translate }}\n    </ion-button>\n  </ion-item-group>\n\n  \n\n  \n\n\n  \n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_user_control_control_module_ts.js.map