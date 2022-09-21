import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
  selector: 'app-modal-add-child-update',
  templateUrl: './modal-add-child-update.component.html',
  styleUrls: ['./modal-add-child-update.component.css','../../../assets/css/modal.css']
})
export class ModalAddChildUpdateComponent implements OnInit {
  spID: any;
  @Output()
  elementAdded: EventEmitter<any> = new EventEmitter();
  constructor(private cService: ChildrenService,private router:Router) { }

  ngOnInit(): void {
    this.cService.getSponsorShipID(localStorage.getItem("childID")!).subscribe(data => {
      this.spID = data;
       });
  }
  addPost(details: { name: string; duedate: any; description: any; priority: any; numNeeded: any; unitCost: any; }) {
    console.log("Add: " + details.name);
   
    let needDetails = {
      Title: details.name,
      Description: details.description,
      PostImage: "",
      sponsorshipID :this.spID,
    }
    const body = JSON.stringify(needDetails);
    
  //Make Post(uPDATE)
    this.cService.createChildUpdate(body).subscribe(data => {
      console.log("Posted");
      console.log(data);
      this.elementAdded.emit();//Notifies parent to reload
    });
  }

}
