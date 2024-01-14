(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 2993);




const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_user_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user/login/login.module */ 9470)).then(m => m.LoginPageModule)
    },
    {
        path: 'login/first-time',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_user_first-time_first-time_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user/first-time/first-time.module */ 5857)).then(m => m.FirstTimePageModule)
    },
    {
        path: 'login/forgot',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_user_forgot_forgot_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user/forgot/forgot.module */ 2760)).then(m => m.ForgotPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_user_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user/register/register.module */ 6186)).then(m => m.RegisterPageModule)
    },
    {
        path: 'control',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_user_control_control_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user/control/control.module */ 9909)).then(m => m.ControlPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule)
    },
    {
        path: 'points',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_points_view-points_view-points_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./points/view-points/view-points.module */ 6690)).then(m => m.ViewPointsPageModule)
    },
    {
        path: 'points/add-friends',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_points_add-friends_add-friends_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./points/add-friends/add-friends.module */ 3095)).then(m => m.AddFriendsPageModule)
    },
    {
        path: 'points/friend-info',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_points_friend-info_friend-info_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./points/friend-info/friend-info.module */ 8254)).then(m => m.FriendInfoPageModule)
    },
    {
        path: 'points/already-added',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_points_already-added_already-added_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./points/already-added/already-added.module */ 52)).then(m => m.AlreadyAddedPageModule)
    },
    {
        path: 'media',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_media_media_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/media/media.module */ 2365)).then(m => m.MediaPageModule)
    },
    {
        path: 'cat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cat_cat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cat/cat.module */ 1281)).then(m => m.CatPageModule)
    },
    {
        path: 'cat/:type',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cat_cat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cat/cat.module */ 1281)).then(m => m.CatPageModule)
    },
    {
        path: 'cat/:type/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_single_single_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/single/single.module */ 7958)).then(m => m.SinglePageModule)
    },
    {
        path: 'dynamic-content/:type',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dynamic-content_dynamic-content_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dynamic-content/dynamic-content.module */ 7709)).then(m => m.DynamicContentPageModule)
    },
    {
        path: 'dynamic/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dynamic_dynamic_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dynamic/dynamic.module */ 1342)).then(m => m.DynamicPageModule)
    },
    {
        path: 'new-post/:type',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_new-post_new-post_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/new-post/new-post.module */ 1222)).then(m => m.NewPostPageModule),
        //canActivate: [AuthGuard]
    },
    {
        path: 'custom-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_custom-modal_custom-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/custom-modal/custom-modal.module */ 1891)).then(m => m.CustomModalPageModule)
    },
    {
        path: 'directory',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_directory_gate_gate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./directory/gate/gate.module */ 6095)).then(m => m.GatePageModule)
    },
    {
        path: 'directory/decore',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_directory_decore_decore_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./directory/decore/decore.module */ 5848)).then(m => m.DecorePageModule)
    },
    {
        path: 'directory/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_directory_single_single_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./directory/single/single.module */ 9148)).then(m => m.SinglePageModule)
    },
    {
        path: 'cs-re/financial-gate',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cs-re_financial-gate_financial-gate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cs-re/financial-gate/financial-gate.module */ 6871)).then(m => m.FinancialGatePageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'cs-re/financial-gate/forward-installments',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cs-re_forward-installments_forward-installments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cs-re/forward-installments/forward-installments.module */ 6965)).then(m => m.ForwardInstallmentsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'cs-re/financial-gate/account-statement',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cs-re_account-statement_account-statement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cs-re/account-statement/account-statement.module */ 4821)).then(m => m.AccountStatementPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'cs-re/financial-gate/financial',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cs-re_installments_installments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cs-re/installments/installments.module */ 8935)).then(m => m.InstallmentsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'cs-re/financial-gate/pay',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cs-re_pay_pay_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cs-re/pay/pay.module */ 1610)).then(m => m.PayPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'cs-re/follow-up-projects',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cs-re_follow-up-projects_follow-up-projects_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cs-re/follow-up-projects/follow-up-projects.module */ 691)).then(m => m.FollowUpProjectsPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'cs-re/inventory',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cs-re_inventory_inventory_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cs-re/inventory/inventory.module */ 2773)).then(m => m.InventoryPageModule),
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 4909);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 8592);
/* harmony import */ var _serv_check_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serv/check-user-data.service */ 7977);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serv/general.service */ 9852);










