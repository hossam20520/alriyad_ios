import { Component, OnInit, Input } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { GeneralService } from '../../serv/general.service';


@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.page.html',
  styleUrls: ['./custom-modal.page.scss'],
})
export class CustomModalPage implements OnInit {
  @Input('prevData')prevData:any;
  
  slideOpts = {
    zoom:true,
    slidesPerView: 1,
    initialSlide: 1,
  };

  constructor(
    private platform: Platform,
    public GeneralService : GeneralService,
    private modalCtr: ModalController
  ) { }

  ngOnInit() {

    /*this.platform.backButton.subscribe(()=>{
      this.GeneralService.presentAlert("dfsfsdfsdfsdfsdfsdfdfsd back")
    });*/

  }

  close(){
    this.modalCtr.dismiss();
  }

}
