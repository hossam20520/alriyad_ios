(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_pages_cat_cat_module_ts"],{

/***/ 8596:
/*!*************************************************!*\
  !*** ./src/app/pages/cat/cat-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatPageRoutingModule": () => (/* binding */ CatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat.page */ 8678);




const routes = [
    {
        path: '',
        component: _cat_page__WEBPACK_IMPORTED_MODULE_0__.CatPage
    }
];
let CatPageRoutingModule = class CatPageRoutingModule {
};
CatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CatPageRoutingModule);



/***/ }),

/***/ 1281:
/*!*****************************************!*\
  !*** ./src/app/pages/cat/cat.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatPageModule": () => (/* binding */ CatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-routing.module */ 8596);
/* harmony import */ var _cat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat.page */ 8678);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let CatPageModule = class CatPageModule {
};
CatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cat_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_cat_page__WEBPACK_IMPORTED_MODULE_1__.CatPage]
    })
], CatPageModule);



/***/ }),

/***/ 8678:
/*!***************************************!*\
  !*** ./src/app/pages/cat/cat.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatPage": () => (/* binding */ CatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cat.page.html */ 4698);
/* harmony import */ var _cat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat.page.scss */ 7071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);






let CatPage = class CatPage {
    constructor(route, router, GeneralService) {
        this.route = route;
        this.router = router;
        this.GeneralService = GeneralService;
        this.skeleton = true;
        this.page = 1;
        this.thumbGroupActive = 'line';
        this.thumbGroupG1 = ["real-estate", "post", 'previous-projects'];
        this.skeletonNumbers = Array(7).fill(0).map((x, i) => i);
    }
    ngOnInit() {
        this.typeToP = this.route.snapshot.paramMap.get('type');
        if (this.thumbGroupG1.includes(this.typeToP)) {
            this.thumbGroupActive = 'g1';
        }
        //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
        this.loadPageData();
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.api.generalGet('getPosts', { 'post_type': this.typeToP }, "GET").then(data => {
                this.skeleton = false;
                if (data["data"]) {
                    this.posts = [];
                    data["data"].forEach(element => {
                        if (element.p_state !== "sold-end") {
                            this.posts.push(element);
                        }
                    });
                }
            });
        });
    }
    openDetailsWithQueryParams() {
        let navigationExtras = {
            queryParams: {
                special: 43333
            }
        };
        this.router.navigate(['new-post/ds1_tickets'], navigationExtras);
    }
    doRefresh(event) {
        this.loadPageData();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
CatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService }
];
CatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cat',
        template: _raw_loader_cat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CatPage);



/***/ }),

/***/ 7071:
/*!*****************************************!*\
  !*** ./src/app/pages/cat/cat.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".g1 {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px 10px;\n}\n.g1 ion-card {\n  width: calc(50% - 20px);\n  margin: 0 10px 25px;\n}\n.g1 ion-card-content {\n  padding: 0 !important;\n}\n.g1 ion-card-header {\n  padding: 5px;\n  text-align: center;\n}\n.g1 ion-button {\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n}\nimg.sold-ba {\n  position: absolute;\n  width: 180px;\n  max-width: 60%;\n  top: 40%;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%);\n}\nion-card ion-card-title {\n  font-size: 1em;\n}\nion-card.sold-end .p {\n  opacity: 0.6;\n}\nspan.status {\n  font-size: 0.8em;\n  background: #efeeee;\n  line-height: 1;\n  padding: 3px;\n}\nion-button {\n  --border-radius: 50px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-bottom: 20px;\n  --padding-top: 20px;\n}\n.no-items-icon {\n  font-size: 40px;\n  display: block;\n  margin: auto;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Q7QUFDQztFQUNDLHVCQUFBO0VBQ0csbUJBQUE7QUFDTDtBQUVDO0VBQ0MscUJBQUE7QUFBRjtBQUVDO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFQztFQUNDLGtCQUFBO0VBQ0EscUJBQUE7QUFBRjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0gsY0FBQTtFQUNHLFFBQUE7RUFDQSxTQUFBO0VBQ0gsVUFBQTtFQUNHLGdDQUFBO0FBREo7QUFNQztFQUNDLGNBQUE7QUFIRjtBQU1FO0VBQ0MsWUFBQTtBQUpIO0FBU0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFOSjtBQVNBO0VBQ0MscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQU5EO0FBVUE7RUFDQyxlQUFBO0VBQ0csY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBUEoiLCJmaWxlIjoiY2F0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nMSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0cGFkZGluZzogMjBweCAxMHB4O1xuXG5cdGlvbi1jYXJkIHtcblx0XHR3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgICBcdG1hcmdpbjogMCAxMHB4IDI1cHg7XG5cdH1cblxuXHRpb24tY2FyZC1jb250ZW50IHtcblx0XHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cdH1cblx0aW9uLWNhcmQtaGVhZGVyIHtcblx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdGlvbi1idXR0b24ge1xuXHRcdC0tcGFkZGluZy10b3A6IDJweDtcblx0XHQtLXBhZGRpbmctYm90dG9tOiAycHg7XG5cdH1cbn1cblxuaW1nLnNvbGQtYmEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTgwcHg7XG5cdG1heC13aWR0aDo2MCU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogNTAlO1xuXHR6LWluZGV4OiAyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG59XG5cbmlvbi1jYXJkIHtcblx0aW9uLWNhcmQtdGl0bGUge1xuXHRcdGZvbnQtc2l6ZTogMWVtO1xuXHR9XG5cdCYuc29sZC1lbmQge1xuXHRcdC5wIHtcblx0XHRcdG9wYWNpdHk6IDAuNjtcblx0XHR9XG5cdH1cbn1cblxuc3Bhbi5zdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgYmFja2dyb3VuZDogI2VmZWVlZTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG5cbmlvbi1idXR0b24ge1xuXHQtLWJvcmRlci1yYWRpdXNcdDogNTBweDtcblx0LS1wYWRkaW5nLXN0YXJ0XHQ6IDIwcHg7XG5cdC0tcGFkZGluZy1lbmRcdDogMjBweDtcblx0LS1wYWRkaW5nLWJvdHRvbVx0OiAyMHB4O1xuXHQtLXBhZGRpbmctdG9wXHQ6IDIwcHg7XG59XG5cblxuLm5vLWl0ZW1zLWljb24ge1xuXHRmb250LXNpemU6IDQwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */");

