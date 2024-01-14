import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { FormAssistantService } from '../../serv/form-asistant.service';
import { AuthService } from '../../serv/auth.service';
import { VarsService } from '../../serv/vars.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
    localStorage.setItem("skip","false");
    this.credentialsForm = this.formBuilder.group({
      username: ['', this.cValid.validByT('username')],
      password: ['', this.cValid.validByT('password')]
    });

  }



  

  public onSubmitUserData() {
    localStorage.setItem("skip","false")
    if(this.credentialsForm.value.username == 'first-time'){
      this.router.navigate(['login/first-time']);
    }
    else {
      localStorage.setItem("skip","false")
      this.auth.login(this.credentialsForm.value);
      localStorage.setItem("skip","false")
    }
  }


  public togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  async ionViewWillEnter(){
    this.cuVars.cUser.subscribe( (data:any) => {
      if(data && data != 'noData' && data.id !=402){
        this.router.navigate(['home']);
      }
    });
  }
  async skip(){
    await localStorage.setItem("skip","true")
    let value={
      password: "txkCRMhs49U8UUYBCgfGKa1F",
      username: "gust"}
    await this.auth.login(value);
    await this.credentialsForm.controls["username"].setValue("");
    await this.credentialsForm.controls["password"].setValue("");
  }
}
