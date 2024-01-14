(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_pages_single_single_module_ts"],{

/***/ 3547:
/*!*******************************************************!*\
  !*** ./src/app/pages/single/single-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SinglePageRoutingModule": () => (/* binding */ SinglePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _single_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single.page */ 4089);




const routes = [
    {
        path: '',
        component: _single_page__WEBPACK_IMPORTED_MODULE_0__.SinglePage
    }
];
let SinglePageRoutingModule = class SinglePageRoutingModule {
};
SinglePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SinglePageRoutingModule);



/***/ }),

/***/ 7958:
/*!***********************************************!*\
  !*** ./src/app/pages/single/single.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SinglePageModule": () => (/* binding */ SinglePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _single_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-routing.module */ 3547);
/* harmony import */ var _single_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single.page */ 4089);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pipes/safe.pipe */ 5436);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);









let SinglePageModule = class SinglePageModule {
};
SinglePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _single_routing_module__WEBPACK_IMPORTED_MODULE_0__.SinglePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_single_page__WEBPACK_IMPORTED_MODULE_1__.SinglePage, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe]
    })
], SinglePageModule);



/***/ }),

/***/ 4089:
/*!*********************************************!*\
  !*** ./src/app/pages/single/single.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SinglePage": () => (/* binding */ SinglePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_single_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./single.page.html */ 2678);
/* harmony import */ var _single_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single.page.scss */ 3309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);
/* harmony import */ var _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv/form-asistant.service */ 7728);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _custom_modal_custom_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-modal/custom-modal.page */ 7250);
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ 4542);











let SinglePage = class SinglePage {
    constructor(activatedRoute, formBuilder, cValid, GeneralService, youtube, modalCtr, nav) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.cValid = cValid;
        this.GeneralService = GeneralService;
        this.youtube = youtube;
        this.modalCtr = modalCtr;
        this.nav = nav;
        this.skeleton = true;
        this.typeToP = 'post';
        this.postId = 0;
        this.videoList = [];
        this.slideOpts = {
            slidesPerView: 3,
            initialSlide: 1,
            speed: 400,
            autoplay: true
        };
    }
    ngOnInit() {
        this.postId = this.activatedRoute.snapshot.paramMap.get('id');
        this.typeToP = this.activatedRoute.snapshot.paramMap.get('type');
        this.credentialsForm = this.formBuilder.group({
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5)]]
        });
        //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
        this.loadPageData();
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.api.generalGet('getPost', { 'pid': this.postId }, "GET").then(data => {
                this.skeleton = false;
                if (data["data"]) {
                    this.post = data["data"];
                    this.comments = data["data"].comments;
                    if (!this.post.dontShowDate && ['real-estate', 'previous-projects'].includes(this.typeToP)) {
                        this.post.dontShowDate = true;
                    }
                    if (this.post["follow-projects"]) {
                        this.getFollowProject();
                    }
                    if (this.post["youtube_media"]) {
                        this.youtubeMediaSet();
                    }
                }
            });
        });
    }
    youtubeMediaSet() {
        if (!this.post['youtube_media']) {
            return;
        }
        this.videoList = [];
        this.post.youtube_media.forEach(element => {
            let vID = this.GeneralService.youtube_parser(element.link);
            element.id = vID;
            this.videoList.push(element);
        });
    }
    getFollowProject() {
        this.GeneralService.api.generalGet('getPost', { 'pid': this.post["follow-projects"] }, "GET").then(data => {
            if (data["data"]) {
                let dateX = this.GeneralService.dateFromYMD(data["data"].due_date, '-');
                data["data"].due_date = dateX;
                this.FollowProject = data["data"];
            }
        });
    }
    showMoreContent(targetContent) {
        //console.log(targetContent)
    }
    onSubmitData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.loadingPanel('open');
            this.GeneralService.api.generalGet('addComment', { 'pid': this.postId, 'comment': this.credentialsForm.value.comment }, "POST").then(data => {
                this.GeneralService.loadingPanel('close');
                if (data["data"]) {
                    //If msg !
                    if (data["data"] && data["data"].msg) {
                        this.GeneralService.presentAlert(data["data"].msg);
                    }
                    if (data["data"].st == 'done') {
                        this.post.comments.unshift({ "comment_auth": "current", "comment_date": '', "comment_content": this.credentialsForm.value.comment });
                        this.credentialsForm.reset();
                    }
                }
            });
        });
    }
    openImagePrev(prevData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtr.create({
                component: _custom_modal_custom_modal_page__WEBPACK_IMPORTED_MODULE_4__.CustomModalPage,
                cssClass: 'transparent-modal',
                componentProps: {
                    prevData: prevData
                }
            });
            modal.present();
        });
    }
    openExtMapsLink(map_prop) {
        var link = this.GeneralService.getMaplink(map_prop);
        window.open(link);
    }
    openVideo(vID) {
        this.youtube.openVideo(vID);
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
SinglePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _serv_form_asistant_service__WEBPACK_IMPORTED_MODULE_3__.FormAssistantService },
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_5__.YoutubeVideoPlayer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController }
];
SinglePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-single',
        template: _raw_loader_single_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_single_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SinglePage);



