(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_pages_new-post_new-post_module_ts"],{

/***/ 1142:
/*!***********************************************************!*\
  !*** ./src/app/pages/new-post/new-post-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPostPageRoutingModule": () => (/* binding */ NewPostPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _new_post_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-post.page */ 8604);




const routes = [
    {
        path: '',
        component: _new_post_page__WEBPACK_IMPORTED_MODULE_0__.NewPostPage
    }
];
let NewPostPageRoutingModule = class NewPostPageRoutingModule {
};
NewPostPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewPostPageRoutingModule);



/***/ }),

/***/ 1222:
/*!***************************************************!*\
  !*** ./src/app/pages/new-post/new-post.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPostPageModule": () => (/* binding */ NewPostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _new_post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-post-routing.module */ 1142);
/* harmony import */ var _new_post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-post.page */ 8604);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let NewPostPageModule = class NewPostPageModule {
};
NewPostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_post_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewPostPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_new_post_page__WEBPACK_IMPORTED_MODULE_1__.NewPostPage]
    })
], NewPostPageModule);



/***/ }),

/***/ 8604:
/*!*************************************************!*\
  !*** ./src/app/pages/new-post/new-post.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPostPage": () => (/* binding */ NewPostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_new_post_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-post.page.html */ 9567);
/* harmony import */ var _new_post_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-post.page.scss */ 4467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/form-asistant.service */ 7728);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv/general.service */ 9852);








let NewPostPage = class NewPostPage {
    constructor(GeneralService, cValid, formBuilder, route, router) {
        this.GeneralService = GeneralService;
        this.cValid = cValid;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.selectOpt = '';
        this.textareaInfo = '';
    }
    ngOnInit() {
        this.typeToP = this.route.snapshot.paramMap.get('type');
        if (this.router.getCurrentNavigation().extras.state) {
            this.selectOpt = (this.router.getCurrentNavigation().extras.state.typeInfo) ? this.router.getCurrentNavigation().extras.state.typeInfo : '';
            this.textareaInfo = (this.router.getCurrentNavigation().extras.state.textareaInfo) ? this.router.getCurrentNavigation().extras.state.textareaInfo : '';
        }
        const settings = {
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            p_type: [this.selectOpt, []],
            post_content: [this.textareaInfo, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        };
        const settingsNotUser = {
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            phone: ['', this.cValid.validByT('phone')],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            p_type: [this.selectOpt, []],
            post_content: [this.textareaInfo, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        };
        this.GeneralService.cuVars.cUser.subscribe((data) => {
            var settingV = (data !== 'noData') ? settings : settingsNotUser;
            this.credentialsForm = this.formBuilder.group(settingV);
        });
    }
    onSubmitUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.loadingPanel('open');
            if (this.credentialsForm.value.phone) {
                this.credentialsForm.value.post_content = "Name: " + this.credentialsForm.value.name + " \n " + "Phone: " + this.credentialsForm.value.phone + " \n " + this.credentialsForm.value.post_content;
            }
            this.GeneralService.api.generalGet('addPost', { 'post_type': this.typeToP, 'fields': this.credentialsForm.value }, "POST").then(data => {
                this.GeneralService.loadingPanel('close');
                if (data["data"]) {
                    //If msg !
                    if (data["data"] && data["data"].msg) {
                        this.GeneralService.presentAlert(data["data"].msg);
                    }
                    if (data["data"].st == 'done') {
                        this.credentialsForm.reset();
                    }
                }
            });
        });
    }
};
NewPostPage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_2__.FormAssistantService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
NewPostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-new-post',
        template: _raw_loader_new_post_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_post_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewPostPage);



/***/ }),

