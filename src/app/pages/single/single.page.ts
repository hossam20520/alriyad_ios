import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../serv/general.service';
import { FormAssistantService } from '../../serv/form-asistant.service';

import { ModalController, NavController } from '@ionic/angular';
import { CustomModalPage } from '../custom-modal/custom-modal.page';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {
  skeleton = true;
  post: any;
  FollowProject: any;
  comments;
  typeToP:any='post';
  postId:any=0;

  videoList=[];


  public credentialsForm: FormGroup;


  slideOpts = {
    slidesPerView: 3,
    initialSlide: 1,
    speed: 400,
    autoplay:true
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cValid:FormAssistantService,
    public GeneralService:GeneralService, 
    private youtube: YoutubeVideoPlayer,
    private modalCtr: ModalController,
    public nav:NavController
    ) { }

    ngOnInit() {
      this.postId = this.activatedRoute.snapshot.paramMap.get('id');
      this.typeToP = this.activatedRoute.snapshot.paramMap.get('type');

      this.credentialsForm = this.formBuilder.group({
        comment: ['', [Validators.required, Validators.minLength(5)]]
      });

      //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
      this.loadPageData();
    }

    async loadPageData() {
      this.GeneralService.api.generalGet('getPost', {'pid':this.postId}, "GET").then(data => {
        this.skeleton = false;
        if(data["data"]){
          this.post = data["data"];
          this.comments = data["data"].comments;
          
          if(! this.post.dontShowDate && ['real-estate', 'previous-projects'].includes(this.typeToP) ) {
            this.post.dontShowDate = true;
          }
          if( this.post["follow-projects"] ) {
            this.getFollowProject();
          }
          if(this.post["youtube_media"]){
            this.youtubeMediaSet();
          }
        }
       
      });
    }

    youtubeMediaSet() {
      if(!this.post['youtube_media']){return;}
      this.videoList = [];
      this.post.youtube_media.forEach(element => {
        
        let vID = this.GeneralService.youtube_parser(element.link);
        element.id = vID;
        
        this.videoList.push(element);
      });
    }


    getFollowProject() {
      this.GeneralService.api.generalGet('getPost', {'pid':this.post["follow-projects"]}, "GET").then(data => {
        if(data["data"]){
          let dateX = this.GeneralService.dateFromYMD(data["data"].due_date, '-');
          data["data"].due_date = dateX;
          
          this.FollowProject = data["data"];
          
        }
        
      });    
    }


    showMoreContent(targetContent) {
      //console.log(targetContent)
    }

    async onSubmitData() {
      this.GeneralService.loadingPanel('open');
      this.GeneralService.api.generalGet('addComment', { 'pid':this.postId, 'comment':this.credentialsForm.value.comment }, "POST").then(data => {
        this.GeneralService.loadingPanel('close');
        if(data["data"]){
          //If msg !
          if(data["data"] && data["data"].msg) {
            this.GeneralService.presentAlert(data["data"].msg);
          }
          if(data["data"].st == 'done') {
            this.post.comments.unshift({"comment_auth":"current","comment_date":'',"comment_content":this.credentialsForm.value.comment})

            this.credentialsForm.reset();
          }
        }
        
      });
    }

    async openImagePrev(prevData){
      const modal = await this.modalCtr.create({
        component: CustomModalPage,
        cssClass:'transparent-modal',
        componentProps:{
          prevData:prevData
        }
      });
      modal.present();
    }

    openExtMapsLink(map_prop) {
      var link = this.GeneralService.getMaplink(map_prop);
      window.open(link);
    }

    openVideo(vID){
      this.youtube.openVideo(vID);
    }

    pushToNextScreenWithParams(pageUrl: any, params: any) {
      this.nav.navigateForward(pageUrl, { state: {typeInfo:params} });
    }

    doRefresh(event) {
      this.loadPageData();
  
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    }
}