let AppComponent = class AppComponent {
    constructor(platform, GeneralService, router, CheckUserDataService) {
        this.platform = platform;
        this.GeneralService = GeneralService;
        this.router = router;
        this.CheckUserDataService = CheckUserDataService;
        this.selectedIndex = 0;
        this.lastTimeBackPress = 0;
        this.appPages = [];
        this.userRoleV = '';
        this.appPagesGeneral = [
            { title: 'home', url: '/home', icon: 'home', order: 1 },
            { title: 'real-estate', url: '/cat/real-estate', icon: 'business', order: 20 },
            { title: 'previous-projects', url: '/cat/previous-projects', icon: 'business', order: 21 },
            { title: 'post', url: '/cat/post', icon: 'newspaper', order: 21 },
            { title: 'media', url: '/media', icon: 'videocam', order: 21 },
            { title: 'about-us', url: '/dynamic/' + this.GeneralService.cuVars.aboutPid, icon: 'checkmark-done-circle', order: 26 },
            { title: 'contact-us', url: '/dynamic/' + this.GeneralService.cuVars.contactUsPid, icon: 'call', order: 27 },
            { type: "hr", order: 25 }
        ];
        this.appPagesAnyUsers = [
            { title: 'control', url: '/control', icon: 'settings', order: 30 },
            { title: 'points', url: '/points', icon: 'share-social', order: 2 },
            { title: 'directoryGate', url: '/directory', icon: 'bookmarks', order: 2 },
            { title: 'directoryDecore', url: '/directory/decore', icon: 'color-fill', order: 3 },
            { title: 'ds1_notifications', url: '/cat/ds1_notifications', icon: 'notifications', order: 3 },
            { title: 'ds1_tickets', url: '/cat/ds1_tickets', icon: 'ticket', order: 3 },
        ];
        this.appPagesUsers = [
            { title: 'p_follow_projects', url: '/cs-re/follow-up-projects', icon: 'calendar', order: 2 },
            { title: 'financialGate', url: '/cs-re/financial-gate', icon: 'calculator', order: 2 },
            { type: "hr", order: 9 }
        ];
        this.appPagesNotUsers = [
            { title: 'login', url: '/login', icon: 'log-in', order: 1 },
            { title: 'forgot', url: '/login/forgot', icon: 'lock-open', order: 1 },
            { type: "hr", order: 5 }
        ];
        this.appBrokerUsers = [
            { title: 'inventory', url: '/cs-re/inventory', icon: 'layers', order: 20 }
        ];
        this.initializeApp();
    }
    initializeApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //Use lang
            this.platform.ready().then(() => {
                this.GeneralService.startStorageLanguage();
            });
            yield this.CheckUserDataService.checkUserLogin();
            yield this.platform.ready().then(() => {
                _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide().catch(error => {
                    //console.error(error);
                });
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.hide().catch(error => {
                    //console.error(error);
                });
            });
            yield this.GeneralService.cuVars.cUser.subscribe((data) => {
                if (localStorage.getItem("skip") == "true")
                    data = "noData";
                this.GeneralService.getAppGeneralInfo();
                //Add user roles to general class name
                if (data && data["role"]) {
                    this.userRoleV = data["role"].join(' ');
                }
                this.username = (data) ? data['displayName'] : '';
                if (!data || data == 'noData' || !data["role"]) {
                    let mmm = this.appPagesGeneral.concat(this.appPagesNotUsers);
                    this.appPages = this.GeneralService.sortByKey(mmm, 'order');
                }
                else if (data["role"] && data["role"].includes('broker')) {
                    let mmm = this.appPagesGeneral.concat(this.appBrokerUsers);
                    mmm = mmm.concat(this.appPagesAnyUsers);
                    this.appPages = this.GeneralService.sortByKey(mmm, 'order');
                }
                else if (data["role"] &&
                    (data["role"].includes('administrator') ||
                        data["role"].includes('administrator'))) {
                    let mmm = this.appPagesGeneral.concat(this.appPagesUsers);
                    mmm = mmm.concat(this.appBrokerUsers);
                    mmm = mmm.concat(this.appPagesAnyUsers);
                    this.appPages = this.GeneralService.sortByKey(mmm, 'order');
                }
                else if (data["role"] && data["role"].includes('cs_customer')) {
                    let mmm = this.appPagesGeneral.concat(this.appPagesUsers);
                    mmm = mmm.concat(this.appPagesAnyUsers);
                    this.appPages = this.GeneralService.sortByKey(mmm, 'order');
                }
                else {
                    let mmm = this.appPagesGeneral.concat(this.appPagesAnyUsers);
                    this.appPages = this.GeneralService.sortByKey(mmm, 'order');
                }
            });
            this.GeneralService.cuVars.getAppInfo.subscribe((data) => {
                if (data["register"]) {
                    this.GeneralService.cuVars.registerAv = true;
                }
                else {
                    this.GeneralService.cuVars.registerAv = false;
                }
                if (data["lang"]) {
                    this.GeneralService.setLangAs(data["lang"]);
                }
            });
            this.platform.ready().then(() => {
                //Check network
                this.GeneralService.cuVars.networkSt.subscribe((data) => {
                    if (data) {
                        this.offlineSt = data;
                    }
                    else {
                        this.offlineSt = '';
                    }
                });
                this.GeneralService.networkStatus();
            });
        });
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => {
            // get current active page
            let view = this.router.url;
            if (view == '/home' || view == '/login') {
                //Double check to exit app 
                if (new Date().getTime() - this.lastTimeBackPress < 2000) {
                    navigator['app'].exitApp(); //Exit from app
                }
                else {
                    this.GeneralService.presentToast('Press back again to exit App');
                    this.lastTimeBackPress = new Date().getTime();
                }
            }
            else {
                // go to previous page
                this.router.navigate(['home']);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _serv_check_user_data_service__WEBPACK_IMPORTED_MODULE_4__.CheckUserDataService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2472);
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ 4542);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/video-player/ngx */ 524);













// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(httpClient, "assets/i18n/", ".json");
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule
        ],
        providers: [
            _auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard,
            _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_4__.VideoPlayer,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
            _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__.YoutubeVideoPlayer
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serv/general.service */ 9852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);




let AuthGuard = class AuthGuard {
    constructor(GeneralService, router) {
        this.GeneralService = GeneralService;
        this.router = router;
    }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let finalSt = true;
            let tokenKey = this.GeneralService.cuVars.tokenKey;
            yield this.GeneralService.storage.getItem(tokenKey).then((data) => {
                if (!data || data == null) {
                    finalSt = false;
                }
                ;
            });
            yield this.GeneralService.cuVars.cUser.subscribe((data) => {
                finalSt = (data && data != 'noData') ? true : false;
            });
            return finalSt;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_0__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 5969:
/*!*************************************!*\
  !*** ./src/app/serv/api.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor-community/http */ 3975);
/* harmony import */ var _vars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vars.service */ 9183);




let ApiService = class ApiService {
    constructor(cuVars) {
        this.cuVars = cuVars;
        this.output = '';
        this.apiUrl = (path) => `${this.cuVars.serverUrl}${path}`;
        this.cuVars.cUser.subscribe((data) => {
            if (data) {
                //console.log(data);
                this.token = data['token'];
                this.orderUserId = data['id'];
            }
        });
    }
    /*
      async get(path = '/get', method = 'GET', params={}, headers) {
        const { Http } = Plugins;
    
        this.output = '';
    
        try {
          let requestData = {
            url: this.apiUrl(path),
            method: method,
            headers: {
              'content-type': 'application/json',
            },
            params:params
          }
          if(headers) {
            requestData.headers = {
              ...requestData.headers,
              ...headers
            }
          }
    
          
          const ret = await Http.request(requestData);
          return JSON.parse(ret);
        } catch (e) {
          return `Error: ${e.message}, ${e.platformMessage}`;
        }
      }*/
    mutate(path, method = 'POST', data = {}, headers = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            //console.log(data);
            try {
                let requestData = {
                    url: this.apiUrl(path),
                    method: method,
                    headers: {
                        'content-type': 'application/json',
                        //'orderUserId':'55'
                    },
                };
                if (headers) {
                    requestData.headers = Object.assign(Object.assign({}, requestData.headers), headers);
                }
                if (method == "GET") {
                    requestData["params"] = data;
                }
                else {
                    requestData["data"] = data;
                }
                //console.log(requestData);
                const ret = yield _capacitor_community_http__WEBPACK_IMPORTED_MODULE_0__.Http.request(requestData);
                //console.log('Got ret', ret);
                return ret;
            }
            catch (e) {
                //console.log('e');
                //console.log(e);
                return `Error: ${e.message}, ${e.platformMessage}`;
            }
        });
    }
    generalGet(type, params = {}, method = "POST") {
        let path, headers;
        if (this.token) {
            headers = { "Authorization": 'Bearer ' + this.token };
        }
        /*if(this.orderUserId){
          params['orderUserId'] = this.orderUserId;
        }*/
        let ds1General = 'ds1general/v1/';
        let appPrm = 'ds1csre/v1/';
        let points = 'ds1general/v1/points/';
        switch (type) {
            case 'getAppInfo':
                path = appPrm + 'general_actions/app_general_info';
                break;
            case 'changePassword':
                path = appPrm + 'general_actions/change_password';
                break;
            case 'register':
                path = appPrm + 'general_actions/register';
                break;
            case 'userActions':
                path = appPrm + 'general_actions/user_actions';
                break;
            case 'getPosts':
                path = ds1General + 'general_actions/get_posts';
                break;
            case 'getPost':
                path = ds1General + 'general_actions/get_post';
                break;
            case 'addPost':
                path = ds1General + 'general_actions/add_post';
                break;
            case 'addComment':
                path = ds1General + 'general_actions/add_comment';
                break;
            case 'notificationToken':
                path = ds1General + 'general_actions/notifi_token';
                break;
            //Global info
            case 'clinte_h_info':
                path = appPrm + 'clinte_h_info';
                break;
            //Points
            case 'points_get_total':
                path = points + 'get_total';
                break;
            case 'points_reasons':
                path = points + 'reasons';
                break;
            case 'points_add_friends':
                path = points + 'add_friends';
                break;
            //financial
            case 'financial_get':
                path = appPrm + 'financial_get';
                break;
            case 'get_financialds':
                path = appPrm + 'add_friends';
                break;
            //follow_get
            case 'follow_get':
                path = appPrm + 'follow_get';
                break;
            case 'get_financiald':
                path = appPrm + 'add_friends';
                break;
        }
        return this.mutate(path, method, params, headers);
    }
    getJwtAuth(credentials) {
        return this.mutate('jwt-auth/v1/token', 'POST', credentials);
    }
    checkJwtAuth(token) {
        return this.mutate('jwt-auth/v1/token/validate', 'POST', {}, { "Authorization": 'Bearer ' + token });
    }
};
ApiService.ctorParameters = () => [
    { type: _vars_service__WEBPACK_IMPORTED_MODULE_1__.VarsService }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 7977:
/*!*************************************************!*\
  !*** ./src/app/serv/check-user-data.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckUserDataService": () => (/* binding */ CheckUserDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.service */ 9852);
