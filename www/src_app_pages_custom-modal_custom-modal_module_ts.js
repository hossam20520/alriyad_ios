(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_pages_custom-modal_custom-modal_module_ts"],{

/***/ 767:
/*!*******************************************************************!*\
  !*** ./src/app/pages/custom-modal/custom-modal-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomModalPageRoutingModule": () => (/* binding */ CustomModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _custom_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-modal.page */ 7250);




const routes = [
    {
        path: '',
        component: _custom_modal_page__WEBPACK_IMPORTED_MODULE_0__.CustomModalPage
    }
];
let CustomModalPageRoutingModule = class CustomModalPageRoutingModule {
};
CustomModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomModalPageRoutingModule);



/***/ }),

/***/ 1891:
/*!***********************************************************!*\
  !*** ./src/app/pages/custom-modal/custom-modal.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomModalPageModule": () => (/* binding */ CustomModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _custom_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-modal-routing.module */ 767);
/* harmony import */ var _custom_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-modal.page */ 7250);







let CustomModalPageModule = class CustomModalPageModule {
};
CustomModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _custom_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomModalPageRoutingModule
        ],
        declarations: [_custom_modal_page__WEBPACK_IMPORTED_MODULE_1__.CustomModalPage]
    })
], CustomModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_custom-modal_custom-modal_module_ts.js.map