import { Component, OnInit } from '@angular/core';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
  selector: 'app-modal-add-child-update',
  templateUrl: './modal-add-child-update.component.html',
  styleUrls: ['./modal-add-child-update.component.css']
})
export class ModalAddChildUpdateComponent implements OnInit {
  spID: any;

  constructor(private cService: ChildrenService) { }

  ngOnInit(): void {
  }
  addPost(details: { name: string; duedate: any; description: any; priority: any; numNeeded: any; unitCost: any; }) {
    console.log("Add: " + details.name);
    this.cService.getSponsorShipID(localStorage.getItem("childID")!).subscribe(data => {
    this.spID = data;
     });
    let needDetails = {
      Title: details.name,
      Description: details.description,
      PostImage: "",
      sponsorshipID :this.spID,
    }
    const body = JSON.stringify(needDetails);
    console.log(body);
  //Make Post(uPDATE)
    this.cService.createChildUpdate(body).subscribe(data => {
      console.log("Posted");
      console.log(data);
      //Close modal and show the newsfeed
      window.location.reload();
    });
  }

}
