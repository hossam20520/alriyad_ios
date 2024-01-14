(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_cs-re_follow-up-projects_follow-up-projects_module_ts"],{

/***/ 2991:
/*!*******************************************************************************!*\
  !*** ./src/app/cs-re/follow-up-projects/follow-up-projects-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowUpProjectsPageRoutingModule": () => (/* binding */ FollowUpProjectsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _follow_up_projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-up-projects.page */ 6285);




const routes = [
    {
        path: '',
        component: _follow_up_projects_page__WEBPACK_IMPORTED_MODULE_0__.FollowUpProjectsPage
    }
];
let FollowUpProjectsPageRoutingModule = class FollowUpProjectsPageRoutingModule {
};
FollowUpProjectsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FollowUpProjectsPageRoutingModule);



/***/ }),

/***/ 691:
/*!***********************************************************************!*\
  !*** ./src/app/cs-re/follow-up-projects/follow-up-projects.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowUpProjectsPageModule": () => (/* binding */ FollowUpProjectsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _follow_up_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-up-projects-routing.module */ 2991);
/* harmony import */ var _follow_up_projects_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-up-projects.page */ 6285);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pipes/safe.pipe */ 5436);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);









let FollowUpProjectsPageModule = class FollowUpProjectsPageModule {
};
FollowUpProjectsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _follow_up_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.FollowUpProjectsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_follow_up_projects_page__WEBPACK_IMPORTED_MODULE_1__.FollowUpProjectsPage, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe]
    })
], FollowUpProjectsPageModule);



/***/ }),

/***/ 6285:
/*!*********************************************************************!*\
  !*** ./src/app/cs-re/follow-up-projects/follow-up-projects.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowUpProjectsPage": () => (/* binding */ FollowUpProjectsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_follow_up_projects_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./follow-up-projects.page.html */ 1005);
/* harmony import */ var _follow_up_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-up-projects.page.scss */ 5054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_pages_custom_modal_custom_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/custom-modal/custom-modal.page */ 7250);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv/general.service */ 9852);







let FollowUpProjectsPage = class FollowUpProjectsPage {
    constructor(GeneralService, modalCtr) {
        this.GeneralService = GeneralService;
        this.modalCtr = modalCtr;
        this.skeleton = true;
        this.projects = [];
    }
    ngOnInit() {
        this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.api.generalGet('follow_get', {}, "GET").then(data => {
                this.skeleton = false;
                if (data["data"]) {
                    console.log(data["data"]);
                    data["data"].forEach(element => {
                        if (element.due_date) {
                            let dateX = this.GeneralService.dateFromYMD(element.due_date, '-');
                            element.due_date = dateX;
                        }
                        this.projects.push(element);
                    });
                }
            });
        });
    }
    openImagePrev(prevData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtr.create({
                component: src_app_pages_custom_modal_custom_modal_page__WEBPACK_IMPORTED_MODULE_2__.CustomModalPage,
                cssClass: 'transparent-modal',
                componentProps: {
                    prevData: prevData
                }
            });
            modal.present();
        });
    }
    doRefresh(event) {
        this.loadPageData();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
FollowUpProjectsPage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
FollowUpProjectsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-follow-up-projects',
        template: _raw_loader_follow_up_projects_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_follow_up_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FollowUpProjectsPage);



/***/ }),

