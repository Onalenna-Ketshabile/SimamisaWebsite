import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sponsorRequest } from 'src/app/models/sponsorRequest';
import {MeetingService} from 'src/app/services/meeting.service'
import {DataToModalsService} from 'src/app/services/data-to-modals.service'
import * as e from 'express';
@Component({
  selector: '[app-sponsor-request-item]',
  templateUrl: './sponsor-request-item.component.html',
  styleUrls: ['./sponsor-request-item.component.css']
})
export class SponsorRequestItemComponent implements OnInit {
  @Input()
  sponsorRequest!: sponsorRequest;
 

  docView:string ="";
  status ! :string;
  needsAction:boolean = true;
@Output()
elementUpdated: EventEmitter<any> = new EventEmitter();

  constructor(private mService:MeetingService,
    private dataToModals:DataToModalsService) { }

  ngOnInit(): void {
    this.setStatus();
  }
  setStatus() {
    if(!this.sponsorRequest.isAccepted && !this.sponsorRequest.isRejected){
      this.status="Set Up Meeting";
    }
    if(this.sponsorRequest.isAccepted && this.sponsorRequest.isRejected){
      this.status="Approve";
    }
    if(this.sponsorRequest.isAccepted && !this.sponsorRequest.isRejected){
      this.status="Accepted";
      this.needsAction=false;
    }
    if(!this.sponsorRequest.isAccepted && this.sponsorRequest.isRejected){
      this.status="Rejected";
      this.needsAction=false;
    }
   
  }
  openModal(){
    console.log(this.docView);
  }
  setInc(){
    console.log(this.sponsorRequest)
    let url = this.sponsorRequest.documents[0].DocUrl.split("split")[1];
    console.log(url)
    this.dataToModals.setpdfURL( url);
    
  }
   setID(){
    console.log(this.sponsorRequest)
    let url = this.sponsorRequest.documents[0].DocUrl.split("split")[0];
    console.log(url)
    this.dataToModals.setpdfURL( url);
    
   }

   acceptSponsor(){
    console.log("trying",this.sponsorRequest.ID);
      this.mService.acceptSponsor(this.sponsorRequest.ID).subscribe((data:any) => {  
        console.log(data);
        window.location.reload();
       // this.elementUpdated.emit();//Notifies parent to reload
      
      });
   }
   rejectSponsor(){
    this.mService.rejectSponsor(this.sponsorRequest.ID).subscribe((data:any) => {  
      console.log(data);
      window.location.reload();
      //this.elementUpdated.emit();//Notifies parent to reload
    
    });
   }
   setupMeeting(){
    this.dataToModals.setRequest(this.sponsorRequest);
  // this.mService.setupMeeting(JSON.stringify(body)).subscribe((data)=>{
  //   console.log(data);
  //   this.elementUpdated.emit();
  // })
   }
}
