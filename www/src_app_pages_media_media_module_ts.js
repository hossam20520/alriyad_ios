(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_pages_media_media_module_ts"],{

/***/ 4991:
/*!*****************************************************!*\
  !*** ./src/app/pages/media/media-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPageRoutingModule": () => (/* binding */ MediaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _media_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media.page */ 1301);




const routes = [
    {
        path: '',
        component: _media_page__WEBPACK_IMPORTED_MODULE_0__.MediaPage
    }
];
let MediaPageRoutingModule = class MediaPageRoutingModule {
};
MediaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MediaPageRoutingModule);



/***/ }),

/***/ 2365:
/*!*********************************************!*\
  !*** ./src/app/pages/media/media.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPageModule": () => (/* binding */ MediaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _media_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-routing.module */ 4991);
/* harmony import */ var _media_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.page */ 1301);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let MediaPageModule = class MediaPageModule {
};
MediaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _media_routing_module__WEBPACK_IMPORTED_MODULE_0__.MediaPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_media_page__WEBPACK_IMPORTED_MODULE_1__.MediaPage]
    })
], MediaPageModule);



/***/ }),

/***/ 1301:
/*!*******************************************!*\
  !*** ./src/app/pages/media/media.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPage": () => (/* binding */ MediaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_media_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./media.page.html */ 2475);
/* harmony import */ var _media_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.page.scss */ 1713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ 4542);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv/general.service */ 9852);
/* harmony import */ var _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/video-player/ngx */ 524);







// import { YouTubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
let MediaPage = class MediaPage {
    constructor(youtube, GeneralService, videoplayer) {
        this.youtube = youtube;
        this.GeneralService = GeneralService;
        this.videoplayer = videoplayer;
        this.ShowModal = true;
        this.vIDd = "";
        this.skeleton = true;
        this.urlVideo = "";
        this.videoList = [];
        this.skeletonNumbers = Array(7).fill(0).map((x, i) => i);
    }
    ngOnInit() {
        //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
        this.loadPageData();
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.api.generalGet('getPost', { "pid": this.GeneralService.cuVars.mediaPid, "fields": "video_list" }, "GET").then(data => {
                this.skeleton = false;
                if (data["data"] && data["data"].youtube_media) {
                    data["data"].youtube_media.forEach(element => {
                        let vID = this.GeneralService.youtube_parser(element.link);
                        element.id = vID;
                        this.videoList.push(element);
                    });
                }
            });
        });
    }
    CloseModal() {
        this.ShowModal = true;
    }
    youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }
    openVideo(vID) {
        // this.ShowModal = false;
        // this.vIDd = vID;
        // this.urlVideo =   `https://www.youtube.com/embed/${vID}`;
        this.youtube.openVideo(vID);
        // this.videoplayer.play('https://www.youtube.com/watch?v=CKV7yYXaxlw').then(() => {
        // console.log('video completed');
        // }).catch(err => {
        // console.log(err);
        // });
        // console.log(vID)
    }
};
MediaPage.ctorParameters = () => [
    { type: _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__.YoutubeVideoPlayer },
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_3__.GeneralService },
    { type: _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_4__.VideoPlayer }
];
MediaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-media',
        template: _raw_loader_media_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_media_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MediaPage);



/***/ }),

