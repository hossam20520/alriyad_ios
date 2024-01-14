import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormAssistantService } from '../../serv/form-asistant.service';
import { AuthService } from '../../serv/auth.service';
import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {
  public currentLang;
  public credentialsForm: FormGroup;
  public password_type: string = 'password';
  public passwordStrong;
  
  constructor(
    public GeneralService:GeneralService,
    private formBuilder: FormBuilder,
    private cValid:FormAssistantService,
    private auth:AuthService
  ) { }

  ngOnInit() {
    this.currentLang = this.GeneralService.cuVars.cLang.value;
    this.GeneralService.cuVars.cLang.subscribe( (data) => {
      this.currentLang = data;
    });
    
    this.credentialsForm = this.formBuilder.group({
      password: ['', this.cValid.validByT('password')]
    });
  }



  public onChangeLang($event){
		this.GeneralService.changeLanguage($event.target.value);
  }

  public onChangeNotifi($event){
  }

  public logOut(){
		this.auth.logout();
	}
  

  public onSubmitUserData() {
    this.auth.changePassword(this.credentialsForm.value)
  }

  public togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  strongPassMeter($event){
    let value = $event.target.value;
    // regex 
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    if(value==''){
      this.passwordStrong = "transparent";
		}else if(strongRegex.test(value)){
			this.passwordStrong = "green";
		}else if(mediumRegex.test(value)) {
			this.passwordStrong = "orange";
		}else{
			this.passwordStrong = "red";
    }
  }

}
