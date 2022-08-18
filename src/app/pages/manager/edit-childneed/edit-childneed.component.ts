import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Childneed } from 'src/app/models/childneed';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-childneed',
  templateUrl: './edit-childneed.component.html',
  styleUrls: ['./edit-childneed.component.css']
})
export class EditChildneedComponent implements OnInit {
  @ViewChild('editChildNeedForm') editChildNeedForm!: NgForm;
  spID: any;
  id: any;
  childNeed!: Childneed
  constructor(private nService: NeedsService,
    private cService: ChildrenService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
    // this.childNeed = this.nService.getChildNeedByID(this.id);
    this.childNeed = {
      ID: parseInt(this.id),
      Title: "Glasses",
      DueDate: "Sunday",
      AmountNeeded: 12,
      AmountReceived: 0,
      Description: "tEMPORATY childneed",
      isFullfilled: 0,
      sponsorshipID: 0
    }
    setTimeout(() => {
      this.editChildNeedForm.controls["name"].setValue(this.childNeed.Title);
      this.editChildNeedForm.controls["duedate"].setValue(this.childNeed.DueDate);
      this.editChildNeedForm.controls["amount"].setValue(this.childNeed.AmountNeeded);
      this.editChildNeedForm.controls["description"].setValue(this.childNeed.Description);
    });
  }
  editChildNeed(details: { name: string; description: any; amount: any; }) {
    //Check if I need the to send sponsor ID as well
    console.log("Add: " + details.name);
    this.cService.getSponsorShipID(localStorage.getItem("childID")!).subscribe(data => {
      this.spID = data;
    });
    let needDetails = {
      Title: details.name,
      Description: details.description,
      isFullfilled: "false",//??
      orphanageID: localStorage.getItem("orphID"),//??
      sponsorshipID: this.spID,//???
      AmountReceived: "0",
      AmountNeeded: details.amount
    }
    const body = JSON.stringify(needDetails);
    console.log(body);

    this.nService.editChildNeed(body).subscribe(data => {
      console.log("Edited");
      console.log(data);
      this.router.navigate(['manager/child-needs']);
    });
  }
  back() {
    this.location.back();
  }
}
