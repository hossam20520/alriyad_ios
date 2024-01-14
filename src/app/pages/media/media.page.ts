import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { GeneralService } from '../../serv/general.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
// import { YouTubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {
  ShowModal: boolean = true;
  vIDd = "";
  skeleton = true;
  urlVideo = "";
  skeletonNumbers;
  videoList=[];

  constructor(
    private youtube: YoutubeVideoPlayer,
    public GeneralService:GeneralService,
    public videoplayer:VideoPlayer,
  ) { 
    this.skeletonNumbers = Array(7).fill(0).map((x,i)=>i);
  }

  ngOnInit() {
    //this.GeneralService.whenUserInfoSet(this, 'loadPageData');
    this.loadPageData();
  }
  async loadPageData() {
		this.GeneralService.api.generalGet('getPost',{"pid":this.GeneralService.cuVars.mediaPid, "fields":"video_list"}, "GET").then(data => {
      this.skeleton = false;
      if(data["data"] && data["data"] .youtube_media){
        data["data"].youtube_media.forEach(element => {
        
          let vID = this.GeneralService.youtube_parser(element.link);
          element.id = vID;
          
          this.videoList.push(element);
        });
      }
		});
  }

  CloseModal(){
    this.ShowModal = true;
  }

  youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }

  openVideo(vID){
    // this.ShowModal = false;
    // this.vIDd = vID;
    // this.urlVideo =   `https://www.youtube.com/embed/${vID}`;
 
    this.youtube.openVideo(vID);
// this.videoplayer.play('https://www.youtube.com/watch?v=CKV7yYXaxlw').then(() => {
// console.log('video completed');
// }).catch(err => {
// console.log(err);
// });

    // console.log(vID)
  }

}
