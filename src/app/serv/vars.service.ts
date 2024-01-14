import { Injectable } from '@angular/core';

import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VarsService {

  public AppLang= new Subject<string>();
  public networkSt= new BehaviorSubject('online');
  public cUser= new BehaviorSubject('noData');
  public getAppInfo = new BehaviorSubject('noData');
  public tokenKey = "TOKEN_DATA";
  public firstTKey = "FIRST_TIME"
  public notifiToken = '';
  public contactUsPid = 2777;
  public aboutPid = 2779;
  public pointsTermsPid = 2775;
  public mediaPid = 232;
  public decorePid = 2839;
  public registerAv = false; //New_Elem_v_rmsr
  public cLang = new BehaviorSubject('en');

  public totalPoints: BehaviorSubject<any> = new BehaviorSubject({'s':0, 'p':0, 'pfx':''});
  
  
  public refreshScreen = new Subject<string>();
  
  public serverUrl = 'https://alriyadhmisr.com.eg/wp-json/';
 // public serverUrl = 'http://localhost/m1/cserv/wp-json/';



  constructor() { }
}
