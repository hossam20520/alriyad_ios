import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { FormAssistantService } from '../../serv/form-asistant.service';
import { AuthService } from '../../serv/auth.service';
import { VarsService } from '../../serv/vars.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public credentialsForm: FormGroup;
  public password_type: string = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private cValid:FormAssistantService,
    private router: Router,
    private auth:AuthService,
    private cuVars:VarsService
  ) { }
  
  
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', this.cValid.validByT('email')],
      name: ['', this.cValid.validByT('co_name')],
      phone: ['', this.cValid.validByT('phone')],
      password: ['', this.cValid.validByT('password')]
    });
  }
  

  public onSubmitUserData() {
    this.auth.register(this.credentialsForm.value);
  }


  public togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  /*async ionViewWillEnter(){
    this.cuVars.cUser.subscribe( (data) => {
      if(data && data != 'noData'){
        this.router.navigate(['home']);
      }
    });
  }*/
}
