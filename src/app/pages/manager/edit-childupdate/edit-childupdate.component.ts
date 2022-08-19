import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChildUpdate } from 'src/app/models/childupdate';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-childupdate',
  templateUrl: './edit-childupdate.component.html',
  styleUrls: ['./edit-childupdate.component.css']
})
export class EditChildupdateComponent implements OnInit {
  @ViewChild('editUpdateForm') editChildUpdateForm!: NgForm;
  spID: any;
  id: any;
  childUpdate!: ChildUpdate
  constructor(private nService: NeedsService,
    private cService: ChildrenService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
    // this.childNeed = this.nService.getChildUpdateByID(this.id);
    this.childUpdate = {
      ID: parseInt(this.id),
      Title: "Fist Day at School",
      Description: "tEMPORATY childUpdate",
      sponsorshipID: 0,
      PostDate:"",
      PostImage:"",
    }
    setTimeout(() => {
      this.editChildUpdateForm.controls["name"].setValue(this.childUpdate.Title);
      this.editChildUpdateForm.controls["description"].setValue(this.childUpdate.Description);
    });
  }
  editChildUpdate(details: { name: string; description: any; }) {
    //Check if I need the to send sponsor ID as well
    console.log("Add: " + details.name);
    this.cService.getSponsorShipID(localStorage.getItem("childID")!).subscribe(data => {
      this.spID = data;
    });
    let needDetails = {
      Title: details.name,
      Description: details.description,
      sponsorshipID: this.spID,//???
      PostImage:new Date()//???
    }
    const body = JSON.stringify(needDetails);
    console.log(body);

    this.cService.editChildUpdate(body).subscribe(data => {
      console.log("Edited");
      console.log(data);
      this.router.navigate(['manager/child-updates']);
    });
  }
  back() {
    this.location.back();
  }
}
