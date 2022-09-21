import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Proposal } from 'src/app/models/proposal';
import { NeedsService } from 'src/app/services/needs.service';
import { ProposalServiceService } from 'src/app/services/proposal-service.service';

@Component({
  selector: '[app-pickup-item]',
  templateUrl: './pickup-item.component.html',
  styleUrls: ['./pickup-item.component.css']
})
export class PickupItemComponent implements OnInit {
  proposalTitle!:string
  status ! :string
  propDate!:string
  propTime!:string
  @Input()
  proposal!:Proposal

  @Output()
elementUpdated: EventEmitter<any> = new EventEmitter();

  constructor(private proposalService: ProposalServiceService,private nService:NeedsService,private router:Router) { }

  ngOnInit(): void {
    this.setStatus();
   
      this.proposalTitle= this.proposal.itemNeed.Title;   
      this.propDate = this.proposal.PickUpTime.substring(0,10);
      this.propTime = this.proposal.PickUpTime.substring(11,16);
   
  }
  setStatus() {
    if(!this.proposal.isAccepted && !this.proposal.isFulfilled){
      this.status="Needs Action";
    }
    if(this.proposal.isAccepted && this.proposal.isFulfilled){
      this.status="Fulfilled";
    }
    if(this.proposal.isAccepted && !this.proposal.isFulfilled){
      this.status="Awaiting Collection";
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
  confirmProposal(){
    this.proposalService.confirmProposal(this.proposal.ID).subscribe(data => {  
      console.log("Posted");
      console.log(data);
      this.router.navigate(['manager/newsfeed/'+this.proposal.itemNeedID]);
      this.elementUpdated.emit();//Notifies parent to reload
      
    });
  }
  acceptProposal(){
    this.proposalService.acceptProposal(this.proposal.ID).subscribe(data => {  
      console.log("Accepted");
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