/* harmony import */ var _vars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vars.service */ 9183);





let CheckUserDataService = class CheckUserDataService {
    constructor(GeneralService, router, cuVars) {
        this.GeneralService = GeneralService;
        this.router = router;
        this.cuVars = cuVars;
    }
    checkUserLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            var dataX, finalSt;
            let tokenKey = this.GeneralService.cuVars.tokenKey;
            yield this.GeneralService.StorageService.getItem(tokenKey).then((data) => { dataX = data; }, (err) => { this.notlogedin(); });
            if (dataX && dataX.token) {
                yield this.GeneralService.api.checkJwtAuth(dataX.token).then((data) => {
                    var _a;
                    if (((_a = data["data"]) === null || _a === void 0 ? void 0 : _a.statusCode) != 200) {
                        this.notlogedin();
                    }
                    else {
                        this.GeneralService.cuVars.cUser.next(dataX);
                        finalSt = true;
                    }
                }, (err) => { this.notlogedin(); });
            }
            else {
                this.notlogedin();
            }
            return finalSt;
        });
    }
    notlogedin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.cuVars.cUser.next('noData');
            let stFirstKey = this.GeneralService.cuVars.firstTKey;
            yield this.GeneralService.StorageService.getItem(stFirstKey).then((data) => {
                let to = (!data || data == 'noData') ? 'login/first-time' : 'login';
                this.router.navigate([to]);
            }, (err) => { this.router.navigate(['login/first-time']); });
        });
    }
};
CheckUserDataService.ctorParameters = () => [
    { type: _general_service__WEBPACK_IMPORTED_MODULE_0__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _vars_service__WEBPACK_IMPORTED_MODULE_1__.VarsService }
];
CheckUserDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CheckUserDataService);



