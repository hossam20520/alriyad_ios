(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_cs-re_installments_installments_module_ts"],{

/***/ 3957:
/*!*******************************************************************!*\
  !*** ./src/app/cs-re/installments/installments-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallmentsPageRoutingModule": () => (/* binding */ InstallmentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _installments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./installments.page */ 7964);




const routes = [
    {
        path: '',
        component: _installments_page__WEBPACK_IMPORTED_MODULE_0__.InstallmentsPage
    }
];
let InstallmentsPageRoutingModule = class InstallmentsPageRoutingModule {
};
InstallmentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InstallmentsPageRoutingModule);



/***/ }),

/***/ 8935:
/*!***********************************************************!*\
  !*** ./src/app/cs-re/installments/installments.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallmentsPageModule": () => (/* binding */ InstallmentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _installments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./installments-routing.module */ 3957);
/* harmony import */ var _installments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./installments.page */ 7964);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let InstallmentsPageModule = class InstallmentsPageModule {
};
InstallmentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _installments_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstallmentsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_installments_page__WEBPACK_IMPORTED_MODULE_1__.InstallmentsPage]
    })
], InstallmentsPageModule);



/***/ }),

/***/ 7964:
/*!*********************************************************!*\
  !*** ./src/app/cs-re/installments/installments.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallmentsPage": () => (/* binding */ InstallmentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_installments_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./installments.page.html */ 834);
/* harmony import */ var _installments_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./installments.page.scss */ 7002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);





let InstallmentsPage = class InstallmentsPage {
    constructor(GeneralService) {
        this.GeneralService = GeneralService;
        this.skeleton = true;
    }
    ngOnInit() {
        this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //GET Total points
            this.GeneralService.api.generalGet('financial_get', {}, "GET").then(data => {
                this.skeleton = false;
                if (data["data"] && data["data"].financial) {
                    this.total = data["data"].total;
                    this.total_paid = data["data"].total_paid;
                    this.total_paid_pr = data["data"].total_paid_pr;
                    this.financial = [];
                    data["data"].financial.forEach(element => {
                        let t = new Date();
                        let date = ('0' + t.getDate()).slice(-2);
                        let month = ('0' + (t.getMonth() + 1)).slice(-2);
                        let year = t.getFullYear();
                        let dateComp = element.date - parseInt(year + month + date);
                        if (parseInt(element.payment_made) == 1) {
                            element.status = 'done';
                            element.satusIcon = 'checkmark-circle';
                            return;
                        }
                        else if (dateComp < 0) {
                            element.status = 'delay';
                            element.satusIcon = 'calendar-outline';
                        }
                        else if (dateComp < 10) {
                            element.status = 'warning';
                            element.satusIcon = 'calendar-outline';
                        }
                        else {
                            element.status = 'wait';
                            element.satusIcon = 'checkmark-circle';
                        }
                        let dateX = this.GeneralService.dateFromYMD(element.date, '-');
                        element.date = dateX;
                        if (parseInt(element.payment_made) != 1 && !this.nextInstallment) {
                            this.nextInstallment = dateX;
                        }
                        this.financial.push(element);
                    });
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
InstallmentsPage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService }
];
InstallmentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-installments',
        template: _raw_loader_installments_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_installments_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InstallmentsPage);



/***/ }),

