import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GeneralService } from '../../serv/general.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-decore',
  templateUrl: './decore.page.html',
  styleUrls: ['./decore.page.scss'],
})
export class DecorePage implements OnInit {
  public credentialsForm: FormGroup;
  decoreFDateMin;
  activeAcc = -1;
  userSpaceMeters = 0;
  skeleton = true;

  postId;
  post;


  constructor(
    public GeneralService:GeneralService,
    private formBuilder: FormBuilder,
    public nav:NavController
  ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      decoreFDate: ['', []],
      decoreFSpace: ['', [Validators.required]],
      decoreFType: ['', [Validators.required]]
    });

    //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    this.loadPageData();
  }

  loadPageData() {

    this.GeneralService.api.generalGet('getPost', {'pid':this.GeneralService.cuVars.decorePid}, "GET").then(data => {
      this.skeleton = false;
      if(data["data"]){
        this.post = data["data"];
        
      }
      
     
    });


    var tDate = new Date();
    var date = ('0' + tDate.getDate()).slice(-2);
    var month = ('0' + (tDate.getMonth() + 1)).slice(-2);
    var year = tDate.getFullYear();

    this.decoreFDateMin = year+'-'+month+'-'+date;


  }

  accordionAct(ii){
    this.activeAcc = (this.activeAcc == ii ) ? -1 :  ii;
  }

  pushToNextScreenWithParams(pageUrl: any, params: any) {
    let textareaInfo = "";
    if(this.userSpaceMeters) {
     textareaInfo += "Space:" + this.userSpaceMeters + "M \n";
    }
    if(this.activeAcc >= 0) {
     textareaInfo += "Package:" + this.post.finishing_packages[this.activeAcc].name + "\n";
    }

    this.nav.navigateForward(pageUrl, { state: {typeInfo:params, textareaInfo:textareaInfo} });
  }

  public onChangeUserData(e) {
    this.userSpaceMeters = e.detail.value;
  }

}
