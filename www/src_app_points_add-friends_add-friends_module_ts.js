(self["webpackChunkds1csre_riyadh"] = self["webpackChunkds1csre_riyadh"] || []).push([["src_app_points_add-friends_add-friends_module_ts"],{

/***/ 9017:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/contacts/dist/esm/definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactType": () => (/* binding */ ContactType)
/* harmony export */ });
// declare module "@capacitor/core" {
//   interface PluginRegistry {
//     Contacts: ContactsPlugin;
//   }
// }
var ContactType;
(function (ContactType) {
    ContactType[ContactType["Person"] = 0] = "Person";
    ContactType[ContactType["Organization"] = 1] = "Organization";
})(ContactType || (ContactType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 9843:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor-community/contacts/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ContactType),
/* harmony export */   "Contacts": () => (/* binding */ Contacts)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 9017);

const Contacts = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Contacts', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_contacts_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 6089)).then(m => new m.ContactsPluginWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 578:
/*!******************************************************************!*\
  !*** ./src/app/points/add-friends/add-friends-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFriendsPageRoutingModule": () => (/* binding */ AddFriendsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_friends_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-friends.page */ 250);




const routes = [
    {
        path: '',
        component: _add_friends_page__WEBPACK_IMPORTED_MODULE_0__.AddFriendsPage
    }
];
let AddFriendsPageRoutingModule = class AddFriendsPageRoutingModule {
};
AddFriendsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddFriendsPageRoutingModule);



/***/ }),

/***/ 3095:
/*!**********************************************************!*\
  !*** ./src/app/points/add-friends/add-friends.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFriendsPageModule": () => (/* binding */ AddFriendsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _add_friends_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-friends-routing.module */ 578);
/* harmony import */ var _add_friends_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-friends.page */ 250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);








let AddFriendsPageModule = class AddFriendsPageModule {
};
AddFriendsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_friends_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddFriendsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_add_friends_page__WEBPACK_IMPORTED_MODULE_1__.AddFriendsPage]
    })
], AddFriendsPageModule);



/***/ }),

/***/ 250:
/*!********************************************************!*\
  !*** ./src/app/points/add-friends/add-friends.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFriendsPage": () => (/* binding */ AddFriendsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_friends_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-friends.page.html */ 6173);
/* harmony import */ var _add_friends_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-friends.page.scss */ 3660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _serv_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../serv/general.service */ 9852);
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/core */ 6461);
/* harmony import */ var _capacitor_community_contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor-community/contacts */ 9843);






/*
import { Plugins } from "@capacitor/core";
const  { Contacts } = Plugins;
*/


