import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { notification } from 'src/app/models/notification';
import { notificationAll } from 'src/app/models/notificationAll';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationsService } from 'src/app/services/notifications.service';

declare var window: any;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

LoginStatus = new BehaviorSubject<boolean>(false);
UserRole = new BehaviorSubject<String>("");
UserName!: Observable<String>;
  mybootstrapJs: HTMLScriptElement;
  myMinJs: HTMLScriptElement;
  myPluginJs: HTMLScriptElement;

  formModal:any;
  makeOfferModal: any;
  acceptOffer: any;

  sidePanelOpen = false;

  notificationNum: number = 0;
  managerNotifications!: notificationAll;
  notifications?: notification[];
  
  constructor(private authService:AuthenticationService, private notificationService: NotificationsService) {
    
    console.log("SidePanelOpen: ",this.sidePanelOpen);
    
    this.mybootstrapJs = document.createElement("script");
    this.mybootstrapJs.src = "../../../assets/js/manager-layout/bootstrap.min.js";
    document.body.appendChild(this.mybootstrapJs);

    this.myMinJs = document.createElement("script");
    this.myMinJs.src = "../../../assets/js/manager-layout/jquery.min.js";
    document.body.appendChild(this.myMinJs);

        
    this.myPluginJs = document.createElement("script");
    this.myPluginJs.src = "../../../assets/js/manager-layout/plugins.js";
    document.body.appendChild(this.myPluginJs);

    
    
    this.authService.globalStateChanged.subscribe((state)=>{
      this.LoginStatus.next(state.loggedInStatus);
      this.UserRole.next(state.userRole);
    });
    this.UserName= this.authService.currentuserName;
   }

  ngOnInit(): void {

    this.notificationService.getManagerNotificationsNum().subscribe(data=>{
 
      this.notificationNum = data;
      
      console.log("Data returned:", this.notificationNum);
    });
  }
  openNotification(){
    this.sidePanelOpen = !this.sidePanelOpen;
    console.log("SidePanelOpen: ",this.sidePanelOpen);

    if(this.sidePanelOpen){
        
    this.notificationService.getAllNotifications().subscribe(data=>{
      this.notifications = data;
                  
          
     this.notificationNum = 0;
                  
             
    });
    }
  }


  openModal(){
     this.formModal.show();
      console.log("Modal function is called...");
  }

  doSomething(){
    this.formModal.hide();
  }


}
