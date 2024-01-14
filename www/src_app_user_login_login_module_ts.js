(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_user_login_login_module_ts"],{

/***/ 1181:
/*!****************************************************!*\
  !*** ./src/app/user/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 2091);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9470:
/*!********************************************!*\
  !*** ./src/app/user/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 1181);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 2091);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 2091:
/*!******************************************!*\
  !*** ./src/app/user/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 2854);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/form-asistant.service */ 7728);
/* harmony import */ var _serv_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv/auth.service */ 7536);
/* harmony import */ var _serv_vars_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../serv/vars.service */ 9183);









let LoginPage = class LoginPage {
    constructor(formBuilder, cValid, router, auth, cuVars) {
        this.formBuilder = formBuilder;
        this.cValid = cValid;
        this.router = router;
        this.auth = auth;
        this.cuVars = cuVars;
        this.password_type = 'password';
    }
    ngOnInit() {
        localStorage.setItem("skip", "false");
        this.credentialsForm = this.formBuilder.group({
            username: ['', this.cValid.validByT('username')],
            password: ['', this.cValid.validByT('password')]
        });
    }
    onSubmitUserData() {
        localStorage.setItem("skip", "false");
        if (this.credentialsForm.value.username == 'first-time') {
            this.router.navigate(['login/first-time']);
        }
        else {
            localStorage.setItem("skip", "false");
            this.auth.login(this.credentialsForm.value);
            localStorage.setItem("skip", "false");
        }
    }
    togglePasswordMode() {
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.cuVars.cUser.subscribe((data) => {
                if (data && data != 'noData' && data.id != 402) {
                    this.router.navigate(['home']);
                }
            });
        });
    }
    skip() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.setItem("skip", "true");
            let value = {
                password: "txkCRMhs49U8UUYBCgfGKa1F",
                username: "gust"
            };
            yield this.auth.login(value);
            yield this.credentialsForm.controls["username"].setValue("");
            yield this.credentialsForm.controls["password"].setValue("");
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_2__.FormAssistantService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _serv_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _serv_vars_service__WEBPACK_IMPORTED_MODULE_4__.VarsService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 927:
/*!********************************************!*\
  !*** ./src/app/user/login/login.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".title {\n  margin: 0 0 30px;\n}\n\nion-item {\n  box-shadow: 1px 3px 13px #00000021;\n  border: 1px solid black;\n  margin-bottom: 20px;\n}\n\nion-item ion-icon {\n  color: black;\n  margin: 0 10px;\n}\n\nion-input {\n  height: 55px;\n}\n\nion-button.submit {\n  background-color: black;\n  --border-radius: 30px;\n  --box-shadow: 0px 5px 10px var(--ion-color-primary-tint);\n}\n\nion-button {\n  text-transform: none;\n}\n\nion-button.mbtn {\n  box-shadow: 1px 3px 13px #00000021;\n  border-radius: 30px;\n  font-size: 14px;\n  margin: 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFSTtFQUVJLFlBQUE7RUFDQSxjQUFBO0FBRFI7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFFSSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0RBQUE7QUFISjs7QUFNQTtFQUVJLG9CQUFBO0FBSko7O0FBT0E7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFKSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50aXRsZSB7XG4gICAgbWFyZ2luOiAwIDAgMzBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIGJveC1zaGFkb3c6IDFweCAzcHggMTNweCAjMDAwMDAwMjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIGlvbi1pY29uIHtcblxuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIH1cbn1cblxuaW9uLWlucHV0IHtcbiAgICBoZWlnaHQ6IDU1cHg7XG59XG5cbmlvbi1idXR0b24uc3VibWl0IHtcbiAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC0tYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmlvbi1idXR0b24ubWJ0biB7XG4gICAgYm94LXNoYWRvdzogMXB4IDNweCAxM3B4ICMwMDAwMDAyMTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDAgNHB4O1xufVxuIl19 */");

/***/ }),

/***/ 2854:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <img src=\"assets/login.png\">\n  \n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmitUserData()\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center ion-padding-vertical>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\" class=\"ion-padding-horizontal\">\n          <div padding class=\"login-title ion-text-center ion-margin-vertical\">\n            <h3 class=\"title\">{{ 'LOGIN.login' | translate }}</h3>\n          </div>\n          <div>\n            \n            <ion-item class=\"ion-margin-bottom ion-no-padding\">\n              <ion-icon   name=\"person-outline\"></ion-icon>\n              <ion-input formControlName=\"username\" type=\"text\" placeholder=\"{{ 'LOGIN.username' | translate }}\" ></ion-input>\n            </ion-item>\n\n            <ion-item class=\"ion-margin-bottom ion-no-padding\">\n              <ion-icon   name=\"lock-closed-outline\"></ion-icon>\n              <ion-input formControlName=\"password\" [type]=\"password_type\" placeholder=\"{{ 'LOGIN.password' | translate }}\" ></ion-input>\n              <ion-icon name=\"eye\" item-right (click)=\"togglePasswordMode()\"></ion-icon> \n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button class=\" \" style=\"background-color: black;\"    type=\"submit\" [disabled]=\"!credentialsForm.valid\" expand=\"block\">{{ 'LOGIN.login' | translate }}</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <div class=\"more-info-x ion-text-center ion-margin-vertical\">\n    <ion-button routerLink=\"forgot\" size=\"small\" fill=\"clear\">{{ 'LOGIN.forgot' | translate }}</ion-button>\n    <ion-button routerLink=\"/dynamic/{{cuVars.contactUsPid}}\" size=\"small\" fill=\"clear\">{{ 'LOGIN.contact_support' | translate }}</ion-button>\n  </div>\n  <div class=\"more-info-x2 ion-text-center ion-margin-vertical\">\n    <ion-button *ngIf=\"cuVars.registerAv != false\" class=\"mbtn\" routerLink=\"/register\" fill=\"clear\">{{ 'LOGIN.register' | translate }}</ion-button>\n    <ion-button (click)=\"skip()\" size=\"small\" fill=\"clear\">{{ 'LOGIN.skip' | translate }}</ion-button>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_user_login_login_module_ts.js.map