import { Injectable } from '@angular/core';

import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  isJson(str) {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
  }

  async setItem(key, val) {
    if(typeof val !== 'string') {
      val = JSON.stringify(val);
    }
    await Storage.set({
      key: key,
      value: val
    });

    return new Promise(resolve => { 
      resolve(""); 
    }); 
  }

  async setDatax(){
    return new Promise(resolve => { 
      setTimeout(function() { 
        resolve("\t\t This sssssomise"); 
      }, 5000); 
    });
  }


  async getItem(key) {
    let { value } = await Storage.get({ key: key });
    if(this.isJson(value)) {
      value = JSON.parse(value);
    }
    return value;
  }

  async removeItem(key) {
    await Storage.remove({ key: key });
  }

  async keys() {
    const { keys } = await Storage.keys();
    return keys;
  }

  async clear() {
    await Storage.clear();
  }
}
