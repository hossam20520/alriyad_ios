(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_points_view-points_view-points_module_ts"],{

/***/ 2644:
/*!******************************************************************!*\
  !*** ./src/app/points/view-points/view-points-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPointsPageRoutingModule": () => (/* binding */ ViewPointsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _view_points_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-points.page */ 2123);




const routes = [
    {
        path: '',
        component: _view_points_page__WEBPACK_IMPORTED_MODULE_0__.ViewPointsPage
    }
];
let ViewPointsPageRoutingModule = class ViewPointsPageRoutingModule {
};
ViewPointsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewPointsPageRoutingModule);



/***/ }),

/***/ 6690:
/*!**********************************************************!*\
  !*** ./src/app/points/view-points/view-points.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPointsPageModule": () => (/* binding */ ViewPointsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _view_points_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-points-routing.module */ 2644);
/* harmony import */ var _view_points_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-points.page */ 2123);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let ViewPointsPageModule = class ViewPointsPageModule {
};
ViewPointsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_points_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewPointsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_view_points_page__WEBPACK_IMPORTED_MODULE_1__.ViewPointsPage]
    })
], ViewPointsPageModule);



/***/ }),

/***/ 2123:
/*!********************************************************!*\
  !*** ./src/app/points/view-points/view-points.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPointsPage": () => (/* binding */ ViewPointsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_view_points_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view-points.page.html */ 1263);
/* harmony import */ var _view_points_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-points.page.scss */ 8055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);






let ViewPointsPage = class ViewPointsPage {
    constructor(GeneralService, nav) {
        this.GeneralService = GeneralService;
        this.nav = nav;
    }
    ngOnInit() {
        this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //GET Total points
            this.totalPoints = this.getTotalPoints();
            //subscribe if total points changed
            this.GeneralService.cuVars.totalPoints.subscribe((data) => {
                this.totalPoints = data;
            });
        });
    }
    //GET Total points
    getTotalPoints() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.GeneralService.api.generalGet('points_get_total', {}, "GET").then(data => {
                if (data["data"]) {
                    console.log(data);
                    let nextV = (data["data"] > 0) ? this.GeneralService.kFormatter(data["data"]) : { 's': 0, 'p': 0, 'pfx': '' };
                    this.GeneralService.cuVars.totalPoints.next(nextV);
                    return this.GeneralService.kFormatter(data["data"]);
                }
            });
        });
    }
    pushToNextScreenWithParams(pageUrl, params) {
        this.nav.navigateForward(pageUrl, { state: { typeInfo: params } });
    }
    doRefresh(event) {
        this.loadPageData();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
ViewPointsPage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
ViewPointsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-view-points',
        template: _raw_loader_view_points_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_points_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewPointsPage);



/***/ }),

