(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 4580:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 8748:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotifications": () => (/* binding */ PushNotifications)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4580);

const PushNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('PushNotifications', {});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);
/* harmony import */ var _serv_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serv/notification.service */ 5128);






let HomePage = class HomePage {
    constructor(GeneralService, NotificationService) {
        this.GeneralService = GeneralService;
        this.NotificationService = NotificationService;
        this.skeleton = true;
        this.ShowModal = true;
        this.userlogin = false;
        this.urlads = "#";
        this.msgSt = 'welcome';
        this.projects = [];
        this.LastNotifi = [];
        this.LastTicket = [];
        this.generalLastNotifi = [];
        this.projectImage = '';
        this.services = [];
        this.slideOptsServ = {
            pagination: false,
            slidesPerView: 3,
            speed: 400,
            autoplay: true
        };
        this.skip = true;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //this.GeneralService.whenUserInfoSet(this, 'loadPageDataUsers');
            this.loadPageData();
            if (localStorage.getItem("skip") == "true")
                this.skip = false;
            this.GeneralService.cuVars.cUser.subscribe((data) => {
                if (data !== 'noData') {
                    this.loadPageDataUsers();
                }
                else {
                    this.userlogin = false;
                }
            });
        });
    }
    ngOnInit() {
        this.loadPageDataModel();
        let daa = setInterval(() => {
            if (this.popup['cover']) {
                this.ShowModal = false;
                // this.cover  = this.popup['cover'];
            }
            else {
                this.ShowModal = true;
            }
        }, 4000);
        setInterval(() => {
            clearInterval(daa);
        }, 4000);
    }
    loadPageDataUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.userlogin = true;
            this.getPoints_get_total();
            this.clinte_h_info();
            this.getTicket();
            this.getNotifications();
            this.GeneralService.cuVars.totalPoints.subscribe((data) => {
                this.totalPoints = data;
            });
        });
    }
    loadPageDataModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.api.generalGet('getPost', { "pid": 21823 }, "GET").then(data => {
                this.skeleton = false;
                if (data["data"]) {
                    this.popup = data["data"];
                    if (this.popup['cover']) {
                        const str = this.popup['content'];
                        const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
                        const match = regex.exec(str);
                        if (match !== null) {
                            const url = match[2];
                            console.log(url);
                            this.urlads = url;
                        }
                        this.cover = this.popup['cover'];
                    }
                    else {
                        // this.ShowModal = true;
                    }
                    // if(){
                    //   let url = data['data'].cover;
                    // }
                    // console.log(this.popup['cover'])
                    console.log(this.popup);
                }
            });
        });
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.getServices();
            this.getNotifications();
            this.getRealEstate();
        });
    }
    getPoints_get_total() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //GET Total points
            this.GeneralService.api.generalGet('points_get_total', {}, "GET").then(data => {
                if (data["data"][0]) {
                    let nextV = (data["data"] > 0) ? this.GeneralService.kFormatter(data["data"]) : { 's': 0, 'p': 0, 'pfx': '' };
                    this.GeneralService.cuVars.totalPoints.next(nextV);
                    //this.totalPoints = this.GeneralService.kFormatter( data["data"] );
                }
            });
        });
    }
    clinte_h_info() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //GET Clinte global info
            this.GeneralService.api.generalGet('clinte_h_info', {}, "GET").then(data => {
                if (data["data"]) {
                    if (data["data"].next_payment_date) {
                        this.nextPayment = this.GeneralService.dateFromYMD(data["data"].next_payment_date, 'object');
                    }
                    if (data["data"].project_prm_images) {
                        this.projectImage = data["data"].project_prm_images[0];
                    }
                    else {
                        this.projectImage = 'empty';
                    }
                }
            });
        });
    }
    getServices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.GeneralService.api.generalGet('getPosts', { 'post_type': 'ds1_directory' }, "GET").then(data => {
                this.slideOptsServ = {
                    pagination: false,
                    slidesPerView: 3,
                    speed: 400,
                    autoplay: true
                };
                this.skeleton = false;
                if (data["data"]) {
                    data["data"].forEach(element => {
                        let vX = 'title_' + this.GeneralService.cuVars.cLang.value;
                        element.title = (element[vX]) ? element[vX] : element.title;
                        this.services.push(element);
                    });
                }
            });
        });
    }
    NotificationsTicketMearge() {
        this.generalLastNotifi = [];
        this.generalLastNotifi = this.generalLastNotifi.concat(this.LastNotifi);
        this.generalLastNotifi = this.generalLastNotifi.concat(this.LastTicket);
        this.sortPostsByDate('generalLastNotifi');
    }
    getNotifications() {
        //Get Notifications
        this.GeneralService.api.generalGet('getPosts', { 'post_type': 'ds1_notifications', 'posts_per_page': 8 }, "GET").then(data => {
            this.skeleton = false;
            if (data["data"]) {
                this.LastNotifi = data["data"];
                this.NotificationsTicketMearge();
            }
        });
    }
    getTicket() {
        this.GeneralService.api.generalGet('getPosts', { 'post_type': 'ds1_tickets', 'posts_per_page': 8 }, "GET").then(data => {
            if (data["data"]) {
                //console.log( data["data"] );
                this.LastTicket = data["data"];
                this.NotificationsTicketMearge();
            }
        });
    }
    getRealEstate() {
        //Get projects
        this.GeneralService.api.generalGet('getPosts', { 'post_type': 'real-estate', 'posts_per_page': 8 }, "GET").then(data => {
            this.skeleton = false;
            if (data["data"]) {
                data["data"].forEach(element => {
                    if (element.p_state !== "sold-end") {
                        this.projects.push(element);
                    }
                });
                this.projects.length = (this.projects.length > 4) ? 4 : this.projects.length;
            }
        });
    }
    sortPostsByDate(prop, limit = 5) {
        this[prop] = this[prop].sort(function (a, b) {
            var aDate = new Date(a.date);
            var bDate = new Date(b.date);
            return bDate.getTime() - aDate.getTime();
        });
        this[prop] = this[prop].slice(0, limit);
    }
    ionViewDidEnter() {
        this.NotificationService.noti();
    }
    //hossam20520
    showModel() {
        return 55;
    }
    CloseModal() {
        this.ShowModal = true;
    }
    doRefresh(event) {
        this.getNotifications();
        this.getTicket();
        this.getPoints_get_total();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
};
HomePage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: _serv_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 5128:
/*!**********************************************!*\
  !*** ./src/app/serv/notification.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.service */ 9852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/push-notifications */ 8748);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 8384);






