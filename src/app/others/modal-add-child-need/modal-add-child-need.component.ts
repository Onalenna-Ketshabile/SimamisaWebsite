import { Component, OnInit } from '@angular/core';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
  selector: 'app-modal-add-child-need',
  templateUrl: './modal-add-child-need.component.html',
  styleUrls: ['./modal-add-child-need.component.css']
})
export class ModalAddChildNeedComponent implements OnInit {

  constructor(private nService:NeedsService) { }

  ngOnInit(): void {
  }
  addChildNeed(details: { name: string; description: any; amount: any; }) {
    console.log("Add: " + details.name);
    let needDetails = {
      Title: details.name,
      Description: details.description,
      isFullfilled:0,
      AmountNeeded:details.amount
     //sponsorship id?
    }
    const body = JSON.stringify(needDetails);
    console.log(body);
  
    this.nService.createChildNeed(body).subscribe(data => {
      console.log("Posted");
      console.log(data);
      //Close modal and show the newsfeed
      window.location.reload();
    });
  }

}
