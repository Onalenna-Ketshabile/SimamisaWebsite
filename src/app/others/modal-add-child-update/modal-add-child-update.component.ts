import { Component, OnInit } from '@angular/core';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
  selector: 'app-modal-add-child-update',
  templateUrl: './modal-add-child-update.component.html',
  styleUrls: ['./modal-add-child-update.component.css']
})
export class ModalAddChildUpdateComponent implements OnInit {

  constructor(private needsService: NeedsService) { }

  ngOnInit(): void {
  }
  addPost(details: { name: string; duedate: any; description: any; priority: any; numNeeded: any; unitCost: any; }) {
    console.log("Add: " + details.name);
    let needDetails = {
      DueDate: details.duedate,
      DateEstablished: new Date(),
      Title: details.name,
      Description: details.description,
      PriorityRating: details.priority,
      ItemImage: "",
      NumberNeeded: details.numNeeded,
      UnitCost: details.unitCost,
      orphanageID: localStorage.getItem("orphID"),
    }
    const body = JSON.stringify(needDetails);
    console.log(body);
  //Make Post(uPDATE)
    this.needsService.postNeed(body).subscribe(data => {
      console.log("Posted");
      console.log(data);
      //Close modal and show the newsfeed
      window.location.reload();
    });
  }

}
