import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { Router } from '@angular/router';

import { PushNotifications, PushNotificationSchema, Token, ActionPerformed } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';


// with type support
//import { FCM } from '@capacitor-community/fcm';

//const fcm = new FCM();

// alternatively - without types
//const { FCMPlugin } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private reg=0;
  constructor(
   public GeneralService:GeneralService,
   private router: Router
  ) { }




  noti(){
    if(this.reg || Capacitor.getPlatform() == 'web'){return;}
    //console.log("notifi-console: A1");
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then( result => {
      //console.log("notifi-console: A2");
      if (result['receive'] == "granted") {
        //console.log("notifi-console: A3");
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register().then(() => {
          //console.log("notifi-console: A4");
          this.reg=1;
          //
          // Subscribe to a specific topic
          //fcm.subscribeTo({ topic: 'all' });
        })
      } else {
        //console.log("notifi-console: A5");
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: Token) => {
        //console.log(token);
        //console.log("notifi-console: Reg1", token.value);
        this.GeneralService.api.generalGet('notificationToken', {'token':token.value, 'action_type':'add'}, 'POST').then(data => {
          //console.log("notifi-console: Reg2");
          this.GeneralService.cuVars.notifiToken = token.value;
        });

      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        //console.log("notifi-console: registrationError");
        //console.log(error);
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        //console.log(notification);
        //console.log("notifi-console: pushNotificationReceived 1");
        if (notification['title'] || notification['body']) {
            var mBody =  ( notification['body'] ) ? notification['body'] : '';
            this.GeneralService.presentAlert( mBody , notification['title'] );
        }
        //console.log("notifi-console: pushNotificationReceived 3");

        //Refresh current screen
        this.GeneralService.cuVars.refreshScreen.next(this.router.url);

        //console.log("notifi-console: pushNotificationReceived 4");

        this.dataActions(notification);
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        //console.log("notifi-console: pushNotificationActionPerformed 1");
        this.dataActions(notification);
      }
      );
    }


  dataActions(notification){
    //console.log("notifi-console: dataActions");
    if(notification['data'] && notification['data']['wasTapped']) {
      let goTo = notification["data"]["wasTapped"];
      this.router.navigate([goTo]);
    }

    if(notification['data'] && notification['data']['popup']) {
      let poptype = notification['data']['popup']['type'];
      if(poptype == 'text'){
        let title = (notification['data']['popup']['title']) ? notification['data']['popup']['title'] : '';
        this.GeneralService.presentAlert(notification['data']['popup']['info'], title);
      }
      else if(poptype == 'image'){
        let link = (notification['data']['popup']['link']) ? notification['data']['popup']['link'] : '#';

        '<a href="'+ link +'"><img src="'+ notification['data']['popup']['info'] +'"></a>';
      }

      
    }
    

  }
}