/***/ }),

/***/ 9852:
/*!*****************************************!*\
  !*** ./src/app/serv/general.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralService": () => (/* binding */ GeneralService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _capacitor_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/toast */ 74);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 3400);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 5969);
/* harmony import */ var _vars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vars.service */ 9183);








let GeneralService = class GeneralService {
    constructor(platform, loadingCtrl, alert, storage, translate, api, cuVars) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.alert = alert;
        this.storage = storage;
        this.translate = translate;
        this.api = api;
        this.cuVars = cuVars;
        this.StorageService = storage;
    }
    loadingPanel(t = 'open', message = "Loading..") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (t == 'open') {
                this.lastLoading = yield this.loadingCtrl.create({
                    message: message
                });
                yield this.lastLoading.present();
            }
            else {
                yield this.lastLoading.dismiss();
            }
        });
    }
    //alertController
    presentAlert(msg, title = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let dd = {
                message: msg,
                buttons: ['Ok']
            };
            if (title) {
                dd['header'] = title;
            }
            const alert = yield this.alert.create(dd);
            yield alert.present();
        });
    }
    //ToastController
    presentToast(msg, duration = 'short') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.lastToast = yield _capacitor_toast__WEBPACK_IMPORTED_MODULE_0__.Toast.show({
                text: msg,
                duration: duration
            });
        });
    }
    networkStatus() {
        //if (!window || !navigator || !('onLine' in navigator)) return;
        window.addEventListener('offline', () => {
            this.cuVars.networkSt.next('offline');
        });
        window.addEventListener('online', () => {
            this.cuVars.networkSt.next('online');
        });
        if (!navigator.onLine) {
            this.cuVars.networkSt.next('offline');
        }
        else {
            this.cuVars.networkSt.next('online');
        }
    }
    getAppGeneralInfo(cla = {}, callbackX = '') {
        this.api.generalGet('getAppInfo').then(data => {
            if (data["data"]) {
                this.cuVars.getAppInfo.next(data["data"]);
                this.getAppInfo = data["data"];
                if (data["data"].ids && data["data"].ids.help_center) {
                    this.cuVars.contactUsPid = data["data"].ids.help_center;
                }
                if (callbackX && typeof cla[callbackX] === "function") {
                    cla[callbackX]();
                }
            }
        });
    }
    whenUserInfoSet(cla, callbackX = '') {
        if (this.cuVars.cUser.value != 'noData') {
            if (callbackX && typeof cla[callbackX] === "function") {
                cla[callbackX]();
            }
        }
        else {
            this.cuVars.cUser.subscribe((data) => {
                if (data !== 'noData') {
                    if (callbackX && typeof cla[callbackX] === "function") {
                        cla[callbackX]();
                    }
                }
            });
        }
    }
    whenGeneralInfoSet(cla, callbackX = '') {
        if (this.cuVars.getAppInfo.value != 'noData') {
            if (callbackX && typeof cla[callbackX] === "function") {
                cla[callbackX](this.cuVars.getAppInfo.value);
            }
        }
        else {
            this.cuVars.getAppInfo.subscribe((data) => {
                if (data !== 'noData') {
                    if (callbackX && typeof cla[callbackX] === "function") {
                        cla[callbackX](data);
                    }
                }
            });
        }
    }
    //Convert long number into abbreviated string in JavaScript, with a special shortness requirement (1k 2.1 m)
    kFormatter(value) {
        value = (value[0]) ? value[0] : value;
        var newValue = { s: value, p: value, 'pfx': '' };
        if (value >= 1000) {
            var suffixes = ["", "k", "m", "b", "t"];
            var suffixNum = Math.floor(("" + value).length / 3);
            var shortValue;
            for (var precision = 2; precision >= 1; precision--) {
                shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value) /*.toPrecision(precision)*/);
                var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
                if (dotLessShortValue.length <= 2) {
                    break;
                }
            }
            if (shortValue % 1 != 0)
                shortValue = shortValue.toFixed(2);
            newValue = { s: value, p: shortValue, 'pfx': suffixes[suffixNum] };
        }
        return newValue;
    }
    //Date formate
    dateFromYMD(str, fo = '0') {
        if (!/^(\d){8}$/.test(str))
            return "invalid date";
        var month_list_short = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        var y = str.substr(0, 4), m = str.substr(4, 2), d = str.substr(6, 2);
        if (fo == '-' || fo == '/') {
            return y + fo + m + fo + d;
        }
        else if (fo == 'object') {
            return { y: y, m: m, d: d, mo: month_list_short[parseInt(m) - 1] };
        }
        return new Date(y, m, d);
    }
    //Youtube link
    youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }
    getMaplink(mapArr) {
        let lat = (mapArr.lat) ? mapArr.lat : 0;
        let lng = (mapArr.lng) ? mapArr.lng : 0;
        let geo = lat + ',' + lng;
        if (lat && lng) {
            if (this.platform.is("ios")) {
                return "maps://?q=" + geo;
            }
            else {
                return "https://www.google.com/maps/place/" + geo;
            }
        }
        else {
            return '#';
        }
    }
    //Langs
    getCurrentLang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let langs;
            yield this.StorageService.getItem('lang').then((lang) => {
                lang = (lang) ? lang : this.getDefaultLanguage();
                this.cuVars.AppLang.next(lang);
                langs = lang;
            });
            this.cuVars.cLang.next(langs);
            return langs;
        });
    }
    getDefaultLanguage() {
        let language = ''; //this.translate.getBrowserLang();
        language = (language) ? language : 'ar';
        return language;
    }
    changeLanguage(setLang = null) {
        if (!setLang) {
            let currentLang = this.translate.currentLang;
            setLang = (currentLang === 'en') ? 'ar' : 'en';
        }
        this.setLangAs(setLang);
    }
    setLangAs(setLang) {
        this.StorageService.setItem('lang', setLang);
        this.translate.use(setLang);
        this.cuVars.AppLang.next(setLang);
        if (setLang == 'ar') {
            document.documentElement.dir = "rtl";
        }
        else {
            document.documentElement.dir = "ltr";
        }
    }
    startStorageLanguage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //this.translate.use('en');
            yield this.getCurrentLang().then((lang) => {
                this.setLangAs(lang);
            });
        });
    }
    sortByKey(array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 0 : 1));
        });
    }
};
GeneralService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _vars_service__WEBPACK_IMPORTED_MODULE_3__.VarsService }
];
GeneralService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], GeneralService);



