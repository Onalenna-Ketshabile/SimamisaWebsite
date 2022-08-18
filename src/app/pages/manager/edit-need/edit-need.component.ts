import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Need } from 'src/app/models/need';
import { NeedsService } from 'src/app/services/needs.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-need',
  templateUrl: './edit-need.component.html',
  styleUrls: ['./edit-need.component.css']
})
export class EditNeedComponent implements OnInit {
  @ViewChild('editNeedForm') editNeedForm!: NgForm;
  need!: Need;
  id!: string;
  ratings: number[] = [1, 2, 3];
  constructor(private nService: NeedsService,
     private route: ActivatedRoute,
     private router:Router,
     private location: Location
     ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
    // this.need = this.nService.getNeedByID(this.id);
    this.need = {
      ID: parseInt(this.id),
      Title: "Tables",
      DateEstablished: "Today",
      DueDate: "Tomorrow",
      AmountNeeded: 12,
      AmountReceived: 0,
      Description: "tEMPORATY NEED",
      isFulfilled: 0,
      ItemImage: "",
      NumberNeeded: 12,
      NumberReceived: 0,
      orphanageID: 0,
      PriorityRating: 3,
      UnitCost: 12
    }
    setTimeout(() => {
      this.editNeedForm.controls["title"].setValue(this.need.Title);
      this.editNeedForm.controls["duedate"].setValue(this.need.DueDate);
      this.editNeedForm.controls["numNeeded"].setValue(this.need.NumberNeeded);
      this.editNeedForm.controls["unitCost"].setValue(this.need.UnitCost);
      this.editNeedForm.controls["description"].setValue(this.need.Description);
      this.editNeedForm.controls["priority"].setValue(this.need.PriorityRating);

    });
  }
  editNeed(details: { name: string; duedate: any; title: any; description: any; priority: any; numNeeded: any; unitCost: any; }) {
    console.log("Add: " + details.name);
    let needDetails = {
      ID:this.id,
      DueDate: details.duedate,
      Title: details.title,
      Description: details.description,
      PriorityRating: details.priority,
      //ItemImage: this.cardImageBase64,
      NumberNeeded: details.numNeeded,
      UnitCost: details.unitCost,
    }
    const body = JSON.stringify(needDetails);
    console.log(body);
  
    this.nService.editNeed(body).subscribe(data => {
      console.log("Edited");
      console.log(data);
      this.router.navigate(['manager/newsfeed']);
    });
    
    
  }
  back() {
    this.location.back();
  }
}
