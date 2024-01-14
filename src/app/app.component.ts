import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';

import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';


import {CheckUserDataService} from './serv/check-user-data.service';
import { GeneralService } from './serv/general.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public lastTimeBackPress:any = 0;
  public username;
  public appPages =[];
  userRoleV='';
  offlineSt;

  public appPagesGeneral = [
    {title: 'home',     url: '/home',         icon: 'home', order:1},
    {title: 'real-estate', url: '/cat/real-estate', icon: 'business', order:20},
    {title: 'previous-projects', url: '/cat/previous-projects', icon: 'business', order:21},
    {title: 'post', url: '/cat/post', icon: 'newspaper', order:21},
    {title: 'media', url: '/media', icon: 'videocam', order:21},
    {title: 'about-us', url: '/dynamic/'+this.GeneralService.cuVars.aboutPid, icon: 'checkmark-done-circle', order:26},
    {title: 'contact-us', url: '/dynamic/'+this.GeneralService.cuVars.contactUsPid, icon: 'call', order:27},
    {type:"hr", order:25}
  ];

  public appPagesAnyUsers = [
   
    {title: 'control',  url: '/control', icon: 'settings', order:30},
    {title: 'points',url: '/points', icon: 'share-social', order:2},
    {title: 'directoryGate',url: '/directory', icon: 'bookmarks', order:2},
    {title: 'directoryDecore',url: '/directory/decore', icon: 'color-fill', order:3},
    {title: 'ds1_notifications',url: '/cat/ds1_notifications', icon: 'notifications', order:3},
    {title: 'ds1_tickets',url: '/cat/ds1_tickets', icon: 'ticket', order:3},
  ];

  public appPagesUsers = [
    {title: 'p_follow_projects', url: '/cs-re/follow-up-projects', icon: 'calendar', order:2},
    {title: 'financialGate',url: '/cs-re/financial-gate', icon: 'calculator', order:2},

    {type:"hr", order:9}
  ];

  public appPagesNotUsers = [
    {title: 'login', url: '/login', icon: 'log-in', order:1},
    {title: 'forgot', url: '/login/forgot', icon: 'lock-open', order:1},
    {type:"hr", order:5}
  ];

  public appBrokerUsers = [
    {title: 'inventory', url: '/cs-re/inventory', icon: 'layers', order:20}
  ];

  constructor(
    private platform: Platform,
    public GeneralService : GeneralService,
    private router: Router,
    private CheckUserDataService:CheckUserDataService,
  ) {
    
    this.initializeApp();
  }

  
 async initializeApp() {
   //Use lang
    this.platform.ready().then(() => { 
      this.GeneralService.startStorageLanguage();
    });

    await this.CheckUserDataService.checkUserLogin();
    await this.platform.ready().then(() => { 
      
     
      SplashScreen.hide().catch(error => {
        //console.error(error);
      });

      StatusBar.hide().catch(error => {
        //console.error(error);
      });

    });

    await this.GeneralService.cuVars.cUser.subscribe( (data) => {
      if(localStorage.getItem("skip")=="true")data="noData"
      this.GeneralService.getAppGeneralInfo();

      //Add user roles to general class name
      if(data && data["role"]){
        this.userRoleV = data["role"].join(' ');
      }
      this.username = (data) ? data['displayName'] : '';

      if(!data || data == 'noData' || !data["role"]){
        let mmm = this.appPagesGeneral.concat(this.appPagesNotUsers);
        this.appPages = this.GeneralService.sortByKey(mmm, 'order');
      }
      else if(data["role"] && data["role"].includes('broker')){
        let mmm = this.appPagesGeneral.concat(this.appBrokerUsers);
            mmm = mmm.concat(this.appPagesAnyUsers);
        this.appPages = this.GeneralService.sortByKey(mmm, 'order');
      }
      else if(
        data["role"] && 
        (
          data["role"].includes('administrator') || 
          data["role"].includes('administrator')
        )
      ){
        let mmm = this.appPagesGeneral.concat(this.appPagesUsers);
            mmm = mmm.concat(this.appBrokerUsers);
            mmm = mmm.concat(this.appPagesAnyUsers);
        this.appPages = this.GeneralService.sortByKey(mmm, 'order');
      }
      else if( data["role"] && data["role"].includes('cs_customer') ){
        let mmm = this.appPagesGeneral.concat(this.appPagesUsers);
            mmm = mmm.concat(this.appPagesAnyUsers);
        this.appPages = this.GeneralService.sortByKey(mmm, 'order');
      }
      else {
        let mmm = this.appPagesGeneral.concat(this.appPagesAnyUsers);
        this.appPages = this.GeneralService.sortByKey(mmm, 'order');
      }
      
    });
    
    
    this.GeneralService.cuVars.getAppInfo.subscribe((data)=>{
      if(data["register"]){
        this.GeneralService.cuVars.registerAv = true;
      }
      else {
        this.GeneralService.cuVars.registerAv = false;
      }
      

      if(data["lang"]){
        this.GeneralService.setLangAs(data["lang"]);
      }
      
    });
    
    
    this.platform.ready().then(() => { 
       //Check network
       this.GeneralService.cuVars.networkSt.subscribe((data)=>{
        if(data){
          this.offlineSt = data;
        }
        else {
          this.offlineSt = '';
        }
      });
      this.GeneralService.networkStatus();
      
    });


  }

  ngOnInit() {

    this.platform.backButton.subscribe(()=>{
			
      // get current active page
      let view = this.router.url;
      if (view == '/home' || view == '/login') {
        //Double check to exit app 
        if (new Date().getTime() - this.lastTimeBackPress < 2000) {
          navigator['app'].exitApp(); //Exit from app
        } else {
          this.GeneralService.presentToast('Press back again to exit App');
          this.lastTimeBackPress = new Date().getTime();
        }
      } else {
        // go to previous page
        this.router.navigate(['home'])
      }
    });

    
   
   
    
  }

  
}
