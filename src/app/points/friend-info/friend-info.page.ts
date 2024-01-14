import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../serv/general.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormAssistantService } from '../../serv/form-asistant.service';


@Component({
  selector: 'app-friend-info',
  templateUrl: './friend-info.page.html',
  styleUrls: ['./friend-info.page.scss'],
})
export class FriendInfoPage implements OnInit {
  public credentialsForm: FormGroup;
  public formMsgs={};

  constructor(
    public GeneralService:GeneralService,
    private formBuilder: FormBuilder,
    private cValid:FormAssistantService,
  ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', this.cValid.validByT('phone')],
      message: ['']
    });

    //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
  }


  async onSubmitFriendData() {
    this.GeneralService.loadingPanel('open');
    this.formMsgs = {};

    await this.GeneralService.api.generalGet('points_add_friends', {friends:[this.credentialsForm.value]}).then(
      (data) => {
        this.GeneralService.loadingPanel('close');

        //If msg !
        if(data["data"] && data["data"].msg) {
          this.GeneralService.presentAlert(data["data"].msg);
        }

        if(data["data"].st == 'error' && data["data"]?.errors) {
          this.formMsgs["general"] = data["data"].errors[0].error;
        }
        else {
          this.credentialsForm.reset();

          //Update points
          if(data["data"]?.new_total){
            this.GeneralService.cuVars.totalPoints.next( this.GeneralService.kFormatter(data["data"].new_total) );
          }
        }

        

    },
    (err) => {
      this.GeneralService.loadingPanel('close');
      this.GeneralService.presentAlert(err.message,'Error');
    }

    );
  }
}
