import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

//import { JwtHelperService } from '@auth0/angular-jwt';

import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    //private helper: JwtHelperService,
    private GeneralService:GeneralService
  ) { }

  async login(credentials) {
	  
    this.GeneralService.loadingPanel('open');

    await this.GeneralService.api.getJwtAuth(credentials).then(
    (data) => {
      this.GeneralService.loadingPanel('close');
      
      if(data["status"] == 200 && data["data"].success == true) {
        this.GeneralService.cuVars.cUser.next(data["data"].data);
        var ClassAct = this;
        var async_function = async function() {
          await ClassAct.GeneralService.storage.setItem('TOKEN_DATA', data["data"].data);
          await ClassAct.router.navigate(['home']);
          //window.location.reload();   
        }
        async_function();
        
      }
      else if(data["status"] == 200 && data["data"].message) {
        this.GeneralService.presentAlert(data["data"].message);
      }
      else {
        this.GeneralService.loadingPanel('close');
        this.GeneralService.presentAlert(data["data"].message);
      }
    },
    (err) => {
      console.log(err)
      this.GeneralService.loadingPanel('close');
      this.GeneralService.presentAlert(err.message,'Error');
    }

    );

  }

  async register(regData) {
	  
    this.GeneralService.loadingPanel('open');

    await this.GeneralService.api.generalGet('register', regData).then(
      (data) => {
        this.GeneralService.loadingPanel('close');
      if(data["status"] == 200 && data["data"].st == 'done') {
        regData["username"] = regData.phone;
        this.login(regData)
      }
      else if(data["status"] == 200 && data["data"].msg) {
        this.GeneralService.presentAlert(data["data"].msg);
      }
    },
    (err) => {
      this.GeneralService.loadingPanel('close');
      this.GeneralService.presentAlert(err.message,'Error');
    }

    );

  }
  
  async logout() {
     //remove notification token
     //*********8888**** */
    //await xxxx

    //remove user token
    let tokenKey = this.GeneralService.cuVars.tokenKey;
    await this.GeneralService.storage.removeItem(tokenKey).then(() => {
    this.GeneralService.cuVars.cUser.next('noData');
      //Go to Login page
      this.router.navigate(['login']);
      //window.location.reload();     
      }); 
  }

 async sendPassActiveCode(data={}){
    data["action"] = 'active_code_send';
    let dataX;
    
    return await this.GeneralService.api.generalGet('userActions', data).then(data => {
      if(data["data"]?.msg) {
        this.GeneralService.presentAlert(data["data"].msg);
      }
      return data["data"];
    });
  }

  async changePassword(data){
    return await this.GeneralService.api.generalGet('changePassword', data).then(
      (data) => {
        if(data["data"]?.msg){
          this.GeneralService.presentAlert(data["data"].msg);
        }
        return data["data"];
      });
  }
}
