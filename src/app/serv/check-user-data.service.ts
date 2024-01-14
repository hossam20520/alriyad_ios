import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { GeneralService } from './general.service';
import { VarsService } from './vars.service';

@Injectable({
  providedIn: 'root'
})
export class CheckUserDataService {

  constructor(
    private GeneralService:GeneralService,
    private router: Router,
    private cuVars:VarsService
  ) {}


   async checkUserLogin(){
    var dataX, finalSt;
    let tokenKey = this.GeneralService.cuVars.tokenKey;
    await this.GeneralService.StorageService.getItem(tokenKey).then(
      (data)=> {dataX = data;},
      (err) => {this.notlogedin();}
    );
    if(dataX && dataX.token) {
      await this.GeneralService.api.checkJwtAuth(dataX.token).then(
        (data) => {
          if(data["data"]?.statusCode != 200) {
            this.notlogedin();
          }
          else {
            this.GeneralService.cuVars.cUser.next(dataX);
            finalSt = true;
          }
        },
        (err)=> { this.notlogedin();}
      );
    }
    else {
      this.notlogedin();
    }
    return finalSt;
    
  }

  async notlogedin() {
    this.GeneralService.cuVars.cUser.next('noData');
    let stFirstKey = this.GeneralService.cuVars.firstTKey;
    await this.GeneralService.StorageService.getItem(stFirstKey).then(
      (data)=> {
        let to = (!data || data == 'noData') ? 'login/first-time' : 'login';
        this.router.navigate([to]);
      },
      (err) => {this.router.navigate(['login/first-time']);}
    );
    
  }
}
