import { Injectable } from '@angular/core';

import { Http } from '@capacitor-community/http';

import {VarsService} from './vars.service'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token;
  private orderUserId;

  constructor(
    public cuVars:VarsService
  ) { 
    
    this.cuVars.cUser.subscribe( (data) => {
      if(data){
        //console.log(data);
        this.token = data['token'];
        this.orderUserId = data['id'];
      }
    });
  }


  output: string = '';

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

  async mutate(path, method='POST', data = {}, headers= {}) {
    //console.log(data);
    try {
      
      let requestData = {
        url: this.apiUrl(path),
        method: method,
        headers: {
          'content-type': 'application/json',
          //'orderUserId':'55'
        },
      }
      if(headers) {
        requestData.headers = {
          ...requestData.headers,
          ...headers
        }
      }
      if(method == "GET") {
        requestData["params"] = data;
      }
      else {
        requestData["data"] = data;
      }
      //console.log(requestData);


      const ret = await Http.request(requestData);
      //console.log('Got ret', ret);
      return ret;

    } catch (e) {
      //console.log('e');
      //console.log(e);
      return `Error: ${e.message}, ${e.platformMessage}`;
    } 
  }

  apiUrl = (path: string) => `${this.cuVars.serverUrl}${path}`;

  generalGet(type, params={}, method="POST") {
    let path, headers;

    if(this.token){
      headers = {"Authorization":'Bearer ' +this.token};
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
    return this.mutate(path,method, params, headers);
  }



	getJwtAuth(credentials) {
		return this.mutate('jwt-auth/v1/token','POST', credentials); 
  }
  
	checkJwtAuth(token) {
		return this.mutate('jwt-auth/v1/token/validate','POST', {}, {"Authorization":'Bearer ' +token}); 
  }
  



  
}
