import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../serv/general.service';
import { NotificationService } from '../../serv/notification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  skeleton = true;
  ShowModal: boolean = true;
  userlogin = false;
  urlads: string = "#";
  msgSt='welcome';
  projects=[];
  cover:""
  popup:"";
  LastNotifi=[];
  LastTicket=[];
  generalLastNotifi=[];

  nextPayment;
  projectImage='';
  services=[];

  totalPoints;

  slideOptsServ = {
    pagination: false,
    slidesPerView: 3,
    speed: 400,
    autoplay:true
  };
skip=true;
  constructor(
    public GeneralService:GeneralService,
    public NotificationService:NotificationService
  ) { }
  async ionViewWillEnter(){
    //this.GeneralService.whenUserInfoSet(this, 'loadPageDataUsers');
    this.loadPageData();
    if(localStorage.getItem("skip")=="true")this.skip=false;
    this.GeneralService.cuVars.cUser.subscribe( (data) => {
    
      if(data !== 'noData'){
        this.loadPageDataUsers();     
      }
      else {
        this.userlogin = false;
      }
    }); 
  }
  ngOnInit() {
   
    this.loadPageDataModel()
    let daa =  setInterval(()=>{

      if(this.popup['cover']){
        this.ShowModal = false;
        // this.cover  = this.popup['cover'];
        }else{
          this.ShowModal = true;
        }

     } , 4000)
    
     setInterval(()=>{

      clearInterval(daa);

     } , 4000)
    
  
  }

  async loadPageDataUsers() {
      this.userlogin = true;
      this.getPoints_get_total();
      this.clinte_h_info();
      this.getTicket();
      this.getNotifications();

      this.GeneralService.cuVars.totalPoints.subscribe( (data) => {
        this.totalPoints= data;
      });
  }

  async loadPageDataModel() {
		this.GeneralService.api.generalGet('getPost',{"pid":21823}, "GET").then(data => {
      this.skeleton = false;
     if(data["data"]){
        this.popup = data["data"];
        if(this.popup['cover']){
       

 const str = this.popup['content'];

const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;

const match = regex.exec(str);

if (match !== null) {
  const url = match[2];
  console.log(url);
  this.urlads = url;
}

        this.cover  = this.popup['cover'];
        }else{
          // this.ShowModal = true;
        }
        // if(){
        //   let url = data['data'].cover;
        // }
        // console.log(this.popup['cover'])

        console.log(this.popup)
      }
		});
  }

  async loadPageData() {
 
    this.getServices();
    this.getNotifications();
    this.getRealEstate();
  }

  async getPoints_get_total(){
    //GET Total points
    this.GeneralService.api.generalGet('points_get_total', {}, "GET").then(data => {
      if(data["data"][0]){
        let nextV = (data["data"] > 0 ) ? this.GeneralService.kFormatter( data["data"] ) : {'s':0, 'p':0, 'pfx':''}; 
        this.GeneralService.cuVars.totalPoints.next( nextV );
        //this.totalPoints = this.GeneralService.kFormatter( data["data"] );
        
      }
    });
  }

  async clinte_h_info() {
    //GET Clinte global info
    this.GeneralService.api.generalGet('clinte_h_info', {}, "GET").then(data => {
      if(data["data"]){
        
        if(data["data"].next_payment_date) {
          this.nextPayment = this.GeneralService.dateFromYMD(data["data"].next_payment_date, 'object');
        }

        if(data["data"].project_prm_images) {
          this.projectImage = data["data"].project_prm_images[0];
        }
        else {
          this.projectImage = 'empty';
        }
        
      }
    });
  }

  
 async getServices (){
  await this.GeneralService.api.generalGet('getPosts', {'post_type':'ds1_directory'}, "GET").then(data => {
    this.slideOptsServ = {
      pagination: false,
      slidesPerView: 3,
      speed: 400,
      autoplay:true
    }
    this.skeleton = false;
    if(data["data"]){
      data["data"].forEach(element => {
        
        let vX = 'title_'+this.GeneralService.cuVars.cLang.value;
        element.title=(element[vX])? element[vX] : element.title;

        this.services.push(element);
      });
    }
  });

}
  NotificationsTicketMearge(){
    this.generalLastNotifi = [];
    this.generalLastNotifi = this.generalLastNotifi.concat(this.LastNotifi);
    this.generalLastNotifi = this.generalLastNotifi.concat(this.LastTicket);
    this.sortPostsByDate('generalLastNotifi');
  }

  getNotifications() {
    //Get Notifications
    this.GeneralService.api.generalGet('getPosts', {'post_type':'ds1_notifications', 'posts_per_page':8}, "GET").then(data => {
      this.skeleton = false;
      if(data["data"]){
        this.LastNotifi = data["data"];
        this.NotificationsTicketMearge();
      }
    });
  }

  getTicket() {
    this.GeneralService.api.generalGet('getPosts', {'post_type':'ds1_tickets', 'posts_per_page':8}, "GET").then(data => {
      if(data["data"]){
        //console.log( data["data"] );
        this.LastTicket = data["data"];
        this.NotificationsTicketMearge();
      }
    });
  }

  getRealEstate(){
     //Get projects
     this.GeneralService.api.generalGet('getPosts', {'post_type':'real-estate', 'posts_per_page':8}, "GET").then(data => {
      this.skeleton = false;
      if(data["data"]){
        data["data"].forEach(element => {
          if(element.p_state !== "sold-end"){
            this.projects.push(element);
          }
        });
        this.projects.length = (this.projects.length > 4) ? 4 : this.projects.length;
      }
     
    });
  }


  sortPostsByDate(prop, limit = 5){
    this[prop] = this[prop].sort(function(a,b){
      var aDate = new Date(a.date);
      var bDate = new Date(b.date);

      return bDate.getTime() - aDate.getTime();
    });
    this[prop] = this[prop].slice(0,limit)
  }
  
  ionViewDidEnter(){
    this.NotificationService.noti();
  }


//hossam20520
  showModel(){
   return 55;
  }
  CloseModal(){
    this.ShowModal = true;
  }
  doRefresh(event) {
    this.getNotifications();
    this.getTicket();

    this.getPoints_get_total();
    
    
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