/***/ }),

/***/ 3309:
/*!***********************************************!*\
  !*** ./src/app/pages/single/single.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-skeleton-text {\n  margin-bottom: 10px;\n}\n\n.img-co {\n  position: relative;\n}\n\n.img-co img.sold-ba {\n  position: absolute;\n  width: 130px;\n  max-width: 50%;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%);\n}\n\n.f-more-data .u-term {\n  padding: 2px 7px;\n  background: #dadada;\n  margin-inline-end: 6px;\n  border-radius: 6px;\n  font-size: 0.9em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.f-more-data .u-term ion-icon {\n  margin-inline-end: 5px;\n}\n\n.f-more-data .pdf {\n  margin-inline-start: auto;\n}\n\n.more-info ion-icon {\n  margin-inline-end: 7px;\n  color: #484848;\n}\n\n.p-content ::ng-deep img {\n  width: 100%;\n  height: auto;\n}\n\n.fe-icons .u {\n  padding: 12px 0 40px;\n}\n\n.fe-icons ion-icon {\n  margin: auto;\n  margin-bottom: 5px;\n  font-size: 1.7em;\n}\n\n.fe-icons .t {\n  font-size: 0.8em;\n  line-height: 1;\n}\n\n.units .g1 {\n  flex-wrap: wrap;\n}\n\n.units ion-card {\n  width: calc(50% - 20px);\n  margin: 0 10px 25px;\n}\n\n.units ion-card-content {\n  padding: 0;\n}\n\n.units ion-card-header {\n  padding: 5px 10px;\n}\n\n.units ion-card-title {\n  font-size: 1em;\n}\n\n.units img.sold-ba {\n  position: absolute;\n  width: 180px;\n  max-width: 60%;\n  top: 40%;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%);\n}\n\n.se-title-co {\n  background: #dadada;\n  padding: 6px;\n  border-radius: 50px;\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.se-title-co .se-title {\n  margin: 0;\n}\n\n.FollowProject .more-info {\n  background: #dadada;\n  padding: 6px;\n  border-radius: 50px;\n}\n\n.FollowProject .more-info .se-title {\n  margin: 0;\n}\n\n.video-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.video-list:not(.vid-l-1) ion-card {\n  width: calc(50% - 20px);\n  margin: 0 10px 25px;\n}\n\n.video-list ion-card {\n  margin-top: 0;\n  margin-inline: auto;\n}\n\n.video-list ion-card-content {\n  padding: 0 !important;\n}\n\n.video-list ion-card-content img {\n  width: 100%;\n}\n\n.video-list ion-card-header {\n  padding: 5px;\n  text-align: center;\n}\n\n.video-list ion-button {\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n}\n\n.video-list ion-card-title {\n  font-size: 1em;\n}\n\n.comments .title {\n  font-size: 1.15em;\n  margin: 0 0 10px;\n}\n\n.comments ion-grid, .comments ion-col {\n  padding: 0;\n}\n\n.new-comments, .cu-comments {\n  border-top: 1px solid #cecece;\n}\n\n.cu-comments .unit {\n  background: #f8f8f8;\n  padding: 12px;\n}\n\n.cu-comments .unit .c-img {\n  padding-inline-end: 12px;\n  width: 60px;\n  min-width: 60px;\n}\n\n.cu-comments .unit:nth-of-type(2n) {\n  background: #ececec;\n}\n\n.cu-comments .unit .date {\n  font-size: 0.7em;\n  padding: 3px;\n}\n\nion-fab {\n  left: 50%;\n  transform: translateX(-50%);\n}\n\nion-fab-button {\n  --border-radius: 61px !important;\n  width: 125px;\n  height: 38px;\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0 6px;\n}\n\nion-fab-button.hotline {\n  font-family: sans-serif;\n  font-size: 25px;\n}\n\nion-fab-button ion-icon {\n  font-size: 90%;\n  margin-inline-start: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0Msa0JBQUE7QUFBRDs7QUFFQztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUlDO0VBQ0MsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBR0U7RUFDQyxzQkFBQTtBQURIOztBQUlDO0VBQ0MseUJBQUE7QUFGRjs7QUFNSTtFQUNJLHNCQUFBO0VBQ04sY0FBQTtBQUhGOztBQVVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFQUjs7QUFZQztFQUNDLG9CQUFBO0FBVEY7O0FBWUM7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVZGOztBQVlDO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBVkY7O0FBZUM7RUFDQyxlQUFBO0FBWkY7O0FBY0M7RUFDQyx1QkFBQTtFQUNBLG1CQUFBO0FBWkY7O0FBY0M7RUFDQyxVQUFBO0FBWkY7O0FBY0M7RUFDQyxpQkFBQTtBQVpGOztBQWNDO0VBQ0MsY0FBQTtBQVpGOztBQWNDO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FBWkY7O0FBa0JBO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFmRDs7QUFpQkM7RUFDQyxTQUFBO0FBZkY7O0FBb0JDO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0csbUJBQUE7QUFqQkw7O0FBbUJFO0VBQ0MsU0FBQTtBQWpCSDs7QUFzQkE7RUFDQyxhQUFBO0VBQ0EsZUFBQTtBQW5CRDs7QUF1QkU7RUFDQyx1QkFBQTtFQUNBLG1CQUFBO0FBckJIOztBQXdCQztFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQXRCRjs7QUF5QkM7RUFDQyxxQkFBQTtBQXZCRjs7QUF5QkU7RUFDQyxXQUFBO0FBdkJIOztBQTBCQztFQUNDLFlBQUE7RUFDQSxrQkFBQTtBQXhCRjs7QUEwQkM7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0FBeEJGOztBQTBCQztFQUNDLGNBQUE7QUF4QkY7O0FBNEJJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQXpCUjs7QUE0QkM7RUFDQyxVQUFBO0FBMUJGOztBQTZCQTtFQUNJLDZCQUFBO0FBMUJKOztBQThCQztFQUNDLG1CQUFBO0VBQ0MsYUFBQTtBQTNCSDs7QUE2QkU7RUFDQyx3QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBM0JIOztBQStCRTtFQUNDLG1CQUFBO0FBN0JIOztBQWlDRTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtBQS9CSDs7QUFvQ0E7RUFDQyxTQUFBO0VBQ0csMkJBQUE7QUFqQ0o7O0FBb0NBO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNILGVBQUE7RUFDRyxpQkFBQTtFQUNBLGFBQUE7QUFqQ0o7O0FBbUNDO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0FBakNGOztBQW9DQztFQUNDLGNBQUE7RUFDRyx3QkFBQTtBQWxDTCIsImZpbGUiOiJzaW5nbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tc2tlbGV0b24tdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgICAgXG59XG5cbi5pbWctY28ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0aW1nLnNvbGQtYmEge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR3aWR0aDogMTMwcHg7XG5cdFx0bWF4LXdpZHRoOiA1MCU7XG5cdFx0dG9wOiA1MCU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHotaW5kZXg6IDI7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdH1cbn1cbi5mLW1vcmUtZGF0YSB7XG5cdC51LXRlcm0ge1xuXHRcdHBhZGRpbmc6IDJweCA3cHg7XG5cdFx0YmFja2dyb3VuZDogI2RhZGFkYTtcblx0XHRtYXJnaW4taW5saW5lLWVuZDogNnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRmb250LXNpemU6IDAuOWVtO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRcdGlvbi1pY29uIHtcblx0XHRcdG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XG5cdFx0fVxuXHR9XG5cdC5wZGZ7XG5cdFx0bWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcblx0fVx0XG59XG4ubW9yZS1pbmZvIHtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA3cHg7XG5cdFx0Y29sb3I6ICM0ODQ4NDg7XG4gICAgfVxuXG5cdFxufVxuXG4ucC1jb250ZW50IHtcbiAgICA6Om5nLWRlZXAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59XG5cbi5mZS1pY29ucyB7XG5cdC51IHtcblx0XHRwYWRkaW5nOiAxMnB4IDAgNDBweDtcblx0fVxuXG5cdGlvbi1pY29uIHtcblx0XHRtYXJnaW46IGF1dG87XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdGZvbnQtc2l6ZTogMS43ZW07XG5cdH1cblx0LnQge1xuXHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0bGluZS1oZWlnaHQ6IDE7XG5cdH1cbn1cblxuLnVuaXRze1xuXHQuZzEge1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0fVxuXHRpb24tY2FyZCB7XG5cdFx0d2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XG5cdFx0bWFyZ2luOiAwIDEwcHggMjVweDtcblx0fVxuXHRpb24tY2FyZC1jb250ZW50IHtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cdGlvbi1jYXJkLWhlYWRlciB7XG5cdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdH1cblx0aW9uLWNhcmQtdGl0bGUge1xuXHRcdGZvbnQtc2l6ZTogMWVtO1xuXHR9XG5cdGltZy5zb2xkLWJhIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0d2lkdGg6IDE4MHB4O1xuXHRcdG1heC13aWR0aDo2MCU7XG5cdFx0dG9wOiA0MCU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHotaW5kZXg6IDI7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFxuXHR9XG59XG5cblxuLnNlLXRpdGxlLWNvIHtcblx0YmFja2dyb3VuZDogI2RhZGFkYTtcblx0cGFkZGluZzogNnB4O1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRtYXJnaW4tYm90dG9tIDogMjBweDtcblx0d2lkdGg6IDEwMCU7XG5cblx0LnNlLXRpdGxlIHtcblx0XHRtYXJnaW46IDA7XG5cdH1cbn1cblxuLkZvbGxvd1Byb2plY3Qge1xuXHQubW9yZS1pbmZvIHtcblx0XHRiYWNrZ3JvdW5kOiAjZGFkYWRhO1xuXHRcdHBhZGRpbmc6IDZweDtcbiAgICBcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cblx0XHQuc2UtdGl0bGUge1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxufVxuXG4udmlkZW8tbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblxuXG5cdCY6bm90KC52aWQtbC0xKSB7XG5cdFx0aW9uLWNhcmQge1xuXHRcdFx0d2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XG5cdFx0XHRtYXJnaW46IDAgMTBweCAyNXB4O1xuXHRcdH1cblx0fVxuXHRpb24tY2FyZCB7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0XHRtYXJnaW4taW5saW5lOiBhdXRvO1xuXHR9XG5cblx0aW9uLWNhcmQtY29udGVudCB7XG5cdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHRcdFxuXHRcdGltZyB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cblx0aW9uLWNhcmQtaGVhZGVyIHtcblx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdGlvbi1idXR0b24ge1xuXHRcdC0tcGFkZGluZy10b3A6IDJweDtcblx0XHQtLXBhZGRpbmctYm90dG9tOiAycHg7XG5cdH1cblx0aW9uLWNhcmQtdGl0bGUge1xuXHRcdGZvbnQtc2l6ZTogMWVtO1xuXHR9XG59XG4uY29tbWVudHMge1xuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIH1cblxuXHRpb24tZ3JpZCwgaW9uLWNvbCB7XG5cdFx0cGFkZGluZzogMDtcblx0fVxufVxuLm5ldy1jb21tZW50cywgLmN1LWNvbW1lbnRzIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NlY2VjZTtcbn1cbi5jdS1jb21tZW50cyB7XG4gICAgXG5cdC51bml0IHtcblx0XHRiYWNrZ3JvdW5kOiNmOGY4Zjg7XG5cdFx0IHBhZGRpbmc6IDEycHg7XG5cdFx0IFxuXHRcdC5jLWltZyB7XG5cdFx0XHRwYWRkaW5nLWlubGluZS1lbmQ6IDEycHg7XG5cdFx0XHR3aWR0aDogNjBweDtcblx0XHRcdG1pbi13aWR0aDogNjBweDtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0JjpudGgtb2YtdHlwZSgybikge1xuXHRcdCBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAgXG5cdFx0fVxuXHRcdFxuXHRcdC5kYXRlIHtcblx0XHRcdGZvbnQtc2l6ZTogMC43ZW07XG5cdFx0XHRwYWRkaW5nOiAzcHg7XG5cdFx0fVxuXHR9XG59XG5cbmlvbi1mYWIge1xuXHRsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2MXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIGhlaWdodDogMzhweDtcblx0Zm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCA2cHg7XG5cblx0Ji5ob3RsaW5lIHtcblx0XHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblx0XHRmb250LXNpemU6IDI1cHg7XG5cdH1cblxuXHRpb24taWNvbiB7XG5cdFx0Zm9udC1zaXplOiA5MCU7XG4gICAgXHRtYXJnaW4taW5saW5lLXN0YXJ0OiA0cHg7XG5cdH1cbn1cblxuW2Rpcj1cInJ0bFwiXSA6aG9zdCB7XG5cbn0iXX0= */");