/***/ 8055:
/*!**********************************************************!*\
  !*** ./src/app/points/view-points/view-points.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".points-line {\n  background: #fff;\n  border-radius: 50px;\n  overflow: hidden;\n  box-shadow: 0 4px 15px #0000003b;\n  margin-bottom: 40px;\n  z-index: 5;\n}\n.points-line img {\n  width: 58px;\n  -webkit-filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));\n}\n.points-line .s1 {\n  background: var(--ion-color-primary, #333);\n  padding: 10px 28px 10px 25px;\n  position: relative;\n  color: #fff;\n}\n.points-line .s1 .t {\n  background: var(--ion-color-secondary, #333);\n  letter-spacing: 3px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 20px;\n}\n.points-line .s1 .t span {\n  transform: rotate(-90deg) translate(-40px, 0px);\n  display: block;\n  white-space: nowrap;\n  font-size: 0.8em;\n}\n.points-line .s2 {\n  padding: 0 5vw;\n  font-weight: bold;\n  justify-content: center;\n  width: 68%;\n}\n.points-line .s2 .co {\n  align-items: flex-end;\n  color: var(--ion-color-primary, #333);\n}\n.points-line .s2 .num {\n  font-size: 45px;\n  font-weight: bold;\n  display: block;\n  line-height: 0.9;\n  letter-spacing: -2px;\n}\n.points-line .s2 i.pfx {\n  font-size: 0.6em;\n  font-style: normal;\n  margin-inline-start: 3px;\n}\n.points-line .s2 .t {\n  margin-inline-start: 10px;\n  font-size: 1.2em;\n  line-height: 1;\n}\n.prm-actions {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-column-gap: 20px;\n  margin-bottom: 20px;\n  padding-bottom: 30px;\n  border-bottom: 1px solid #dedede;\n}\n.prm-actions a {\n  padding: 25px 15px;\n  border-radius: 16px;\n}\n.prm-actions ion-icon {\n  margin: 0 auto 10px;\n  font-size: 40px;\n  color: var(--ion-color-primary, #333);\n}\n.msg-co.general {\n  background-color: #e9e9e9;\n  border-top: 4px solid #00000085;\n}\nul.list-s {\n  list-style: none;\n  padding: 0;\n}\nul.list-s li {\n  padding: 9px 5px;\n  display: flex;\n  align-items: center;\n}\nul.list-s li::before {\n  content: \" \";\n  border-radius: 50%;\n  border: 2px solid;\n  border-color: var(--ion-color-primary, #333);\n  width: 6px;\n  height: 6px;\n  margin: 2px 10px;\n}\n.msg-to-i {\n  line-height: 1.7;\n  font-size: 0.9em;\n}\n[dir=rtl] :host .points-line .s1 {\n  padding: 10px 20px 10px 35px;\n}\n[dir=rtl] :host .points-line .s1 .t {\n  right: auto;\n  left: 0;\n}\n[dir=rtl] :host .points-line .s1 .t span {\n  transform: rotate(-91deg) translate(-16px, 0px);\n  letter-spacing: 0px;\n  font-size: 1.05em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcG9pbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQ0o7QUFDSTtFQUNJLFdBQUE7RUFDQSwyREFBQTtBQUNSO0FBQ0k7RUFDSSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ1I7QUFFUTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBWjtBQUVZO0VBQ0ksK0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFoQjtBQUtJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBSFI7QUFLUTtFQUNJLHFCQUFBO0VBQ0EscUNBQUE7QUFIWjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFIWjtBQU1RO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBSlo7QUFPUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTFo7QUFVQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBUEo7QUFTSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVNJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUFQUjtBQVVBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtBQVBKO0FBVUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFQSjtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVFRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFOWjtBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQVJKO0FBY0k7RUFDSSw0QkFBQTtBQVhSO0FBYVE7RUFDSSxXQUFBO0VBQ0EsT0FBQTtBQVhaO0FBYVk7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFYaEIiLCJmaWxlIjoidmlldy1wb2ludHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50cy1saW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4ICMwMDAwMDAzYjtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIHotaW5kZXg6IDU7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogNThweDtcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggNXB4IHJnYmEoMCwwLDAsMC4yKSk7XG4gICAgfVxuICAgIC5zMSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzMzKTtcbiAgICAgICAgcGFkZGluZzogMTBweCAyOHB4IDEwcHggMjVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogI2ZmZjtcblxuXG4gICAgICAgIC50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksICMzMzMpO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7ICBcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoIC05MGRlZyApIHRyYW5zbGF0ZSgtNDBweCwgMHB4KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuczIge1xuICAgICAgICBwYWRkaW5nOiAwIDV2dztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogNjglO1xuXG4gICAgICAgIC5jbyB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzMzMpO1xuICAgICAgICB9XG4gICAgICAgIC5udW0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjk7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGkucGZ4IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudCB7XG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJtLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcblxuICAgIGEge1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzMzMpO1xuICAgIH1cbn1cbi5tc2ctY28uZ2VuZXJhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzAwMDAwMDg1O1xufVxuXG51bC5saXN0LXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogOXB4IDVweCA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzMzMyk7XG4gICAgICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDJweCAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubXNnLXRvLWkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuXG5bZGlyPVwicnRsXCJdIDpob3N0IHtcblxuICAgIC5wb2ludHMtbGluZSAuczF7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDM1cHg7XG5cbiAgICAgICAgLnQge1xuICAgICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgIFxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoIC05MWRlZyApIHRyYW5zbGF0ZSgtMTZweCwgMHB4KTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9IFxuXG59Il19 */");

/***/ }),

/***/ 1263:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/points/view-points/view-points.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.points' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- points -->\n  <div class=\"points-line d-flex ion-margin-top\" routerLink=\"/points\">\n    <div class=\"side s1 d-flex\">\n        <img src=\"assets/coin.svg\" alt=\"points\">\n        <div class=\"t ion-text-uppercase\"><span>{{ 'POINTS.point' | translate }}</span></div>\n    </div>\n    <div class=\"side s2 d-flex f-a-c\">\n      <div class=\"co d-flex\">\n        <span class=\"num\" *ngIf=\"totalPoints\">{{totalPoints.s}}</span>\n       \n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"msg-to-i ion-text-center ion-margin-vertical ion-padding-vertical\">\n    {{ 'POINTS.msgToInv' | translate }}\n  </div>\n  <div class=\"prm-actions\">\n    <a routerLink=\"/points/friend-info\" class=\"row-w-gr ion-text-center\"> <ion-icon class=\"icon d-block\" src=\"assets/icon/contact.svg\"></ion-icon> {{ 'POINTS.regFrInfo' | translate }}</a>\n    <a routerLink=\"/points/add-friends\" class=\"row-w-gr ion-text-center\"> <ion-icon class=\"icon d-block\" src=\"assets/icon/phone-book.svg\"></ion-icon> {{ 'POINTS.selectFContact' | translate }}</a>\n  </div>\n\n\n  <div class=\"more-actions\">\n    <ul class=\"list-s\">\n      \n      <li routerLink=\"/points/already-added\">{{ 'POINTS.fAdded' | translate }}</li>\n      <li (click)=\"pushToNextScreenWithParams('/new-post/ds1_tickets', 'redeem')\">{{ 'POINTS.redeem' | translate }}</li>\n      <li [routerLink]=\"'/dynamic/'+this.GeneralService.cuVars.pointsTermsPid\">{{ 'POINTS.terms' | translate }}</li>\n    </ul>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_points_view-points_view-points_module_ts.js.map