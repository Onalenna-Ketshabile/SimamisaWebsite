import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
  selector: 'app-modal-add-child-need',
  templateUrl: './modal-add-child-need.component.html',
  styleUrls: ['./modal-add-child-need.component.css','../../../assets/css/modal.css']
})
export class ModalAddChildNeedComponent implements OnInit {
  spID!: string;
  @Output()
  elementAdded: EventEmitter<any> = new EventEmitter();
  constructor(private nService:NeedsService,private cService:ChildrenService,private router:Router) { }

  ngOnInit(): void {
    this.cService.getSponsorShipID(localStorage.getItem("childID")!).subscribe(data => {
      this.spID = data;
    });
  }
  addChildNeed(details: { name: string; duedate: any; description: any; unitCost: any; }) {
  
    let needDetails = {
    //  DueDate : details.duedate,
      Title : details.name,
      Description : details.description,
      isFullfilled : "false",
      orphanageID : localStorage.getItem("orphID"),
      sponsorshipID :this.spID,
      AmountReceived : "0",
      AmountNeeded : details.unitCost
    }
    console.log("Sponsorship ID: ", this.spID);
    const body = JSON.stringify(needDetails);
    console.log(body);
  
    this.nService.createChildNeed(body).subscribe(data => {
      console.log("Posted");
      console.log(data);
      this.elementAdded.emit();//Notifies parent to reload
    });
  }

}