let AddFriendsPage = class AddFriendsPage {
    constructor(GeneralService, router) {
        this.GeneralService = GeneralService;
        this.router = router;
        this.skeleton = true;
        this.selectedFriends = [];
        this.contactsFound = [];
        this.skeletonNumbers = Array(5).fill(0).map((x, i) => i);
        /*
        this.contactsFound = [
          {
            displayName:'Ahmed',
            phoneNumbers:[{value:"010001115555"}, {value:"042022222222"}],
          },
          {
            displayName:'محمد سمير',
            phoneNumbers:[{value:"58758421"}],
          },
          {
            displayName:'Test LLL',
            phoneNumbers:[{value:"00011100011"}],
          },
          {
            displayName:'محمود سيد',
            phoneNumbers:[{value:"05435685"}],
          },
          {
            displayName:'خالد',
            phoneNumbers:[{value:"05435685"}],
          },
          {
            displayName:'Test LLL2',
            phoneNumbers:[{value:"00011100022"}],
          },
        ];
        */
    }
    ngOnInit() {
        this.loadContacts();
    }
    loadContacts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if ((0,_ionic_core__WEBPACK_IMPORTED_MODULE_3__.isPlatform)("android")) {
                let permission = yield _capacitor_community_contacts__WEBPACK_IMPORTED_MODULE_4__.Contacts.getPermissions();
                if (!permission.granted) {
                    this.GeneralService.presentAlert('There is no permission to use the contact list');
                    return;
                }
            }
            _capacitor_community_contacts__WEBPACK_IMPORTED_MODULE_4__.Contacts.getContacts().then(result => {
                this.contactsFound = result.contacts;
                this.skeleton = false;
            });
        });
    }
    onSearchTerm(ev) {
        const val = ev.detail.value;
        this.contactsFound = this.contactsFound.filter(item => {
            if (val.trim()) {
                const shouldShow = item.displayName && item.displayName.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
                const shouldShowPhone = item.phoneNumbers && item.phoneNumbers.toString().indexOf(val.trim()) > -1;
                item.hide = (shouldShow || shouldShowPhone) ? false : true;
            }
            else {
                item.hide = false;
            }
            return true;
        });
    }
    selectFriend(e, data) {
        if (e.detail.checked == true) {
            this.selectedFriends.push(data);
        }
        else {
            let newArray = this.selectedFriends.filter(function (el) {
                return el.displayName !== data.displayName;
            });
            this.selectedFriends = newArray;
        }
    }
    startSendData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.GeneralService.loadingPanel();
            yield this.GeneralService.api.generalGet('points_add_friends', { friends: this.selectedFriends }).then((data) => {
                var _a;
                this.GeneralService.loadingPanel('close');
                var moreMsg = '';
                if ((_a = data["data"]) === null || _a === void 0 ? void 0 : _a.errors) {
                    for (const err of data["data"].errors) {
                        moreMsg = moreMsg + "<p> " + err.error + " <span class='d-block'>" + err.data_prev + '</span></p>';
                    }
                }
                //If msg !
                if (data["data"] && data["data"].msg) {
                    this.GeneralService.presentAlert(data["data"].msg + moreMsg);
                }
                if (data["data"].st == 'done') {
                    // go to previous page
                    this.router.navigate(['points']);
                }
            }, (err) => {
                this.GeneralService.loadingPanel('close');
            });
        });
    }
};
AddFriendsPage.ctorParameters = () => [
    { type: _serv_general_service__WEBPACK_IMPORTED_MODULE_2__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AddFriendsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-friends',
        template: _raw_loader_add_friends_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_friends_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddFriendsPage);



/***/ }),

/***/ 3660:
/*!**********************************************************!*\
  !*** ./src/app/points/add-friends/add-friends.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZnJpZW5kcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6173:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/points/add-friends/add-friends.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n     <ion-button slot=\"end\" size=\"small\" (click)=\"startSendData()\" margin> <ion-icon name=\"add\"></ion-icon> {{ 'GENERAL.add' | translate }} {{selectedFriends.length ?'('+selectedFriends.length+')' : ''}}</ion-button>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"points\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'P_TITLES.pointsAdd' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar primary show-cancel=\"true\" placeholder=\"Search\" (ionChange)=\"onSearchTerm($event)\"></ion-searchbar>\n\n  <div *ngIf=\"skeleton\">\n    <ion-list>\n      <ion-item *ngFor=\"let number of skeletonNumbers\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n          <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class=\"dat-group\" *ngIf=\"contactsFound\">\n    <ion-item-sliding *ngFor=\"let contact of contactsFound\">\n      <ion-item [hidden]=\"contact.hide\">\n        <ion-label>\n        <span class=\"name\">{{contact.displayName}}</span>\n        <p class=\"phone\" *ngIf=\"contact?.phoneNumbers\">\n          <span *ngFor=\"let obj of contact?.phoneNumbers\">{{obj.value | json}}</span>\n        </p>\n        </ion-label>\n        <ion-checkbox ng-init=\"ddddd='sdfsdf'\" (ionChange)=\"selectFriend($event, contact)\"></ion-checkbox>\n      </ion-item>\n    \n    </ion-item-sliding>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_points_add-friends_add-friends_module_ts.js.map