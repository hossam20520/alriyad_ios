import { Injectable } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormAssistantService {

  constructor() { }
  
  public validByT($type) {
    switch ($type) {
      case 'username':
        //return [Validators.required];
        return [Validators.required,Validators.pattern(/(^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$)|(^[\w_\-\._]{4,20}$)+/i)];
        break;

        case 'password':
          return [Validators.required, Validators.minLength(6)];
          break;
          
        case "forgot_code":
          return [Validators.required, Validators.minLength(6)];
          break;
          
        case "phone":
          return [Validators.required, Validators.minLength(8),Validators.pattern(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i)];
          break;
    }

  }

  checkMatchValidator(field1: string, field2: string) {
    return function (frm) {
      let field1Value = frm.get(field1).value;
      let field2Value = frm.get(field2).value;
  
      if (field1Value !== '' && field1Value !== field2Value) {
        return { 'notMatch': `value ${field1Value} is not equal to ${field2}` }
      }
      return null;
    }
  }


  public getDateOperation(tDays,fromDate=null){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    fromDate = fromDate || new Date();
    let targetDate = new Date(fromDate);

    targetDate.setDate(targetDate.getDate() + tDays);
    let dateX = {
      'dd'  :String(targetDate.getDate()).padStart(2, '0'),
      'mm'  :String(targetDate.getMonth() + 1).padStart(2, '0'),
      'yyyy':targetDate.getFullYear(),
      'MM'  : monthNames[targetDate.getMonth()]
    };
    return dateX;

  }
}