/***/ 1713:
/*!*********************************************!*\
  !*** ./src/app/pages/media/media.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".g1 {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px 10px;\n}\n.g1 ion-card {\n  width: calc(50% - 20px);\n  margin: 0 10px 25px;\n}\n.g1 ion-card-content {\n  padding: 0 !important;\n}\n.g1 ion-card-header {\n  padding: 5px;\n  text-align: center;\n}\n.g1 ion-button {\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n}\nion-card ion-card-title {\n  font-size: 1em;\n}\n/* The Modal (background) */\n.modal {\n  z-index: 5;\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n}\n/* Modal Content */\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 10px;\n  border: 1px solid #888;\n}\n/* The Close Button */\n.close {\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  border: 1px solid #d10000;\n  padding-left: 9px;\n  background-color: red;\n  padding-right: 8px;\n  font-weight: bolder;\n  color: white;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n.hideModal {\n  display: none;\n}\n.fade-in-zoom {\n  opacity: 0;\n  transform: scale(0.5);\n  animation-name: fade-in-zoom;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n}\n@keyframes fade-in-zoom {\n  0% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRDtBQUNDO0VBQ0MsdUJBQUE7RUFDRyxtQkFBQTtBQUNMO0FBRUM7RUFDQyxxQkFBQTtBQUFGO0FBRUM7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVDO0VBQ0Msa0JBQUE7RUFDQSxxQkFBQTtBQUFGO0FBSUM7RUFDQyxjQUFBO0FBREY7QUFVQSwyQkFBQTtBQUNBO0VBQ0ksVUFBQTtFQUNGLGNBQUE7RUFBZ0Isc0JBQUE7RUFDaEIsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLGtCQUFBO0VBQW9CLHdCQUFBO0VBQ3BCLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0VBQThCLG1CQUFBO0VBQzlCLG9DQUFBO0VBQW1DLHFCQUFBO0FBRXJDO0FBQ0Esa0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVGO0FBR0EscUJBQUE7QUFDQTtFQUVFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUZKO0FBT0E7O0VBRUUsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUpGO0FBT0E7RUFDQSxhQUFBO0FBSkE7QUFPQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUpKO0FBT0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQUpKO0VBTUU7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUFKSjtBQUNGIiwiZmlsZSI6Im1lZGlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nMSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0cGFkZGluZzogMjBweCAxMHB4O1xuXG5cdGlvbi1jYXJkIHtcblx0XHR3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgICBcdG1hcmdpbjogMCAxMHB4IDI1cHg7XG5cdH1cblxuXHRpb24tY2FyZC1jb250ZW50IHtcblx0XHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cdH1cblx0aW9uLWNhcmQtaGVhZGVyIHtcblx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdGlvbi1idXR0b24ge1xuXHRcdC0tcGFkZGluZy10b3A6IDJweDtcblx0XHQtLXBhZGRpbmctYm90dG9tOiAycHg7XG5cdH1cbn1cbmlvbi1jYXJkIHtcblx0aW9uLWNhcmQtdGl0bGUge1xuXHRcdGZvbnQtc2l6ZTogMWVtO1xuXHR9XG59XG5cblxuXG5cblxuICAgICAgXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICAgIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbn1cblxuLyogTW9kYWwgQ29udGVudCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4vLyAgIHdpZHRoOiA4MCU7XG5cbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcblxuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDEwMDAwO1xuICAgIHBhZGRpbmctbGVmdDogOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG5cblxufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oaWRlTW9kYWx7XG5kaXNwbGF5OiBub25lO1xufVxuXG4uZmFkZS1pbi16b29tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbi16b29tO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZS1pbi16b29tIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ 2475:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/media/media.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.media' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"skeleton\">\n    <div class=\"co g1\">\n      <ion-card *ngFor=\"let number of skeletonNumbers\">\n        <ion-skeleton-text animated style=\"width: 100%;height: 80px;margin: 0;\"></ion-skeleton-text>\n        <ion-card-header>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </ion-card-header>\n      </ion-card>\n    </div>\n  </div>\n  <div *ngIf=\"videoList && videoList.length > 0\" class=\"vdx g1\">\n    <ion-card *ngFor=\"let vvv of videoList\" (click)=\"openVideo(vvv.id)\">\n      <ion-card-content>\n        <img [src]=\"'https://img.youtube.com/vi/'+ vvv.id +'/mqdefault.jpg'\" class=\"p\">\n      </ion-card-content>\n    \n      <ion-card-header>\n        <ion-card-title *ngIf=\"vvv.title\" text-center>{{ vvv.title }}</ion-card-title>\n        <ion-button expand=\"full\" fill=\"clear\" size=\"small\" text-right>{{ 'GENERAL.play_video' | translate }}</ion-button>\n      </ion-card-header>\n\n    </ion-card>\n  </div>\n\n\n\n\n  \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_media_media_module_ts.js.map