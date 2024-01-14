import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GeneralService } from '../../serv/general.service';

/*
import { Plugins } from "@capacitor/core";
const  { Contacts } = Plugins;
*/
import { isPlatform } from '@ionic/core';

import { Contacts } from "@capacitor-community/contacts";

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.page.html',
  styleUrls: ['./add-friends.page.scss'],
})
export class AddFriendsPage implements OnInit {
  skeleton = true;
  skeletonNumbers;

  selectedFriends=[];
  contactsFound =[];
  constructor(
    public GeneralService:GeneralService,
    private router: Router,
  ) { 
    this.skeletonNumbers = Array(5).fill(0).map((x,i)=>i);
    /*
    this.contactsFound = [
      {
        displayName:'Ahmed',
        phoneNumbers:[{value:"010001115555"}, {value:"042022222222"}],
      },
      {
        displayName:'محمد سمير',
        phoneNumbers:[{value:"58758421"}],
      },
      {
        displayName:'Test LLL',
        phoneNumbers:[{value:"00011100011"}],
      },
      {
        displayName:'محمود سيد',
        phoneNumbers:[{value:"05435685"}],
      },
      {
        displayName:'خالد',
        phoneNumbers:[{value:"05435685"}],
      },
      {
        displayName:'Test LLL2',
        phoneNumbers:[{value:"00011100022"}],
      },
    ];
    */
  }

  ngOnInit() {
    this.loadContacts();
  }

  async loadContacts(){
    if(isPlatform("android")){
      let permission = await Contacts.getPermissions();
      if(!permission.granted) {
        this.GeneralService.presentAlert('There is no permission to use the contact list');
        return;
      }
    }
    Contacts.getContacts().then(result => {
      this.contactsFound = result.contacts;
      this.skeleton = false;
    });
  }

  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;
    
    this.contactsFound = this.contactsFound.filter(item => {
      if(val.trim()){
        const shouldShow = item.displayName && item.displayName.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
        const shouldShowPhone = item.phoneNumbers && item.phoneNumbers.toString().indexOf(val.trim()) > -1;
        item.hide = (shouldShow || shouldShowPhone) ? false : true ;
      }
      else {
        item.hide = false;
      }
      return true;
    });     
    
  }

  selectFriend(e, data){
		if (e.detail.checked == true) {
			
			this.selectedFriends.push(data);
		  } else {
		   let newArray = this.selectedFriends.filter(function(el) {
			 return el.displayName !== data.displayName;
		  });
		   this.selectedFriends = newArray;
		 }

	}


  async startSendData() {
    this.GeneralService.loadingPanel();
    await this.GeneralService.api.generalGet('points_add_friends', {friends:this.selectedFriends}).then(
      (data) => {
        this.GeneralService.loadingPanel('close');
        var moreMsg='';

        if(data["data"]?.errors) {
          for (const err of data["data"].errors) {
            moreMsg = moreMsg + "<p> " + err.error + " <span class='d-block'>" + err.data_prev +'</span></p>';
          }
        } 

        //If msg !
        if(data["data"] && data["data"].msg) {
          this.GeneralService.presentAlert(data["data"].msg + moreMsg);
        }
        
        if(data["data"].st == 'done') {
          // go to previous page
          this.router.navigate(['points'])
        }


    },
    (err) => {
      this.GeneralService.loadingPanel('close');
    }

    );
  }
}
