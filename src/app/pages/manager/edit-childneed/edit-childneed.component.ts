import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Childneed } from 'src/app/models/childneed';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';
import { Location } from '@angular/common';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
@Component({
  selector: 'app-edit-childneed',
  templateUrl: './edit-childneed.component.html',
  styleUrls: ['./edit-childneed.component.css','../../../../assets/css/modal.css']
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
    private location: Location,
    private dataToModals: DataToModalsService) { }



  ngOnInit(): void {
  

    this.dataToModals.childNeedDatasent$.subscribe(data=>{
      this.childNeed = data;
      console.log("Data has arrived.");
      console.log(this.childNeed);
      setTimeout(()=>{
        console.log("BreakPoint");
        this.editChildNeedForm.controls["name"].setValue(this.childNeed.Title);
        this.editChildNeedForm.controls["duedate"].setValue(this.childNeed.DueDate.slice(0,10));
        this.editChildNeedForm.controls["unitCost"].setValue(this.childNeed.AmountNeeded);
        this.editChildNeedForm.controls["description"].setValue(this.childNeed.Description);
      })
      
    })
    // this.nService.getChildNeedByID(this.id).subscribe((data)=>{

    // })

  }
  editChildNeed(details: { name: string; description: any; unitCost: any; }) {
    //Check if I need the to send sponsor ID as well
    console.log("Add: " + details.name);
    this.id = this.childNeed.ID;
    let needDetails = {
      id: this.id,
      Title: details.name,
      Description: details.description,
      AmountNeeded: details.unitCost,

    }
    const body = JSON.stringify(needDetails);
    console.log(body);

    this.nService.editChildNeed(body).subscribe(data => {
      console.log("Edited");
      console.log(data);
       window.location.reload();
    });
  }
  back() {
    this.location.back();
  }
}
