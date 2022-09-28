import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child';
import { Orphanage } from 'src/app/models/orphanage';
import { ChildrenService } from 'src/app/services/children.service';
import { MeetingService } from 'src/app/services/meeting.service';
import { OrphanageService } from 'src/app/services/orphanage.service';

declare var window: any;

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.css', '../../../assets/css/font-awesome.min.css']
})
export class ChildPageComponent implements OnInit {

  formModal: any;

  child?: Child;
  orphanage?: Orphanage;
  interests?: string[]
  age?: string;
  orphName?:string;
  constructor(private route: ActivatedRoute, private children_service: ChildrenService, private orphanage_service: OrphanageService,private meetingService: MeetingService) { }

  ngOnInit(): void {

    console.log("Page Loaded");
    console.log("o_id:" + this.route.snapshot.params['o_id'] + " c_id: " + this.route.snapshot.params['c_id']);

    //Get the child

    this.children_service.getChildByID(this.route.snapshot.params['c_id']).subscribe(data => {
      console.log("OBject:", data);
      console.log("INterest:", data.ChildInterest);
      this.child = data;
       this.orphName=data.orphanage.OrphanageName;
      this.interests = this.child.ChildInterest.split(",");
     this.age = this.getAge(this.child.DOB).toString();
    });

    //Get the Orphanage
    this.orphanage_service.getOrphanageByID(this.route.snapshot.params['o_id']).subscribe(data => {
      this.orphanage = data;
    });
    let val :number= 0;
    val = this.route.snapshot.params['c_id'];
    localStorage.setItem("ChildID",val.toString());
    // this.formModal = new window.boostrap.Modal(
    //   document.getElementById("custom-modal")
    // );

  }

  getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  openModal() {
   


    // if (localStorage.getItem("userRole") == null && localStorage.getItem("userName") == null) {
    //   //Do Nothing
    // } else {
    //   console.log("I have been clicked");
    //   let body = {
    //     registeredUserID: localStorage.getItem("userID"),
    //     childID: this.child?.ID
    //   };
     
    //   this.meetingService.makeSponsor(JSON.stringify(body)).subscribe(data => {
    //     console.log("Made Sponsor",data);
    //     localStorage.removeItem("ChildID");
    //   });
    //   //Make person a sponsor
    // }
    
  }

}
