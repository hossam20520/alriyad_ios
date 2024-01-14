(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_directory_gate_gate_module_ts"],{

/***/ 5508:
/*!*******************************************************!*\
  !*** ./src/app/directory/gate/gate-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatePageRoutingModule": () => (/* binding */ GatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _gate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gate.page */ 1026);




const routes = [
    {
        path: '',
        component: _gate_page__WEBPACK_IMPORTED_MODULE_0__.GatePage
    }
];
let GatePageRoutingModule = class GatePageRoutingModule {
};
GatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GatePageRoutingModule);



/***/ }),

/***/ 6095:
/*!***********************************************!*\
  !*** ./src/app/directory/gate/gate.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatePageModule": () => (/* binding */ GatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _gate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gate-routing.module */ 5508);
/* harmony import */ var _gate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gate.page */ 1026);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let GatePageModule = class GatePageModule {
};
GatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gate_routing_module__WEBPACK_IMPORTED_MODULE_0__.GatePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_gate_page__WEBPACK_IMPORTED_MODULE_1__.GatePage]
    })
], GatePageModule);



/***/ }),

/***/ 1026:
/*!*********************************************!*\
  !*** ./src/app/directory/gate/gate.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatePage": () => (/* binding */ GatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_gate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gate.page.html */ 3105);
/* harmony import */ var _gate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gate.page.scss */ 1451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);





let GatePage = class GatePage {
    constructor(GeneralService) {
        this.GeneralService = GeneralService;
        this.skeleton = true;
        this.posts = [];
        this.skeletonNumbers = Array(10).fill(0).map((x, i) => i);
    }
    ngOnInit() {
        this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.api.generalGet('getPosts', { 'post_type': 'ds1_directory' }, "GET").then(data => {
                this.skeleton = false;
                if (data["data"]) {
                    data["data"].forEach(element => {
                        let vX = 'title_' + this.GeneralService.cuVars.cLang.value;
                        element.title = (element[vX]) ? element[vX] : element.title;
                        this.posts.push(element);
                    });
                }
            });
        });
    }
};
GatePage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService }
];
GatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-gate',
        template: _raw_loader_gate_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gate_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GatePage);



/***/ }),

/***/ 1451:
/*!***********************************************!*\
  !*** ./src/app/directory/gate/gate.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".page-custom-header {\n  background: #3e9d4f url(/assets/bg-patt.jpg);\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n  padding: 50px 20px 55px;\n}\n\n.act-btn-co {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 100%;\n}\n\nion-menu-button {\n  margin-inline: 11px;\n}\n\n.co-d {\n  padding-inline: 25px;\n}\n\n.g1 {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 0px;\n  margin-top: -45px;\n  background: #fff;\n  box-shadow: 0 3px 15px #4848483b;\n  border-radius: 10px;\n}\n\n.g1 .unit {\n  padding: 30px 15px;\n  border-top: 1px solid #e5e5e5;\n  border-left: 1px solid #e5e5e5;\n  line-height: 1.2;\n}\n\n.g1 .unit:nth-child(-n+2) {\n  border-top: none;\n}\n\n.g1 .unit:nth-child(odd) {\n  border-left: none;\n}\n\n.g1 .unit img {\n  max-width: 45px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7QUFHSjs7QUFEQTtFQUNJLG9CQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBSVI7O0FBRlE7RUFDSSxnQkFBQTtBQUlaOztBQUZRO0VBQ0ksaUJBQUE7QUFJWjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUdaIiwiZmlsZSI6ImdhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY3VzdG9tLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2U5ZDRmIHVybCgvYXNzZXRzL2JnLXBhdHQuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDUwcHggMjBweCA1NXB4O1xyXG59XHJcbi5hY3QtYnRuLWNvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgbWFyZ2luLWlubGluZTogMTFweDtcclxufVxyXG4uY28tZCB7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMjVweDtcclxufVxyXG4uZzEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBncmlkLWdhcDogMHB4O1xyXG5cclxuICAgIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDE1cHggIzQ4NDg0ODNiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAudW5pdCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZCgtbisyKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 3105:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/directory/gate/gate.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content>\n  <div class=\"page-custom-header\">\n    <div class=\"act-btn-co\">\n      <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>  \n    </div>\n\n    <h1>{{ 'P_TITLES.directoryGate' | translate }}</h1>\n    <p>{{ 'DIRECTORY.desc' | translate }}</p>\n  </div>\n  <div class=\"co-d\">\n\n    <div *ngIf=\"skeleton\">\n      <div class=\"co g1\">\n        <div class=\"unit\" *ngFor=\"let number of skeletonNumbers\">\n          <ion-skeleton-text animated style=\"width: 60px;height: 60px;margin: auto;\"></ion-skeleton-text>\n          <ion-skeleton-text animated class=\"t d-block\"></ion-skeleton-text>\n        </div>\n      </div>\n    </div>\n    <div class=\"g1\" *ngIf=\"posts.length > 0\">\n      <a class=\"unit ion-text-center\" routerLink=\"/directory/decore\" routerDirection=\"forward\">\n        <img src=\"assets/decore.png\">\n        <span class=\"t d-block\">{{ 'DIRECTORY.decore' | translate }}</span>\n      </a>\n\n      <a *ngFor=\"let serv of posts\" class=\"unit ion-text-center\" routerLink=\"/directory/{{ serv.id }}\" routerDirection=\"forward\">\n        <img src=\"{{ serv.icon }}\">\n        <span class=\"t d-block\">{{ serv.title }}</span>\n      </a>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_directory_gate_gate_module_ts.js.map