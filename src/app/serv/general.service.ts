import { Injectable } from '@angular/core';
import { LoadingController, AlertController, Platform } from '@ionic/angular';

import { Toast } from '@capacitor/toast';

import { TranslateService } from '@ngx-translate/core';


import { StorageService } from './storage.service';

import { ApiService } from './api.service';
import { VarsService } from './vars.service';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private lastLoading;
  private lastToast;
  public StorageService;
  public getAppInfo;
  
  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController,
    public alert: AlertController,
    public storage: StorageService,
    public translate: TranslateService,
    public api:ApiService,
    public cuVars:VarsService
  ) { 
    this.StorageService = storage;
  }
  async loadingPanel(t='open', message="Loading..") {
    if(t=='open'){
      this.lastLoading = await this.loadingCtrl.create({
      message: message
      });
      await this.lastLoading.present();
    }
    else {
      await this.lastLoading.dismiss();
    }
  }
  //alertController
  async presentAlert(msg, title='') {
    let dd = {
      message: msg,
      buttons: ['Ok']
    };
    if(title) {
      dd['header'] = title;
    }
		const alert = await this.alert.create(dd);
	  await alert.present(); 
  }
  
  //ToastController
  async presentToast(msg, duration: 'short' | 'long'='short') {
    
    this.lastToast = await Toast.show({
      text: msg,
      duration:duration
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

  getAppGeneralInfo(cla:object={}, callbackX='') {
    this.api.generalGet('getAppInfo').then(data => {
      if(data["data"]){
        this.cuVars.getAppInfo.next(data["data"]);
        this.getAppInfo = data["data"];

        if(data["data"].ids && data["data"].ids.help_center){
          this.cuVars.contactUsPid = data["data"].ids.help_center;
        }

        if(callbackX && typeof cla[callbackX] === "function") {
          cla[callbackX]();
        }

      }
		});
  }

  whenUserInfoSet(cla, callbackX='' ){
    if(this.cuVars.cUser.value != 'noData') {
      if(callbackX && typeof cla[callbackX] === "function") {
        cla[callbackX]();
      }
    }
    else {
      this.cuVars.cUser.subscribe( (data) => {
        if(data !== 'noData'){
          if(callbackX && typeof cla[callbackX] === "function") {
            cla[callbackX]();
          }
        }
      });      
    }
  }


  whenGeneralInfoSet(cla, callbackX='' ){
    if(this.cuVars.getAppInfo.value != 'noData') {
      if(callbackX && typeof cla[callbackX] === "function") {
        cla[callbackX](this.cuVars.getAppInfo.value);
      }
    }
    else {
      this.cuVars.getAppInfo.subscribe( (data) => {
        if(data !== 'noData'){
          if(callbackX && typeof cla[callbackX] === "function") {
            cla[callbackX](data);
          }
        }
      });      
    }
  }

  //Convert long number into abbreviated string in JavaScript, with a special shortness requirement (1k 2.1 m)
  kFormatter(value) {
    value = (value[0]) ? value[0] : value;
    var newValue = {s:value,p:value, 'pfx':''};
    
      if (value >= 1000) {
          var suffixes = ["", "k", "m", "b","t"];
          var suffixNum = Math.floor( (""+value).length/3 );
          var shortValue;
          for (var precision = 2; precision >= 1; precision--) {
              shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value)/*.toPrecision(precision)*/);
              var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
              if (dotLessShortValue.length <= 2) { break; }
          }
          if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(2);
          newValue = {s:value, p:shortValue, 'pfx':suffixes[suffixNum]};
      }
      return newValue;
  }

  //Date formate
  dateFromYMD(str, fo='0') {
      if(!/^(\d){8}$/.test(str)) return "invalid date";
      var month_list_short = ['jan', 'feb','mar', 'apr','may','jun','jul','aug', 'sep','oct','nov','dec'];
      var y = str.substr(0,4),
          m = str.substr(4,2),
          d = str.substr(6,2);

      if(fo == '-' || fo == '/') {
        return y +fo+ m +fo+ d;
      }
      else if(fo == 'object') {
        return {y:y,m:m,d:d, mo:month_list_short[parseInt(m)-1]};
      }

      return new Date(y,m,d);

  }

  //Youtube link

  youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
  getMaplink(mapArr) {
    let lat = (mapArr.lat) ? mapArr.lat : 0;
    let lng = (mapArr.lng) ? mapArr.lng : 0;
    let geo = lat + ',' + lng;

    if(lat && lng) {
      if(this.platform.is("ios") ) {
        return "maps://?q="+geo;
      }
      else {
        return "https://www.google.com/maps/place/"+geo;
      }
    }
    else {
      return '#';
    }
  }

  //Langs
  async getCurrentLang() {
    let langs;
    await this.StorageService.getItem('lang').then(
      (lang) => {
        lang = (lang) ? lang : this.getDefaultLanguage();
        this.cuVars.AppLang.next(lang);
        langs = lang;
      }
    );
    this.cuVars.cLang.next(langs);
    return langs;
  }

  getDefaultLanguage(){
    let language = '';//this.translate.getBrowserLang();
    language = (language) ? language : 'ar';
    return language;
  }
  changeLanguage(setLang=null) {
    if( !setLang) {
      let currentLang = this.translate.currentLang;
      setLang 		= ( currentLang === 'en') ? 'ar' : 'en';
    }
      
    this.setLangAs(setLang);
  }
  setLangAs(setLang){
    this.StorageService.setItem('lang', setLang);
    this.translate.use(setLang);
    this.cuVars.AppLang.next(setLang);
    if(setLang == 'ar') {
      document.documentElement.dir = "rtl";
    }
    else {
      document.documentElement.dir = "ltr";
    }
  }
 
  async startStorageLanguage() {
    //this.translate.use('en');
    await this.getCurrentLang().then((lang) => {
      this.setLangAs(lang);
    });   
  }
  

  public sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 0 : 1));
    });
}
}
