(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_points_friend-info_friend-info_module_ts"],{

/***/ 8504:
/*!******************************************************************!*\
  !*** ./src/app/points/friend-info/friend-info-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendInfoPageRoutingModule": () => (/* binding */ FriendInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _friend_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend-info.page */ 8390);




const routes = [
    {
        path: '',
        component: _friend_info_page__WEBPACK_IMPORTED_MODULE_0__.FriendInfoPage
    }
];
let FriendInfoPageRoutingModule = class FriendInfoPageRoutingModule {
};
FriendInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FriendInfoPageRoutingModule);



/***/ }),

/***/ 8254:
/*!**********************************************************!*\
  !*** ./src/app/points/friend-info/friend-info.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendInfoPageModule": () => (/* binding */ FriendInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _friend_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend-info-routing.module */ 8504);
/* harmony import */ var _friend_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friend-info.page */ 8390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let FriendInfoPageModule = class FriendInfoPageModule {
};
FriendInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _friend_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.FriendInfoPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_friend_info_page__WEBPACK_IMPORTED_MODULE_1__.FriendInfoPage]
    })
], FriendInfoPageModule);



/***/ }),

/***/ 8390:
/*!********************************************************!*\
  !*** ./src/app/points/friend-info/friend-info.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendInfoPage": () => (/* binding */ FriendInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_friend_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./friend-info.page.html */ 2043);
/* harmony import */ var _friend_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friend-info.page.scss */ 6477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv/form-asistant.service */ 7728);







let FriendInfoPage = class FriendInfoPage {
    constructor(GeneralService, formBuilder, cValid) {
        this.GeneralService = GeneralService;
        this.formBuilder = formBuilder;
        this.cValid = cValid;
        this.formMsgs = {};
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            phone: ['', this.cValid.validByT('phone')],
            message: ['']
        });
        //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    }
    onSubmitFriendData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.loadingPanel('open');
            this.formMsgs = {};
            yield this.GeneralService.api.generalGet('points_add_friends', { friends: [this.credentialsForm.value] }).then((data) => {
                var _a, _b;
                this.GeneralService.loadingPanel('close');
                //If msg !
                if (data["data"] && data["data"].msg) {
                    this.GeneralService.presentAlert(data["data"].msg);
                }
                if (data["data"].st == 'error' && ((_a = data["data"]) === null || _a === void 0 ? void 0 : _a.errors)) {
                    this.formMsgs["general"] = data["data"].errors[0].error;
                }
                else {
                    this.credentialsForm.reset();
                    //Update points
                    if ((_b = data["data"]) === null || _b === void 0 ? void 0 : _b.new_total) {
                        this.GeneralService.cuVars.totalPoints.next(this.GeneralService.kFormatter(data["data"].new_total));
                    }
                }
            }, (err) => {
                this.GeneralService.loadingPanel('close');
                this.GeneralService.presentAlert(err.message, 'Error');
            });
        });
    }
};
FriendInfoPage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_3__.FormAssistantService }
];
FriendInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-friend-info',
        template: _raw_loader_friend_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_friend_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FriendInfoPage);



/***/ }),

/***/ 6477:
/*!**********************************************************!*\
  !*** ./src/app/points/friend-info/friend-info.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmllbmQtaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2043:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/points/friend-info/friend-info.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"points\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.friendInfo' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  \n  <div class=\"form-to-i ion-margin-vertical\">\n\n    <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmitFriendData()\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\" class=\"\">\n            <div>\n  \n              <ion-item class=\"ion-margin-bottom ion-no-padding\">\n                <ion-icon color=\"primary\" name=\"person-outline\"></ion-icon>\n                <ion-input formControlName=\"name\" type=\"text\" placeholder=\"{{ 'POINTS.name' | translate }}\" ></ion-input>\n              </ion-item>\n              <div class=\"msg-co ion-margin-bottom\" *ngIf=\"formMsgs.name\">{{formMsgs.name}}</div>\n  \n              <ion-item class=\"ion-margin-bottom ion-no-padding\">\n                <ion-icon color=\"primary\" name=\"phone-portrait-outline\"></ion-icon>\n                <ion-input formControlName=\"phone\" type=\"text\" placeholder=\"{{ 'POINTS.phone' | translate }}\" ></ion-input>\n              </ion-item>\n              <div class=\"msg-co ion-margin-bottom\" *ngIf=\"formMsgs.phone\">{{formMsgs.phone}}</div>\n  \n              <ion-item class=\"ion-margin-bottom ion-no-padding\">\n                <ion-icon color=\"primary\" name=\"create-outline\"></ion-icon>\n                <ion-textarea formControlName=\"message\" placeholder=\"{{ 'POINTS.message' | translate }}\"></ion-textarea>\n              </ion-item>\n              <div class=\"msg-co ion-margin-bottom\" *ngIf=\"formMsgs.message\">{{formMsgs.message}}</div>\n\n            </div>\n            <div class=\"msg-co general ion-padding ion-margin-bottom\" *ngIf=\"formMsgs.general\">{{formMsgs.general}}</div>\n\n            <div padding>\n              <ion-button class=\"submit\" type=\"submit\" [disabled]=\"!credentialsForm.valid\" expand=\"block\">{{ 'GENERAL.send' | translate }}</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_points_friend-info_friend-info_module_ts.js.map