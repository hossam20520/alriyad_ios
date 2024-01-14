import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { GeneralService } from './serv/general.service';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private GeneralService: GeneralService,
    private router: Router
  ) {
    
  }
  
  async canActivate() {
      let finalSt = true;
      let tokenKey = this.GeneralService.cuVars.tokenKey;
      await this.GeneralService.storage.getItem(tokenKey).then(
        (data)=> {
          if (!data || data == null) {
            finalSt = false;
          };

        }
      );
      await this.GeneralService.cuVars.cUser.subscribe( (data) => {
        finalSt = (data && data != 'noData') ? true : false;
      });

      return finalSt;
  }



  
  
}