/***/ }),

/***/ 3400:
/*!*****************************************!*\
  !*** ./src/app/serv/storage.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 6628);



let StorageService = class StorageService {
    constructor() { }
    isJson(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    setItem(key, val) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (typeof val !== 'string') {
                val = JSON.stringify(val);
            }
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
                key: key,
                value: val
            });
            return new Promise(resolve => {
                resolve("");
            });
        });
    }
    setDatax() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                setTimeout(function () {
                    resolve("\t\t This sssssomise");
                }, 5000);
            });
        });
    }
    getItem(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: key });
            if (this.isJson(value)) {
                value = JSON.parse(value);
            }
            return value;
        });
    }
    removeItem(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key: key });
        });
    }
    keys() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const { keys } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.keys();
            return keys;
        });
    }
    clear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.clear();
        });
    }
};
StorageService.ctorParameters = () => [];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 9183:
/*!**************************************!*\
  !*** ./src/app/serv/vars.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VarsService": () => (/* binding */ VarsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);



let VarsService = class VarsService {
    // public serverUrl = 'http://localhost/m1/cserv/wp-json/';
    constructor() {
        this.AppLang = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.networkSt = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('online');
        this.cUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('noData');
        this.getAppInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('noData');
        this.tokenKey = "TOKEN_DATA";
        this.firstTKey = "FIRST_TIME";
        this.notifiToken = '';
        this.contactUsPid = 2777;
        this.aboutPid = 2779;
        this.pointsTermsPid = 2775;
        this.mediaPid = 232;
        this.decorePid = 2839;
        this.registerAv = false; //New_Elem_v_rmsr
        this.cLang = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('en');
        this.totalPoints = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({ 's': 0, 'p': 0, 'pfx': '' });
        this.refreshScreen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.serverUrl = 'https://alriyadhmisr.com.eg/wp-json/';
    }
};
VarsService.ctorParameters = () => [];
VarsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], VarsService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-list#inbox-list ion-list-header {\n  padding-top: 40px;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 45px;\n  font-size: 14px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-menu hr {\n  background: #cccccc;\n  margin: 0;\n}\n\n.offline-co {\n  display: none;\n}\n\n.offline-co.offline {\n  background: #800101;\n  z-index: 9999;\n  position: absolute;\n  color: #fff;\n  text-align: center;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  padding: 10px;\n  display: block;\n}\n\n:host(.offline-co) {\n  z-index: 1000;\n}\n\nion-list-header {\n  padding: 0;\n  border-bottom: 1px solid #00000017;\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n}\n\nion-list-header img {\n  display: block;\n  margin: auto;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFLQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxzREFBQTtBQUxGOztBQVFBO0VBQ0UsK0JBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxzQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7QUFMRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSwrQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLFNBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7QUFKRjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFLRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cblxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51IGhyIHtcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgbWFyZ2luOiAwO1xufVxuXG4ub2ZmbGluZS1jbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ub2ZmbGluZS1jby5vZmZsaW5lIHtcbiAgYmFja2dyb3VuZDogcmdiKDEyOCwgMSwgMSk7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0KC5vZmZsaW5lLWNvKSB7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwMTc7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app ngClass=\"{{userRoleV}}\">\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>\n            <img src=\"assets/logo2.png\" alt=\"Logo\" class=\"logo\">\n          </ion-list-header>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <hr *ngIf=\"p.type && p.type == 'hr'\" >\n            <ion-item *ngIf=\"!p.type || p.type != 'hr'\" (click)=\"selectedIndex = i\"  routerDirection=\"forward\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <div tabindex=\"0\"></div>\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ 'P_TITLES.'+ p.title | translate }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\">\n      <div class=\"offline-co menu-type-overlay\" [ngClass]=\"offlineSt\">{{ 'GENERAL.offline' | translate }}</div>\n    </ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map