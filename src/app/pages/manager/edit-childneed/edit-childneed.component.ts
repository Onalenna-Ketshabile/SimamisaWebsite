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
  
    this.nService.getChildNeedByID(this.id).subscribe((data)=>{
      this.childNeed = data;
      console.log(this.childNeed);
      setTimeout(()=>{
        this.editChildNeedForm.controls["name"].setValue(this.childNeed.Title);
        this.editChildNeedForm.controls["duedate"].setValue(this.childNeed.DueDate.slice(0,10));
        this.editChildNeedForm.controls["amount"].setValue(this.childNeed.AmountNeeded);
        this.editChildNeedForm.controls["description"].setValue(this.childNeed.Description);
      })
      
    })

  }
  editChildNeed(details: { name: string; description: any; amount: any; }) {
    //Check if I need the to send sponsor ID as well
    console.log("Add: " + details.name);

    let needDetails = {
      id: this.id,
      Title: details.name,
      Description: details.description,
      AmountNeeded: details.amount,

    }
    const body = JSON.stringify(needDetails);
    console.log(body);

    this.nService.editChildNeed(body).subscribe(data => {
      console.log("Edited");
      console.log(data);
      this.back();
    });
  }
  back() {
    this.location.back();
  }
}