/***/ 4467:
/*!***************************************************!*\
  !*** ./src/app/pages/new-post/new-post.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  margin-right: 10px;\n}\n\nion-textarea {\n  height: 100px;\n}\n\n[dir=rtl] :host ion-icon {\n  margin-right: 0;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBR0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJuZXctcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbltkaXI9XCJydGxcIl0gOmhvc3Qge1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ 9567:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-post/new-post.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.addNew' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h2 class=\"ion-margin-bottom\">{{ 'P_TITLES.'+typeToP | translate }}</h2>\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmitUserData()\" padding-right>\n\n    <ion-item class=\"ion-margin-bottom ion-no-padding\" *ngIf=\"typeToP == 'ds1_tickets'\">\n      <div tabindex=\"0\"></div>\n      <ion-icon color=\"primary\" name=\"barcode-outline\"></ion-icon>\n      <ion-label>{{ 'NEWPOST.p_type' | translate }}</ion-label>\n      <ion-select formControlName=\"p_type\" cancelText=\"{{ 'GENERAL.cancel' | translate }}\" okText=\"{{ 'GENERAL.ok' | translate }}\" value=\"complaint\">\n        <ion-select-option *ngIf=\"this.GeneralService.cuVars.cUser.value !='noData'\" value=\"general\">{{ 'NEWPOST.general' | translate }}</ion-select-option>\n        <ion-select-option value=\"meeting\">{{ 'NEWPOST.meeting' | translate }}</ion-select-option>\n        <ion-select-option *ngIf=\"this.GeneralService.cuVars.cUser.value !='noData'\" value=\"redeem\">{{ 'NEWPOST.redeem' | translate }}</ion-select-option>\n        <ion-select-option value=\"decore\">{{ 'NEWPOST.decore' | translate }}</ion-select-option>\n        <ion-select-option *ngIf=\"this.GeneralService.cuVars.cUser.value !='noData'\" value=\"suggestion\">{{ 'NEWPOST.suggestion' | translate }}</ion-select-option>\n        <ion-select-option *ngIf=\"this.GeneralService.cuVars.cUser.value !='noData'\" value=\"other\">{{ 'NEWPOST.other' | translate }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class=\"ion-margin-bottom ion-no-padding\" *ngIf=\"this.GeneralService.cuVars.cUser.value =='noData'\">\n      <div tabindex=\"0\"></div>\n      <ion-icon color=\"primary\" name=\"person-outline\"></ion-icon>\n      <ion-input autofocus formControlName=\"name\" type=\"text\" placeholder=\"{{ 'NEWPOST.name' | translate }}\" ></ion-input>\n    </ion-item>\n\n\n    <ion-item class=\"ion-margin-bottom ion-no-padding\" *ngIf=\"this.GeneralService.cuVars.cUser.value =='noData'\">\n      <div tabindex=\"0\"></div>\n      <ion-icon color=\"primary\" name=\"phone-portrait-outline\"></ion-icon>\n      <ion-input autofocus formControlName=\"phone\" type=\"text\" placeholder=\"{{ 'NEWPOST.phone' | translate }}\" ></ion-input>\n    </ion-item>\n\n    <ion-item class=\"ion-margin-bottom ion-no-padding\">\n      <div tabindex=\"0\"></div>\n      <ion-icon color=\"primary\" name=\"chatbubble-ellipses-outline\"></ion-icon>\n      <ion-input autofocus formControlName=\"title\" type=\"text\" placeholder=\"{{ 'NEWPOST.post_title' | translate }}\" ></ion-input>\n    </ion-item>\n\n\n    <ion-item class=\"ion-margin-bottom ion-no-padding\">\n      <div tabindex=\"0\"></div>\n      <ion-icon color=\"primary\" name=\"mail-outline\"></ion-icon>\n      <ion-textarea formControlName=\"post_content\" placeholder=\"{{ 'NEWPOST.your_msg' | translate }}\"></ion-textarea>\n    </ion-item>\n\n    <div padding>\n      <ion-button class=\"submit\" type=\"submit\" [disabled]=\"!credentialsForm.valid\" expand=\"block\">{{ 'GENERAL.send' | translate }}</ion-button>\n    </div>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_new-post_new-post_module_ts.js.map