/***/ 5054:
/*!***********************************************************************!*\
  !*** ./src/app/cs-re/follow-up-projects/follow-up-projects.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top-co {\n  padding: 15px 0 0;\n  margin-bottom: 25px;\n  background: #e5e5e5;\n  border-radius: 10px 10px 0 0;\n  text-align: center;\n}\n.top-co .title {\n  margin: 0;\n  margin-bottom: 3px;\n  font-size: 1.25em;\n}\n.top-co .due_date {\n  opacity: 0.7;\n}\n.complete_percentage {\n  margin-left: auto;\n  background-color: #0000004d;\n  min-width: 50%;\n  overflow: hidden;\n}\n.complete_percentage .prm {\n  color: var(--ion-color-secondary);\n  background-color: var(--ion-color-primary);\n  text-align: center !important;\n  padding: 0 5px;\n  font-size: 0.8em;\n  letter-spacing: -1px;\n  font-weight: bold;\n  height: 100%;\n  line-height: 1.3;\n}\n.plan-co {\n  background: #e4e4e4;\n}\n.gallery-co {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-column-gap: 12px;\n  grid-row-gap: 15px;\n  align-items: stretch;\n}\n.gallery-co img.unit {\n  background: #dfdfdf;\n}\nhr {\n  background: #e1e1e1;\n  margin-top: 40px;\n}\n[dir=rtl] :host .complete_percentage {\n  margin-left: 0;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy11cC1wcm9qZWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUlBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0k7RUFDSSxpQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRFI7QUFNQTtFQUNJLG1CQUFBO0FBSEo7QUFNQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUhKO0FBS0k7RUFDSSxtQkFBQTtBQUhSO0FBT0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFTSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQU5SIiwiZmlsZSI6ImZvbGxvdy11cC1wcm9qZWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWNvIHtcbiAgICBwYWRkaW5nOiAxNXB4IDAgMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgfVxuXG4gICAgLmR1ZV9kYXRlIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbn1cblxuLmNvbXBsZXRlX3BlcmNlbnRhZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA0ZDtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLnBybSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIH1cblxufVxuXG4ucGxhbi1jbyB7XG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbn1cblxuLmdhbGxlcnktY28ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgaW1nLnVuaXR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZmRmZGY7XG4gICAgfVxufVxuXG5ociB7XG4gICAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5cbltkaXI9XCJydGxcIl0gOmhvc3Qge1xuICAgIC5jb21wbGV0ZV9wZXJjZW50YWdlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG59Il19 */");

/***/ }),

/***/ 1005:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cs-re/follow-up-projects/follow-up-projects.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.p_follow_projects' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"skeleton\">\n    <div class=\"custom-skeleton\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%;margin-bottom: 15px;\"></ion-skeleton-text>\n    </div>\n    <ion-skeleton-text animated style=\"height: 150px;margin-bottom: 8px;\"></ion-skeleton-text>\n    <div class=\"d-flex\">\n      <ion-thumbnail slot=\"start\" style=\"width: 33%\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-thumbnail slot=\"start\" style=\"margin: 0 5px;width: 33%\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-thumbnail slot=\"start\" style=\"width: 33%\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n    </div>\n  </div>\n\n  <div class=\"projects-co\" *ngIf=\"projects\">\n    <div class=\"project-unit ion-margin-bottom ion-padding-bottom\" *ngFor=\"let project of projects\">\n      <div class=\"top-co\">\n        \n        <h1 class=\"title\">{{ project.project_title }}</h1>\n\n        <div class=\"more-info\">\n          <span class=\"due_date\" *ngIf=\"project.due_date\">{{ 'GENERAL.deliveryTime' | translate }} {{ project.due_date }}</span>\n          <div class=\"complete_percentage\" *ngIf=\"project.percentage\">\n            <div class=\"prm d-flex f-a-c f-j-c\" style=\"width:{{ project.percentage }}%\">{{ project.percentage }} %</div>\n          </div>\n        </div>\n        <img src=\"{{ project.primary_photo[0]['medium_large'][0] }}\" (click)=\"openImagePrev({ image: project.primary_photo[0]['medium_large'][0] } )\">\n      </div>\n      <div class=\"u-info\">\n        \n        \n        <div class=\"project_contentt\" *ngIf=\"project.project_content\" [innerHTML]=\"project.project_content | safe: 'html'\">\n\n\n      </div>\n\n      </div>\n\n      <!--\n      <div class=\"plan-co ion-padding ion-margin-bottom\" *ngIf=\"project.plan\">\n        <img src=\"{{ project.plan[0] }}\" alt=\"{{ project.project_title }}\">\n      </div>\n      -->\n\n      <div class=\"gallery-co ion-padding-vertical\" *ngIf=\"project.primary_photo\">\n        <img *ngIf=\" project.plan[0] \" class=\"unit\" src=\"{{ project.plan[0] }}\" alt=\"{{ project.project_title }}\" (click)=\"openImagePrev( {image:project.plan[0]} )\">\n        <img *ngFor=\"let img of project.steps\" src=\"{{ img['medium'][0] }}\" alt=\"{{ project.project_title }}\" (click)=\"openImagePrev({image: img['medium_large'][0]} )\">\n       \n      </div>\n      <hr>\n    </div>   \n  </div>\n\n  \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cs-re_follow-up-projects_follow-up-projects_module_ts.js.map