/***/ }),

/***/ 2678:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/single/single.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"cat/{{typeToP}}\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"post && post.title\">{{ post?.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <div *ngIf=\"skeleton\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n  </div>\n\n  <div *ngIf=\"post\">\n    <div class=\"img-co\">\n      <img *ngIf=\"post.cover\" [src]=\"post.cover\" [style.width]=\"'100%'\">\n      <img *ngIf=\"post.p_state == 'sold-end'\" src=\"assets/sold.png\" class=\"sold-ba\">      \n    </div>\n\n\n    <div class=\"f-more-data d-flex f-a-c\">\n      <div class=\"date uu\" *ngIf=\"post.date && !post?.dontShowDate\"> \n        <ion-icon name=\"calendar\"></ion-icon> {{post?.date}}\n      </div>\n\n      <div class=\"locations uu\" *ngIf=\"typeToP == 'real-estate' && post?.locations\"> \n        <div href=\"#\" *ngFor=\"let term of post?.locations\" class=\"u-term t-{{ term.term_id }}\">\n          <ion-icon class=\"icon\" name=\"location-outline\"></ion-icon>\n          <span class=\"t\">{{ term.name }}</span>\n        </div>\n      </div>\n      <div class=\"types uu\" *ngIf=\"typeToP == 'real-estate' && post?.types\"> \n        <div href=\"#\" *ngFor=\"let term of post?.types\" class=\"u-term t-{{ term.term_id }}\">\n          <ion-icon class=\"icon\" name=\"business-outline\"></ion-icon>\n          <span class=\"t\">{{ term.name }}</span>\n        </div>\n      </div>\n      \n      <ion-button size=\"small\" class=\"pdf uu\" *ngIf=\"post?.pdf\" href=\"{{ post?.pdf.url }}\"> \n          <ion-icon class=\"icon\" name=\"download-outline\"></ion-icon>\n          <span class=\"t\">{{ 'REALESTATE.pdf' | translate }}</span>\n      </ion-button>\n      \n    </div>\n    <h1 class=\"p-title\" *ngIf=\"post.title\">{{ post.title }}</h1>\n\n    <div class=\"more-info d-flex f-a-c ion-margin-bottom\">\n      <div class=\"p-type uu d-flex f-a-c\" *ngIf=\"post?.p_type\"> \n        <ion-icon name=\"bookmark-outline\"></ion-icon> {{ 'NEWPOST.'+post.p_type | translate }}\n      </div>\n      <div class=\"status uu d-flex f-a-c ion-padding-horizontal\" *ngIf=\"post?.status\"> \n        <span class=\"v d-flex f-a-c {{post.status}}\">\n          <ion-icon name=\"bookmarks-outline\"></ion-icon> {{ 'GENERAL.'+ post.status | translate }}\n        </span>\n      </div>\n    </div>\n\n\n    <div *ngIf=\"post.content\" [innerHTML]=\"post.content | safe: 'html'\" class=\"p-content ion-padding-vertical\"></div>\n    <!--<div href=\"#\" class=\"show-more-content\" (click)=\"showMoreContent('maincontent')\">{{ 'GENERAL.show' | translate }}</div>-->\n    \n\n\n\n\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"fe-icons uu\" *ngIf=\"typeToP == 'real-estate' && post?.more_options_prop\"> \n        \n        <ion-slide class=\"u-icon\" *ngFor=\"let serv of post?.more_options_prop; let i=index\">\n          <div class=\"u ion-text-center\">\n            <ion-icon class=\"icon d-block\" src=\"assets/icon/re/{{ serv }}.svg\"></ion-icon>\n            <span class=\"t d-block\">{{ 'REALESTATE.'+serv | translate }}</span>\n          </div>\n        </ion-slide>\n    </ion-slides>\n\n    \n    <div class=\"units uu ion-padding-vertical\" *ngIf=\"typeToP == 'real-estate' && post.p_state !== 'sold-end'\"> \n      <div class=\"se-title-co\">\n        <h2 class=\"se-title ion-text-center\">{{ 'REALESTATE.units' | translate }}</h2>\n      </div>\n      <div class=\"units ug g1 d-flex ion-padding-vertical\" *ngIf=\"post?.units_type == 'normal' && post?.units_info_prop\"> \n\n        <ion-card *ngFor=\"let unit of post?.units_info_prop; let i=index\" (click)=\"openImagePrev({image:unit.unit_pic_prop.url})\" class=\"{{ unit.state_prop }}\">\n          <ion-card-content>\n            <img *ngIf=\"unit.state_prop == 'sold-end'\" src=\"assets/sold.png\" class=\"sold-ba\">\n            <img *ngIf=\"unit.unit_pic_prop.url\" src=\"{{unit.unit_pic_prop.sizes.medium}}\" class=\"p\">\n          </ion-card-content>\n      \n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>{{ 'REALESTATE.'+unit.property_type_prop | translate }} {{unit.space_prop}} {{ 'REALESTATE.m' | translate }}</ion-card-title>\n            <ion-card-subtitle>{{unit.unit_title_prop}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n\n      </div>\n    </div>\n\n    \n    <div class=\"FollowProject ion-padding-vertical\" *ngIf=\"FollowProject\"> \n      \n      <div class=\"se-title-co ion-text-center\">\n        <h2 class=\"se-title ion-text-center\">{{ 'REALESTATE.FollowProject' | translate }}</h2>\n        <span class=\"due_date\" *ngIf=\"FollowProject.due_date\">{{ 'GENERAL.deliveryTime' | translate }} {{ FollowProject.due_date }}</span>\n        <div class=\"complete_percentage\" *ngIf=\"FollowProject.percentage > 0\">\n          <div class=\"prm d-flex f-a-c f-j-c\" style=\"{{ 'width:'+FollowProject.percentage +'%'}}\">{{ FollowProject.percentage }} %</div>\n        </div>\n      </div>\n      <div *ngIf=\"FollowProject.content\" [innerHTML]=\"FollowProject.content | safe: 'html'\" class=\"p-content ion-padding-vertical\"></div>\n    </div>\n\n\n    <div *ngIf=\"videoList && videoList.length > 0\" class=\"ion-margin-bottom video-list g1 vid-l-{{videoList.length}}\">\n      <div class=\"se-title-co\">\n        <h2 class=\"se-title ion-text-center\">{{ 'REALESTATE.video' | translate }}</h2>\n      </div>\n      <ion-card *ngFor=\"let vvv of videoList\" (click)=\"openVideo(vvv.id)\">\n        <ion-card-content>\n          <img [src]=\"'https://img.youtube.com/vi/'+ vvv.id +'/mqdefault.jpg'\" class=\"p\">\n        </ion-card-content>\n      \n        <ion-card-header>\n          <ion-card-title *ngIf=\"vvv.title\" text-center>{{ vvv.title }}</ion-card-title>\n          <ion-button expand=\"full\" fill=\"clear\" size=\"small\" text-right>{{ 'GENERAL.play_video' | translate }}</ion-button>\n        </ion-card-header>\n  \n      </ion-card>\n    </div>\n\n\n    <div class=\"map-se ion-margin-bottom\" *ngIf=\"post.map_prop\">\n      <div class=\"se-title-co\">\n        <h2 class=\"se-title ion-text-center\">{{ 'GENERAL.onMap' | translate }}</h2>\n      </div>\n\n        <img (click)=\"openExtMapsLink(post.map_prop)\" src=\"assets/on-map.jpg\" alt=\"Location\">\n    </div>\n    \n    \n    <div class=\"comments\">\n      <div class=\"new-comments ion-padding-top ion-margin-top\" *ngIf=\"post?.new_comments\">\n        <h3 class=\"title\">{{ 'GENERAL.add_comment' | translate }}</h3>\n        \n        <div class=\"f-co\">\n          <form #form=\"ngForm\" [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmitData()\">\n          <ion-grid class=\"ion-margin-bottom\">\n            <ion-row color=\"primary\">\n            <ion-col>\n              <div>\n              <ion-item>\n                <ion-textarea formControlName=\"comment\" clearOnEdit=\"true\" placeholder=\"{{ 'NEWPOST.your_msg' | translate }} *\"></ion-textarea>\n              </ion-item>\n              </div>\n              <div>\n              <ion-button size=\"medium\" type=\"submit\" [disabled]=\"!credentialsForm.valid\" expand=\"block\">{{ 'GENERAL.send' | translate }}</ion-button>\n              </div>\n            </ion-col>\n            </ion-row>\n          </ion-grid>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"cu-comments ion-padding-vertical\" *ngIf=\"comments && comments.length > 0\">\n        <h3 class=\"title\">{{ 'GENERAL.comments' | translate }}</h3>\n        <div class=\"unit d-flex\" *ngFor=\"let comment of comments; let i=index\">\n          <div class=\"c-img\">\n            <img src=\"assets/{{comment.comment_auth == 'current' || this.GeneralService.cuVars.cUser.value.email ===  comment.comment_author_email ? 'comment-customer' : 'comment-support'}}.svg\">\n          </div>\n          <div class=\"data\">\n            <div class=\"date\">{{comment.comment_date}}</div>\n            <div class=\"content\" *ngIf=\"comment.comment_content\" [innerHTML]=\"comment.comment_content | safe: 'html'\"></div>\n          </div>\n        </div>\n      </div>\n      \n      \n    </div>\n  </div>\n\n  <ion-fab *ngIf=\"typeToP == 'real-estate'\" slot=\"fixed\" vertical=\"bottom\" horizontal=\"right\" class=\"d-flex\">\n    <ion-fab-button class=\"hotline\" >\n      <a href=\"tel:19022\">\n        <span class=\"number\">19022</span>\n        <ion-icon name=\"call-outline\"></ion-icon>\n      </a>\n    </ion-fab-button>\n\n    <ion-fab-button class=\"book\"  (click)=\"pushToNextScreenWithParams('/new-post/ds1_tickets', 'meeting')\">\n        <span class=\"number\">{{ 'GENERAL.book' | translate }}</span>\n        <ion-icon name=\"bookmarks-outline\"></ion-icon>\n    </ion-fab-button>\n\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_single_single_module_ts.js.map