/***/ }),

/***/ 4698:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cat/cat.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.'+typeToP | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-vertical\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"skeleton\">\n    <div class=\"co g1\" *ngIf=\"thumbGroupActive == 'g1'\">\n      <ion-card *ngFor=\"let number of skeletonNumbers\">\n        <ion-skeleton-text animated style=\"width: 100%;height: 80px;margin: 0;\"></ion-skeleton-text>\n        <ion-card-header>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </ion-card-header>\n      </ion-card>\n    </div>\n\n    <div class=\"co\" *ngIf=\"thumbGroupActive !== 'g1'\">\n      <ion-list lines=\"none\">\n        <ion-item *ngFor=\"let number of skeletonNumbers\">\n          <ion-thumbnail slot=\"start\" style=\"height: 40px;\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></h3>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n  \n    </div>\n\n  </div>\n\n  <div class=\"co g1\" *ngIf=\"thumbGroupActive == 'g1'\">\n    <ion-card *ngFor=\"let post of posts\" [routerLink]=\"['/', 'cat', typeToP ,post.id]\" class=\"{{ post.p_state }}\">\n    <ion-card-content>\n      <img *ngIf=\"post.p_state == 'sold-end'\" src=\"assets/sold.png\" class=\"sold-ba\">\n      <img *ngIf=\"post.thumbnail\" [src]=\"post.thumbnail\" class=\"p\">\n    </ion-card-content>\n\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post.title\" text-center></ion-card-title>\n      <ion-button expand=\"full\" fill=\"clear\" size=\"small\" text-right>{{ 'GENERAL.more' | translate }}...</ion-button>\n    </ion-card-header>\n\n    </ion-card>\n  </div>\n\n  <div class=\"co\" *ngIf=\"thumbGroupActive !== 'g1'\">\n\t\t<ion-list lines=\"none\" *ngFor=\"let post of posts\">\n\t\t\t<ion-item [routerLink]=\"['/', 'cat', typeToP ,post.id]\" routerDirection=\"forward\">\n\t\t\t\t<ion-icon slot=\"start\" color=\"medium\" *ngIf=\"(typeToP =='ds1_notifications')\" name=\"notifications\"></ion-icon>\n\t\t\t\t<ion-icon slot=\"start\" color=\"medium\" *ngIf=\"(typeToP =='cs_benefits')\" name=\"gift\"></ion-icon>\n\t\t\t\t<ion-icon slot=\"start\" color=\"medium\" *ngIf=\"(typeToP =='ds1_tickets')\" name=\"bookmark\"></ion-icon>\n\t\t\t\t<ion-label>\n          {{post.title}}\n          <p class=\"status\" *ngIf=\"typeToP =='ds1_tickets' && post.status\">{{ 'GENERAL.'+ post.status | translate }}</p>\n       \n        </ion-label>\n\t\t\t</ion-item>\n      \n      \n\t\t</ion-list>\n\n\t</div>\n  <div class=\"no-posts ion-text-center\" *ngIf=\"posts && posts.length < 1\">\n    <ion-icon name=\"information-circle-outline\" class=\"no-items-icon\"></ion-icon>\n     <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-center\">\n        {{ 'GENERAL.noItems' | translate }}\n      </ion-label>\n    </ion-item>\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/new-post/ds1_tickets\" *ngIf=\"typeToP === 'ds1_tickets'\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cat_cat_module_ts.js.map