/***/ 7002:
/*!***********************************************************!*\
  !*** ./src/app/cs-re/installments/installments.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-skeleton-text {\n  margin-bottom: 10px;\n}\n\nion-grid {\n  padding: 0;\n}\n\nion-grid ion-col {\n  padding: 13px 2px;\n  align-items: center;\n}\n\nion-grid .date {\n  justify-content: flex-end;\n}\n\nion-grid .price {\n  font-size: 0.8em;\n  opacity: 0.7;\n}\n\nion-grid .done {\n  display: none;\n}\n\nion-grid .delay {\n  background: #790005;\n  color: #fff;\n  border: none;\n}\n\nion-grid .warning {\n  background: #e7b344;\n  color: #fff;\n  border: none;\n}\n\nion-grid ion-button {\n  margin: 0;\n  margin-inline-start: 6px;\n  display: none;\n}\n\nion-grid ion-row:nth-child(1) ion-button {\n  display: block;\n}\n\nion-icon {\n  margin-right: 7px;\n  font-size: 1.5em;\n  color: #e3e3e3;\n}\n\n.general-info .c100 {\n  padding: 7px 0;\n  align-items: center;\n  display: flex;\n  margin-bottom: 6px;\n}\n\n[dir=rtl] :host ion-icon {\n  margin-right: 0;\n  margin-left: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbGxtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUFJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUVSOztBQUFJO0VBQ0kseUJBQUE7QUFFUjs7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUVJO0VBQ0ksYUFBQTtBQUFSOztBQUdJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURSOztBQUdJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURSOztBQUtJO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQUhSOztBQU9JO0VBQ0ksY0FBQTtBQUxSOztBQVNBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFXSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVJSOztBQWFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBVlIiLCJmaWxlIjoiaW5zdGFsbG1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1za2VsZXRvbi10ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgICBcbn1cbmlvbi1ncmlke1xuICAgIHBhZGRpbmc6IDA7XG4gICAgXG4gICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMnB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuZGF0ZSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLmRvbmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5kZWxheSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM3OTAwMDU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIC53YXJuaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U3YjM0NDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDZweDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBcbiAgICBpb24tcm93Om50aC1jaGlsZCgxKSBpb24tYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG5pb24taWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OjdweDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiAjZTNlM2UzO1xufVxuXG5cbi5nZW5lcmFsLWluZm8ge1xuICAgIC5jMTAwIHtcbiAgICAgICAgcGFkZGluZzogN3B4IDA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG59XG5cbltkaXI9XCJydGxcIl0gOmhvc3Qge1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 834:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cs-re/installments/installments.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"cs-re/financial-gate\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.financial' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n<!-- Skeleton screen -->\n  <div *ngIf=\"skeleton\">\n    <div class=\"custom-skeleton\">\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;opacity: 0.65;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;opacity: 0.65;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;opacity: 0.65;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;opacity: 0.65;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;opacity: 0.65;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"height: 35px;margin: 1px;\"></ion-skeleton-text>\n    </div>\n  </div>\n\t  \n  <ion-grid *ngIf=\"financial\" class=\"account-table\">\n    <ion-row *ngFor=\"let ppp of financial\" class=\"row-w-gr {{ppp.status}}\">\n      <ion-col class=\"d-flex\" size=\"7\">\n        <div class=\"icon-co\">\n          <ion-icon name=\"{{ppp.satusIcon}}\"></ion-icon>\n        </div>\n        <div>\n          <span class=\"t d-block\">{{ppp.title}}</span>\n          <span class=\"price\">{{ppp.value}} {{ 'GENERAL.EGP' | translate }}</span>\n        </div>\n      </ion-col>\n      <ion-col class=\"d-flex date\" size=\"5\">\n        <div>\n          {{ppp.date}}\n        </div>\n        <ion-button routerLink=\"/cs-re/financial-gate/pay\" class=\"more end\" size=\"small\">{{ 'FINANCIAL.pay' | translate }}</ion-button>\n      </ion-col>\n    \n    </ion-row>\n  </ion-grid>\n\n\n  <!--<div class=\"general-info ion-margin-bottom ion-padding-vertical\">\n\t\t<div class=\"c100 total\" *ngIf=\"total\">\n      <ion-icon name=\"cash\"></ion-icon>\n      {{ 'FINANCIAL.total' | translate }} :\n\t\t\t<span>{{total}} {{ 'GENERAL.EGP' | translate }}</span>\n\t\t</div>\n\n\t\t<div class=\"c100 total_paid \" *ngIf=\"total_paid\">\n\t\t\t\t<ion-icon name=\"cash\"></ion-icon>\n      {{ 'FINANCIAL.total_paid' | translate }} :\n\t\t\t<span>{{total_paid}} {{ 'GENERAL.EGP' | translate }} ( {{total_paid_pr}}% )</span>\n\t\t</div>\n\n    <div class=\"c100 next-p\" *ngIf=\"nextInstallment\">\n      <ion-icon name=\"calendar\"></ion-icon> \n      {{ 'FINANCIAL.next_installment' | translate }}: {{nextInstallment}}\n    </div>\n\t\t\n  </div>-->\n\n  <div class=\"actions\">\n\n  </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cs-re_installments_installments_module_ts.js.map