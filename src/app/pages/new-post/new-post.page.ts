import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormAssistantService } from '../../serv/form-asistant.service';
import { GeneralService } from '../../serv/general.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {
  public credentialsForm: FormGroup;
  typeToP: any;
  selectOpt: any='';
  textareaInfo: any='';

  constructor(
    public GeneralService:GeneralService,
    private cValid:FormAssistantService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router
  ) { 
  }

  ngOnInit() {
    this.typeToP = this.route.snapshot.paramMap.get('type');
    if (this.router.getCurrentNavigation().extras.state) {
      this.selectOpt = (this.router.getCurrentNavigation().extras.state.typeInfo) ? this.router.getCurrentNavigation().extras.state.typeInfo : '';
      this.textareaInfo = (this.router.getCurrentNavigation().extras.state.textareaInfo) ? this.router.getCurrentNavigation().extras.state.textareaInfo : '';
    }
    
    const settings = {
      title: ['', [Validators.required]],
      p_type: [this.selectOpt, []],
      post_content: [this.textareaInfo, [Validators.required]]
    }
    const settingsNotUser = {
      title: ['', [Validators.required]],
      phone: ['', this.cValid.validByT('phone')],
      name: ['', [Validators.required]],

      p_type: [this.selectOpt, []],
      post_content: [this.textareaInfo, [Validators.required]]
    };
    this.GeneralService.cuVars.cUser.subscribe( (data) => {
      var settingV = (data !== 'noData') ? settings : settingsNotUser;
      this.credentialsForm = this.formBuilder.group(settingV);
    });
    
  }

  async onSubmitUserData() {
    this.GeneralService.loadingPanel('open');
    if(this.credentialsForm.value.phone){
      this.credentialsForm.value.post_content = "Name: "+ this.credentialsForm.value.name + " \n "+"Phone: "+ this.credentialsForm.value.phone + " \n "+ this.credentialsForm.value.post_content;
    }
    this.GeneralService.api.generalGet('addPost', { 'post_type':this.typeToP, 'fields':this.credentialsForm.value }, "POST").then(data => {
      this.GeneralService.loadingPanel('close');
      if(data["data"]){
        //If msg !
        if(data["data"] && data["data"].msg) {
          this.GeneralService.presentAlert(data["data"].msg);
        }
        if(data["data"].st == 'done') {
          this.credentialsForm.reset();
        }
      }
      
    });
  }

}
