import { Component, OnInit } from '@angular/core';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
  selector: 'app-modal-add-child-need',
  templateUrl: './modal-add-child-need.component.html',
  styleUrls: ['./modal-add-child-need.component.css']
})
export class ModalAddChildNeedComponent implements OnInit {
  spID!: string;

  constructor(private nService:NeedsService,private cService:ChildrenService) { }

  ngOnInit(): void {
  }
  addChildNeed(details: { name: string; duedate: any; description: any; amount: any; }) {
    console.log("Add: " + details.name);
    this.cService.getSponsorShipID(localStorage.getItem("childID")!).subscribe(data => {
    this.spID = data;
     });
    let needDetails = {
      DueDate : details.duedate,
      Title : details.name,
      Description : details.description,
      isFullfilled : "false",
      orphanageID : localStorage.getItem("orphID"),
      sponsorshipID :this.spID,
      AmountReceived : "0",
      AmountNeeded : details.amount
    }
    const body = JSON.stringify(needDetails);
    console.log(body);
  
    this.nService.createChildNeed(body).subscribe(data => {
      console.log("Posted");
      console.log(data);
      alert("Need Created");
      window.location.reload();
    });
  }

}
