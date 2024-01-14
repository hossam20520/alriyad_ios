import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormAssistantService } from '../../serv/form-asistant.service';
import { AuthService } from '../../serv/auth.service';
import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  public password_type: string = 'password';
  public credentialsForm: FormGroup;
  public credentialsForm_2: FormGroup;
  public formStep = 1;
  public username='';

  constructor(
    private formBuilder: FormBuilder,
    private cValid:FormAssistantService,
    private auth:AuthService,
    public GeneralService:GeneralService
  ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      username: ['', this.cValid.validByT('username')]
    });
    this.credentialsForm_2 = this.formBuilder.group({
      username: ['', this.cValid.validByT('username')],
      active_code: ['', this.cValid.validByT('forgot_code')],
      password: ['', this.cValid.validByT('password')]
    });
  }

 async onSubmitUserData($step) {
   this.GeneralService.loadingPanel('open');


    if($step == 'step1') {
      let result =  await this.auth.sendPassActiveCode(this.credentialsForm.value);
      this.GeneralService.loadingPanel('close');

      if(result.st == 'done'){
        this.formStep = 2;
        this.username = this.credentialsForm.value.username;
      }
    }

    if($step == 'step2') {
      let result =  await this.auth.changePassword(this.credentialsForm_2.value);
      this.GeneralService.loadingPanel('close');

      if(result.st == 'done'){
        this.formStep = 1;
        this.auth.login({
          'username':this.username,
          'password':this.credentialsForm_2.value.password
        });
      }
      

      
    }
  }


  public togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  toggleFormHaveCode(){
    this.formStep = 21;
  }
}