// with type support
//import { FCM } from '@capacitor-community/fcm';
//const fcm = new FCM();
// alternatively - without types
//const { FCMPlugin } = Plugins;
let NotificationService = class NotificationService {
    constructor(GeneralService, router) {
        this.GeneralService = GeneralService;
        this.router = router;
        this.reg = 0;
    }
    noti() {
        if (this.reg || _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform() == 'web') {
            return;
        }
        //console.log("notifi-console: A1");
        // Request permission to use push notifications
        // iOS will prompt user and return if they granted permission or not
        // Android will just grant without prompting
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.requestPermissions().then(result => {
            //console.log("notifi-console: A2");
            if (result['receive'] == "granted") {
                //console.log("notifi-console: A3");
                // Register with Apple / Google to receive push via APNS/FCM
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.register().then(() => {
                    //console.log("notifi-console: A4");
                    this.reg = 1;
                    //
                    // Subscribe to a specific topic
                    //fcm.subscribeTo({ topic: 'all' });
                });
            }
            else {
                //console.log("notifi-console: A5");
                // Show some error
            }
        });
        // On success, we should be able to receive notifications
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registration', (token) => {
            //console.log(token);
            //console.log("notifi-console: Reg1", token.value);
            this.GeneralService.api.generalGet('notificationToken', { 'token': token.value, 'action_type': 'add' }, 'POST').then(data => {
                //console.log("notifi-console: Reg2");
                this.GeneralService.cuVars.notifiToken = token.value;
            });
        });
        // Some issue with our setup and push will not work
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('registrationError', (error) => {
            //console.log("notifi-console: registrationError");
            //console.log(error);
        });
        // Show us the notification payload if the app is open on our device
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
            //console.log(notification);
            //console.log("notifi-console: pushNotificationReceived 1");
            if (notification['title'] || notification['body']) {
                var mBody = (notification['body']) ? notification['body'] : '';
                this.GeneralService.presentAlert(mBody, notification['title']);
            }
            //console.log("notifi-console: pushNotificationReceived 3");
            //Refresh current screen
            this.GeneralService.cuVars.refreshScreen.next(this.router.url);
            //console.log("notifi-console: pushNotificationReceived 4");
            this.dataActions(notification);
        });
        // Method called when tapping on a notification
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_1__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
            //console.log("notifi-console: pushNotificationActionPerformed 1");
            this.dataActions(notification);
        });
    }
    dataActions(notification) {
        //console.log("notifi-console: dataActions");
        if (notification['data'] && notification['data']['wasTapped']) {
            let goTo = notification["data"]["wasTapped"];
            this.router.navigate([goTo]);
        }
        if (notification['data'] && notification['data']['popup']) {
            let poptype = notification['data']['popup']['type'];
            if (poptype == 'text') {
                let title = (notification['data']['popup']['title']) ? notification['data']['popup']['title'] : '';
                this.GeneralService.presentAlert(notification['data']['popup']['info'], title);
            }
            else if (poptype == 'image') {
                let link = (notification['data']['popup']['link']) ? notification['data']['popup']['link'] : '#';
                '<a href="' + link + '"><img src="' + notification['data']['popup']['info'] + '"></a>';
            }
        }
    }
};
NotificationService.ctorParameters = () => [
    { type: _general_service__WEBPACK_IMPORTED_MODULE_0__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h2 {\n  font-size: 1.2em;\n}\n\n.more {\n  font-size: 0.8em;\n}\n\n.header-x {\n  background: #000 url(\"/../assets/covers/home.jpg\") no-repeat 100% 100%;\n  background-position: center;\n  background-size: cover;\n  min-height: 270px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 25px;\n}\n\n.header-x .menu-line {\n  direction: rtl;\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 1%, rgba(0, 0, 0, 0) 86%, rgba(0, 0, 0, 0) 100%);\n  padding: 10px;\n  margin-bottom: 10px;\n  align-items: start;\n}\n\n.header-x .menu-line .s2 {\n  margin-right: auto;\n}\n\n.header-x .welcome {\n  color: #fff;\n  text-shadow: 0 4px 10px #000;\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 87%, rgba(0, 0, 0, 0) 100%);\n}\n\n.header-x .welcome h1 {\n  margin: 0;\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n.header-x .welcome .msg {\n  letter-spacing: 1px;\n  color: var(--ion-color-primary, #333);\n}\n\n.header-x .prm-menu {\n  order: 2;\n}\n\n.header-x .notifi {\n  background: var(--ion-color-primary, #cecece);\n  line-height: 1;\n  font-size: 22px;\n  padding: 2px 8px;\n  margin: 0 5px;\n  border-radius: 5px;\n}\n\n.header-x .logo {\n  width: 100px;\n}\n\n.header-x.image {\n  height: 450px;\n  max-height: 60vh;\n}\n\n.header-x.image .welcome {\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 3%, rgba(0, 0, 0, 0) 63%, rgba(0, 0, 0, 0) 100%);\n}\n\n.page-body {\n  margin-top: -25px;\n  z-index: 5;\n  position: relative;\n  background: #faf9f9;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n.page-body > * {\n  width: 100%;\n}\n\n.d-flex .end {\n  margin-left: auto;\n}\n\n.head.customx {\n  background: #f3f2f2;\n  padding: 8px 10px;\n  border-radius: 9px;\n  margin-bottom: 15px;\n}\n\n.head.customx .title {\n  margin: 0;\n}\n\n.points-line {\n  background: #fff;\n  border-radius: 50px;\n  overflow: hidden;\n  box-shadow: 0 4px 15px #0000003b;\n  margin-top: -35px;\n  margin-bottom: 25px;\n  z-index: 5;\n}\n\n.points-line img {\n  width: 50px;\n  -webkit-filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));\n}\n\n.points-line .s1 {\n  background: var(--ion-color-primary, #333);\n  padding: 10px 30px 10px 20px;\n  position: relative;\n  color: #fff;\n}\n\n.points-line .s1 .t {\n  background: var(--ion-color-secondary, #333);\n  letter-spacing: 3px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 20px;\n}\n\n.points-line .s1 .t span {\n  transform: rotate(-90deg) translate(-40px, 0px);\n  display: block;\n  white-space: nowrap;\n  font-size: 0.8em;\n}\n\n.points-line .s2 {\n  padding: 0 10px;\n  padding-inline-start: 6%;\n  font-weight: bold;\n}\n\n.points-line .s2 .num {\n  font-size: 2.9em;\n  font-weight: bold;\n  display: block;\n  line-height: 0.9;\n  letter-spacing: -2px;\n  color: var(--ion-color-primary, #333);\n}\n\n.points-line .s2 i.pfx {\n  font-size: 0.6em;\n  font-style: normal;\n  margin-inline-start: 3px;\n}\n\n.points-line .s3 {\n  margin-inline-start: auto;\n  margin-inline-end: 7vw;\n  flex-direction: column;\n  letter-spacing: -0.3px;\n}\n\n.points-line .s3 .add_friend {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.services .u {\n  padding: 15px 0px;\n}\n\n.services img {\n  max-width: 40px;\n}\n\n.services .t {\n  font-size: 0.8em;\n  line-height: 1;\n}\n\n.cs-project {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.cs-project .image-co {\n  padding-inline-end: 60px;\n  min-height: 135px;\n}\n\n.cs-project .image-co img {\n  border-radius: 12px;\n  display: block;\n  box-shadow: 0 4px 12px #00000057;\n}\n\n.cs-project .info-co {\n  background: #f1f0f0e6;\n  margin-inline-start: -80px;\n  border-radius: 12px;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  overflow: hidden;\n  transform: translate(0, -50%);\n  min-width: 100px;\n}\n\n.cs-project .info-co .uu {\n  padding: 10px 10px 6px;\n  position: relative;\n  overflow: hidden;\n  line-height: 1.3;\n}\n\n.cs-project .info-co .u1 {\n  background: #d7d7d799;\n}\n\n.cs-project .info-co .bg-icon {\n  position: absolute;\n  bottom: -7px;\n  right: -7px;\n  font-size: 50px;\n  opacity: 0.25;\n  color: var(--ion-color-primary, #333);\n}\n\n.cs-project .info-co .arr-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary, #333);\n  display: block;\n  margin: auto;\n}\n\n.last-notifi ion-list {\n  border-bottom: none;\n  padding: 0;\n}\n\n.last-notifi ion-list:nth-child(1) .p-icons:before {\n  top: 50%;\n  height: 30px;\n}\n\n.last-notifi ion-list:nth-last-child(1) .p-icons:before {\n  top: auto;\n  bottom: 0;\n  height: 30px;\n}\n\n.last-notifi .p-icons {\n  display: block;\n  width: 11px;\n  height: 11px;\n  background: var(--ion-color-primary, #333);\n  border-radius: 50%;\n  margin-inline: 0px 15px;\n  position: relative;\n}\n\n.last-notifi .p-icons:before {\n  content: \" \";\n  width: 3px;\n  height: 60px;\n  background: #d0d0d087;\n  display: block;\n  position: absolute;\n  top: -20px;\n  left: 4px;\n  z-index: -1;\n}\n\n.last-notifi .ds1_tickets .p-icons {\n  background: var(--ion-color-secondary, #333);\n  border-radius: 17%;\n}\n\n.last-projects .data-co {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 15px 15px;\n  gap: 15px 15px;\n}\n\n.last-projects .unit {\n  margin: 0;\n  box-shadow: 0 5px 15px #00000029;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.last-projects .unit .image-co {\n  padding: 0;\n}\n\n.last-projects .unit .cap {\n  padding: 7px;\n}\n\n.last-projects .unit .cap > * {\n  margin: 0;\n}\n\n.last-projects .unit .title {\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.speed-list.list2 .media .icon {\n  color: #c91616;\n  font-size: 2.4em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.speed-list.list2 .s1 .icon {\n  color: var(--ion-color-primary);\n}\n\n[dir=rtl] :host .d-flex .end {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n[dir=rtl] :host .points-line .s1 {\n  padding: 10px 20px 10px 30px;\n}\n\n[dir=rtl] :host .points-line .s1 .t {\n  right: auto;\n  left: 0;\n}\n\n[dir=rtl] :host .points-line .s1 .t span {\n  transform: rotate(-91deg) translate(-16px, 0px);\n  letter-spacing: 0px;\n  font-size: 1.05em;\n}\n\n[dir=rtl] :host .cs-project .info-co {\n  right: auto;\n  left: 0;\n}\n\n/* The Modal (background) */\n\n.modal {\n  z-index: 5;\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n}\n\n/* Modal Content */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 10px;\n  border: 1px solid #888;\n}\n\n/* The Close Button */\n\n.close {\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  border: 1px solid #d10000;\n  padding-left: 9px;\n  background-color: red;\n  padding-right: 8px;\n  font-weight: bolder;\n  color: white;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.hideModal {\n  display: none;\n}\n\n.fade-in-zoom {\n  opacity: 0;\n  transform: scale(0.5);\n  animation-name: fade-in-zoom;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fade-in-zoom {\n  0% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxzRUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0k7RUFDSSxjQUFBO0VBQ0EscUlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUNRO0VBQ0ksa0JBQUE7QUFDWjs7QUFFSTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtFQUVBLGtIQUFBO0FBQVI7O0FBRVE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFaOztBQUVRO0VBQ0ksbUJBQUE7RUFDQSxxQ0FBQTtBQUFaOztBQUdJO0VBQ0ksUUFBQTtBQURSOztBQUdJO0VBQ0ksNkNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRFI7O0FBSUk7RUFDSSxZQUFBO0FBRlI7O0FBU0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFQUjs7QUFTVTtFQUVFLHlJQUFBO0FBUFo7O0FBYUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQVhKOztBQWFJO0VBQ0ksV0FBQTtBQVhSOztBQWlCQTtFQUNJLGlCQUFBO0FBZEo7O0FBaUJBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFnQkk7RUFDSSxTQUFBO0FBZFI7O0FBa0JBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQWZKOztBQWlCSTtFQUNJLFdBQUE7RUFDQSwyREFBQTtBQWZSOztBQWlCSTtFQUNJLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFmUjs7QUFrQlE7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaEJaOztBQWtCWTtFQUNJLCtDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFoQmhCOztBQXFCSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBbkJSOztBQXFCUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0FBbkJaOztBQXNCUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQXBCWjs7QUF3Qkk7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQXRCUjs7QUF1QlE7RUFDSSwyQ0FBQTtBQXJCWjs7QUE0Qkk7RUFDSSxpQkFBQTtBQXpCUjs7QUEyQkk7RUFDSSxlQUFBO0FBekJSOztBQTJCSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQXpCUjs7QUE4QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBM0JKOztBQTZCSTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUEzQlI7O0FBNEJRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUExQlo7O0FBOEJJO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQTVCUjs7QUE4QlE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTVCWjs7QUErQlE7RUFDSSxxQkFBQTtBQTdCWjs7QUFnQ1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtBQTlCWjs7QUFrQ1E7RUFDSSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQWhDWjs7QUF1Q0k7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUFwQ1I7O0FBd0NnQjtFQUNJLFFBQUE7RUFDQSxZQUFBO0FBdENwQjs7QUE2Q2dCO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBM0NwQjs7QUFnREk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQTlDUjs7QUFnRFE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQTlDWjs7QUFtRFE7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0FBakRaOztBQXVESTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQUEsY0FBQTtBQXBEUjs7QUF1REk7RUFDSSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBckRSOztBQXVEUTtFQUNJLFVBQUE7QUFyRFo7O0FBdURRO0VBQ0ksWUFBQTtBQXJEWjs7QUFzRFk7RUFDSSxTQUFBO0FBcERoQjs7QUF3RFE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUF0RFo7O0FBNkRRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUExRFo7O0FBa0VJO0VBQ0ksK0JBQUE7QUEvRFI7O0FBb0VJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBakVSOztBQW9FSTtFQUNJLDRCQUFBO0FBbEVSOztBQW9FUTtFQUNJLFdBQUE7RUFDQSxPQUFBO0FBbEVaOztBQW9FWTtFQUNJLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWxFaEI7O0FBeUVJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUF2RVI7O0FBK0VBLDJCQUFBOztBQUNBO0VBQ0ksVUFBQTtFQUNGLGNBQUE7RUFBZ0Isc0JBQUE7RUFDaEIsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLGtCQUFBO0VBQW9CLHdCQUFBO0VBQ3BCLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0VBQThCLG1CQUFBO0VBQzlCLG9DQUFBO0VBQW1DLHFCQUFBO0FBbkVyQzs7QUFzRUEsa0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFuRUY7O0FBd0VBLHFCQUFBOztBQUNBO0VBRUUsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBdkVKOztBQTRFQTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBekVGOztBQTRFQTtFQUNBLGFBQUE7QUF6RUE7O0FBNEVBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBekVKOztBQTRFRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHFCQUFBO0VBekVKO0VBMkVFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBekVKO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5tb3JlIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uaGVhZGVyLXgge1xuICAgIGJhY2tncm91bmQ6ICMwMDAgdXJsKCcvLi4vYXNzZXRzL2NvdmVycy9ob21lLmpwZycpIG5vLXJlcGVhdCAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgXG4gICAgbWluLWhlaWdodDogMjcwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuXG4gICAgLm1lbnUtbGluZSB7XG4gICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwwLDAsMC41NSkgMCUscmdiYSgwLDAsMCwwLjU1KSAxJSxyZ2JhKDAsMCwwLDApIDg2JSxyZ2JhKDAsMCwwLDApIDEwMCUpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG5cbiAgICAgICAgLnMyIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICAud2VsY29tZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCA0cHggMTBweCAjMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwwLDAsMC4zKSAwJSxyZ2JhKDAsMCwwLDApIDg3JSxyZ2JhKDAsMCwwLDApIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMCwwLDAsMC4zKSAwJSxyZ2JhKDAsMCwwLDApIDg3JSxyZ2JhKDAsMCwwLDApIDEwMCUpO1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuICAgICAgICAubXNnIHtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzMzMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wcm0tbWVudSB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cbiAgICAubm90aWZpIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICNjZWNlY2UpO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gICAgJi5kZWZhdWx0LWltYWdlIHtcblxuICAgIH1cblxuICAgICYuaW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuXG4gICAgICAgICAgLndlbGNvbWUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDAsMCwwLDAuNSkgMCUscmdiYSgwLDAsMCwwLjUpIDMlLHJnYmEoMCwwLDAsMCkgNjMlLHJnYmEoMCwwLDAsMCkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMCwwLDAsMC41KSAwJSxyZ2JhKDAsMCwwLDAuNSkgMyUscmdiYSgwLDAsMCwwKSA2MyUscmdiYSgwLDAsMCwwKSAxMDAlKTtcblxuICAgICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4ucGFnZS1ib2R5IHtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICB6LWluZGV4OiA1O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmOWY5O1xuICAgIC8vYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDAgMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJj4qIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5cblxuLmQtZmxleCAuZW5kIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmhlYWQuY3VzdG9teCB7XG4gICAgYmFja2dyb3VuZDogI2YzZjJmMjtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbi5wb2ludHMtbGluZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAjMDAwMDAwM2I7XG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB6LWluZGV4OiA1O1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDVweCByZ2JhKDAsMCwwLDAuMikpO1xuICAgIH1cbiAgICAuczEge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzMzMyk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG5cblxuICAgICAgICAudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCAjMzMzKTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4OyAgXG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKCAtOTBkZWcgKSB0cmFuc2xhdGUoLTQwcHgsIDBweCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnMyIHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNiU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgIC5udW0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjllbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC45O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzMzMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaS5wZngge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDNweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zMyB7XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA3dnc7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgICAgIC5hZGRfZnJpZW5kIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlcnZpY2VzIHtcbiAgICAudSB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgfVxuICAgIC50IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuXG59XG5cbi5jcy1wcm9qZWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIC5pbWFnZS1jbyB7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogNjBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTM1cHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4ICMwMDAwMDA1NztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvLWNvIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjBmMGU2O1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAtODBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuXG4gICAgICAgIC51dSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggNnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjEuMztcbiAgICAgICAgfVxuXG4gICAgICAgIC51MSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDdkN2Q3OTk7XG4gICAgICAgIH1cblxuICAgICAgICAuYmctaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IC03cHg7XG4gICAgICAgICAgICByaWdodDogLTdweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzMzMpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAuYXJyLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzMzKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4ubGFzdC1ub3RpZmkge1xuXG4gICAgaW9uLWxpc3R7XG4gICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAmOm50aC1jaGlsZCgxKXtcbiAgICAgICAgICAgIC5wLWljb25zIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAucC1pY29ucyB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucC1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzMzMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luLWlubGluZTogMHB4IDE1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgIHdpZHRoOiAzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDBkMGQwODc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kczFfdGlja2V0cyB7XG4gICAgICAgIC5wLWljb25zIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksICMzMzMpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTclO1xuICAgICAgICB9XG4gICAgfVxufVxuLmxhc3QtcHJvamVjdHMge1xuXG4gICAgLmRhdGEtY28ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdhcDogMTVweCAxNXB4O1xuICAgIH1cblxuICAgIC51bml0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4ICMwMDAwMDAyOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAuaW1hZ2UtY28ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgICAgICY+KiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zcGVlZC1saXN0Lmxpc3Qye1xuICAgIC5tZWRpYSB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzkxNjE2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4uc3BlZWQtbGlzdC5saXN0MiB7XG4gICAgLnMxIC5pY29ue1xuICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxufVxuXG5bZGlyPVwicnRsXCJdIDpob3N0IHtcbiAgICAuZC1mbGV4IC5lbmQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5wb2ludHMtbGluZSAuczF7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDMwcHg7XG5cbiAgICAgICAgLnQge1xuICAgICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgIFxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoIC05MWRlZyApIHRyYW5zbGF0ZSgtMTZweCwgMHB4KTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9IFxuICAgIFxuXG4gICAgLmNzLXByb2plY3QgLmluZm8tY28ge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59XG5cblxuXG5cbiAgICAgIFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgICB6LWluZGV4OiA1O1xuICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG5cbi8qIE1vZGFsIENvbnRlbnQgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuLy8gICB3aWR0aDogODAlO1xuXG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cbi5jbG9zZSB7XG5cbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxMDAwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuXG5cbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGlkZU1vZGFse1xuZGlzcGxheTogbm9uZTtcbn1cblxuLmZhZGUtaW4tem9vbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGUtaW4tem9vbTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGUtaW4tem9vbSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"header-x\">\n    <div class=\"menu-line d-flex ion-padding\">\n      <div class=\"side s1\"><img src=\"assets/logo.png\" alt=\"Logo\" class=\"logo\"></div>\n      <div class=\"side s2 d-flex f-a-c\">\n        <ion-menu-button class=\"prm-menu\"></ion-menu-button>\n      </div>\n    </div>\n    <div class=\"welcome ion-padding ion-text-center\">\n      <h1 class=\"wel\" style=\"color: white;\">{{ 'HOME.welcome' | translate }} {{this.GeneralService.cuVars.cUser.value.displayName}}</h1>\n      <span class=\"msg\"  style=\"color: white;\"><b>{{ 'HOME.welcome_msg' | translate }}</b></span>\n    </div>\n    <div *ngIf=\"prmImage\" class=\"prm-image\"></div>\n  </div>\n\n  <div class=\"page-body ion-padding-horizontal\">\n\n    <!-- points -->\n    <div class=\"points-line d-flex\" *ngIf=\"skip\">\n      <div class=\"side s1 d-flex\" routerLink=\"/points\">\n          <img src=\"assets/coin.svg\" alt=\"points\">\n          <div class=\"t ion-text-uppercase\"><span>{{ 'POINTS.point' | translate }}</span></div>\n      </div>\n      <div class=\"side s2 d-flex f-a-c\" routerLink=\"/points\">\n        <span class=\"num\" *ngIf=\"totalPoints\">{{totalPoints.p}}<i class=\"pfx\" *ngIf=\"totalPoints.pfx\">{{ 'POINTS.'+totalPoints.pfx | translate }}</i></span>\n        \n      </div>\n      <div class=\"side s3 d-flex f-a-c f-j-c\">\n        <a routerLink=\"/points\" class=\"add_friend\">{{ 'POINTS.add_friend' | translate }}</a>\n        <a routerLink=\"/dynamic/{{this.GeneralService.cuVars.pointsTermsPid}}\" class=\"more\">{{ 'POINTS.cond' | translate }}</a>\n      </div>\n    </div>\n\n\n    <!-- My project -->\n    <div class=\"cs-project\" *ngIf=\"userlogin && skip && projectImage != 'empty'\">\n      <div class=\"image-co\">\n        <ion-skeleton-text *ngIf=\"!projectImage\" animated style=\"width:100%;height:210px;margin:auto;border-radius:10px;\"></ion-skeleton-text>\n        <img *ngIf=\"projectImage\"  routerLink=\"/cs-re/follow-up-projects\" src=\"{{ projectImage }}\">\n      </div>\n      <div class=\"info-co ion-text-center\">\n        <div class=\"uu u1\" routerLink=\"/cs-re/financial-gate\">\n          <div class=\"t\"><b>{{ 'FINANCIAL.next_installment' | translate }}</b></div>\n\n          <ion-skeleton-text *ngIf=\"skeleton\" animated class=\"t d-block\"></ion-skeleton-text>\n          <div class=\"v\" *ngIf=\"nextPayment\">{{nextPayment.d}} / {{ 'GENERAL.'+nextPayment.mo | translate }}</div>\n\n          <ion-icon class=\"bg-icon\" src=\"assets/icon/calendar.svg\"></ion-icon>\n          <ion-icon class=\"arr-icon\" name=\"arrow-back-circle-outline\"></ion-icon>\n\n        </div>\n        <div class=\"uu u2\" routerLink=\"/cs-re/follow-up-projects\">\n          <div class=\"t\"><b>{{ 'HOME.follow_projects' | translate }}</b></div>\n          <div class=\"v\">{{ 'GENERAL.more' | translate }}</div>\n\n          <ion-icon class=\"bg-icon\" src=\"assets/icon/building.svg\"></ion-icon>\n          <ion-icon class=\"arr-icon\" name=\"arrow-back-circle-outline\"></ion-icon>\n\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"skeleton\" *ngIf=\"skeleton\">\n      <div class=\"services ion-margin-bottom\">\n        <div class=\"head customx d-flex f-a-c ion-margin-bottom\">\n          <h2 class=\"title\">{{ 'HOME.services' | translate }}</h2>\n          <a routerLink=\"/directory\" class=\"more end\">{{ 'GENERAL.show_all' | translate }}</a>\n        </div>\n  \n        <div class=\"fe-icons uu\" style=\"display:flex\"> \n          <div class=\"u-icon ion-text-center\" style=\"flex:1 1 auto; padding:0 10px\">\n            <div class=\"u\" routerLink=\"/directory/decore\" routerDirection=\"forward\">\n              <ion-skeleton-text animated style=\"width: 60px;height: 60px;margin: auto;\"></ion-skeleton-text>\n              <ion-skeleton-text animated class=\"t d-block\"></ion-skeleton-text>\n            </div>\n          </div>\n  \n          <div class=\"u-icon ion-text-center\" style=\"flex:1 1 auto; padding:0 10px\">\n            <div class=\"u\" routerLink=\"/directory/decore\" routerDirection=\"forward\">\n              <ion-skeleton-text animated style=\"width: 60px;height: 60px;margin: auto;\"></ion-skeleton-text>\n              <ion-skeleton-text animated class=\"t d-block\"></ion-skeleton-text>\n            </div>\n          </div>\n  \n          <div class=\"u-icon ion-text-center\" style=\"flex:1 1 auto; padding:0 10px\">\n            <div class=\"u\" routerLink=\"/directory/decore\" routerDirection=\"forward\">\n              <ion-skeleton-text animated style=\"width: 60px;height: 60px;margin: auto;\"></ion-skeleton-text>\n              <ion-skeleton-text animated class=\"t d-block\"></ion-skeleton-text>\n            </div>\n          </div>\n  \n        </div>\n  \n      </div>\n    </div>\n\n\n    <!-- Servises -->\n    <div class=\"services ion-margin-bottom\" *ngIf=\"services.length > 0\">\n      <div class=\"head customx d-flex f-a-c ion-margin-bottom\">\n        <h2 class=\"title\">{{ 'HOME.services' | translate }}</h2>\n        <a routerLink=\"/directory\" class=\"more end\">{{ 'GENERAL.show_all' | translate }}</a>\n      </div>\n\n      <ion-slides pager=\"true\" [options]=\"slideOptsServ\" class=\"fe-icons uu\"> \n        \n        <ion-slide class=\"u-icon ion-text-center\">\n          <div class=\"u\" routerLink=\"/directory/decore\" routerDirection=\"forward\">\n            <img src=\"assets/decore.png\">\n            <span class=\"t d-block\">{{ 'DIRECTORY.decore' | translate }}</span>\n          </div>\n        </ion-slide>\n\n        <ion-slide *ngFor=\"let serv of services\" class=\"u-icon ion-text-center\">\n          <div class=\"u\" routerLink=\"/directory/{{ serv.id }}\" routerDirection=\"forward\">\n            <img src=\"{{ serv.icon }}\">\n        <span class=\"t d-block\">{{ serv.title }}</span>\n          </div>\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n\n\n    <!-- notifications -->    \n    <div class=\"last-notifi ion-margin-bottom\" *ngIf=\"generalLastNotifi.length > 0\">\n      \n      <div class=\"head customx d-flex f-a-c\">\n        <h2 class=\"title\">{{ 'HOME.last_notifi' | translate }}</h2>\n        <a routerLink=\"/cat/ds1_notifications\" class=\"more end\">{{ 'GENERAL.show_all' | translate }}</a>\n      </div>\n\n      <div class=\"co\" >\n        <ion-list lines=\"none\" *ngFor=\"let post of generalLastNotifi\" class=\" {{post.post_type}}\">\n          <ion-item [routerLink]=\"['/', 'cat', post.post_type, post.id]\" routerDirection=\"forward\">\n            <span slot=\"start\" class=\"p-icons\"></span>\n            <ion-label>{{post.title}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div class=\"btn-group ion-text-center ion-margin\">\n        <ion-button routerLink=\"/cat/ds1_notifications\" size=\"small\" color=\"secondary\">{{ 'HOME.all_notifications' | translate }}</ion-button>\n        <ion-button *ngIf=\"userlogin\" routerLink=\"/cat/ds1_tickets\" size=\"small\" color=\"secondary\">{{ 'HOME.all_tickets' | translate }}</ion-button>\n      </div>\n\n    </div>\n\n    <!-- projects -->\n    <div class=\"last-projects ion-margin-bottom\" *ngIf=\"projects.length > 0\">\n      <div class=\"head customx d-flex f-a-c ion-margin-bottom\">\n        <h2 class=\"title\">{{ 'HOME.last_projects' | translate }}</h2>\n        <a routerLink=\"/cat/real-estate\" class=\"more end\">{{ 'GENERAL.show_all' | translate }}</a>\n      </div>\n      <div class=\"data-co g1\">\n        <ion-card *ngFor=\"let post of projects\" class=\"unit\" [routerLink]=\"['/', 'cat','real-estate' ,post.id]\">\n          <ion-card-content class=\"image-co\">\n            <img *ngIf=\"post.thumbnail\" [src]=\"post.thumbnail\" class=\"p d-flex\">\n          </ion-card-content>\n      \n          <ion-card-header class=\"cap ion-text-center\">\n            <ion-card-title class=\"title\" [innerHTML]=\"post.title\" text-center></ion-card-title>\n            <ion-button size=\"small\" expand=\"full\" fill=\"clear\" text-right>{{ 'GENERAL.more' | translate }}...</ion-button>\n          </ion-card-header>\n        </ion-card>\n      </div>\n    </div>\n\n\n\n    <!-- model  -->\n\n\n\n    <!-- The Modal -->\n    <div id=\"myModal\"    class=\"modal fade-in-zoom\" [ngClass]=\"{'hideModal': ShowModal}\">\n    \n      <!-- Modal content -->\n      <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"CloseModal()\">&times;</span>\n       <a href=\"{{ urlads }}\"><img src=\"{{cover}}\"> </a>\n\n      </div>\n    \n    </div>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map