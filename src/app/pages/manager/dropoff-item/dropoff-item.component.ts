import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Proposal } from 'src/app/models/proposal';
import { NeedsService } from 'src/app/services/needs.service';
import { ProposalServiceService } from 'src/app/services/proposal-service.service';

@Component({
  selector: '[app-dropoff-item]',
  templateUrl: './dropoff-item.component.html',
  styleUrls: ['./dropoff-item.component.css']
})
export class DropoffItemComponent implements OnInit {
  @Input()
  proposal!:Proposal

  @Output()
elementUpdated: EventEmitter<any> = new EventEmitter();
  proposalTitle!:string
  status ! :string
  propDate!:string
  propTime!:string

  constructor(private proposalService: ProposalServiceService,private nService:NeedsService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.proposal.DropOffTime);
      this.proposalTitle= this.proposal.itemNeed.Title
      this.setStatus();
      this.propDate = this.proposal.DropOffTime.substring(0,10);
      this.propTime = this.proposal.DropOffTime.substring(11,16);;

  }
  setStatus() {
    if(!this.proposal.isAccepted && !this.proposal.isFulfilled){
      this.status="Needs Action";
    }
    if(this.proposal.isAccepted && this.proposal.isFulfilled){
      this.status="Fulfilled";
    }
    if(this.proposal.isAccepted && !this.proposal.isFulfilled){
      this.status="Awaiting Dropoff";
    }
    if(!this.proposal.isAccepted && this.proposal.isFulfilled){
      this.status="Rejected";
    }
   
  }
  showConfirm(){
    if(this.status!=undefined && this.status.includes("Awaiting")){
      return true;
    } else{
      return false;
    }

  }
  isFulfilled(){
    
   
    if(this.status!=undefined && this.status.includes("Fulfilled")){
      return true;
    } else{
      return false;
    }
  }
  acceptProposal(){
   
   
    this.proposalService.acceptProposal(this.proposal.ID).subscribe(data => {  
      console.log("Accepted");
      this.elementUpdated.emit();//Notifies parent to reload
     
    });
  }
  confirmProposal(){
   
    this.proposalService.confirmProposal(this.proposal.ID).subscribe(data => {  
      console.log("Posted");
      console.log(data);
      this.router.navigate(['manager/newsfeed/'+this.proposal.itemNeedID]);
      this.elementUpdated.emit();//Notifies parent to reload
     
    });
  }
  
  rejectProposal(){
   
    let body ={
      id:this.proposal.ID,
      isAccepted:false,
      isFulfilled:true
    }
    this.proposalService.editProposal(JSON.stringify(body)).subscribe(data => {  
      console.log("Posted");
      console.log(data);
      this.elementUpdated.emit();//Notifies parent to reload
     
    });
  }
}


