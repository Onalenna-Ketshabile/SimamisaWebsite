import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { notification } from 'src/app/models/notification';
import { notificationAll } from 'src/app/models/notificationAll';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { LoaderService } from '../../../services/loader.service';

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

  notificationNum: number = 1;
  managerNotifications!: notificationAll;
  notifications?: notification[];

  newNotifications?: notification[];
  oldNotifications?: notification[];
  numNewNotifications:number=0;
  maxNotificatios = 25;
  maxOffset = 0;

  
  constructor(private authService:AuthenticationService, private notificationService: NotificationsService, public loaderService:LoaderService) {
    
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
      this.newNotifications = data.new;
      this.oldNotifications = data.old;
      //this.numNewNotifications = this.newNotifications?.length;

      if(this.newNotifications?.length){
        console.log("New Notification  Defined.");
         // this.numNewNotifications = 10; //Max
         if(this.newNotifications.length> this.maxNotificatios){
          this.numNewNotifications = this.maxNotificatios;
         }
         this.numNewNotifications = this.newNotifications.length;

         this.maxOffset = this.maxNotificatios - this.numNewNotifications;
         if(this.maxOffset<0){
          this.maxOffset = 0;
         }
      }
      else{
        
        console.log("No New Notifications .");
        this.numNewNotifications = 0;
        console.log("num", this.numNewNotifications);
      }

      console.log("new",data.new);
      console.log("old",data.old);
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
