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
   this.cService.getChildUpdateByID(this.id).subscribe((data)=>{
      this.childUpdate = data;
      this.editChildUpdateForm.controls["name"].setValue(this.childUpdate.Title);
      this.editChildUpdateForm.controls["description"].setValue(this.childUpdate.Description);
      console.log(this.childUpdate);
    })
   
  }
  editChildUpdate(details: { name: string; description: any; }) {
    let needDetails = {
      Title: details.name,
      Description: details.description,
      PostImage:new Date(),
      id:this.id
    }
    const body = JSON.stringify(needDetails);
    console.log(body);

    this.cService.editChildUpdate(body).subscribe(data => {
      console.log("Edited");
      console.log(data);
      this.router.navigate(['manager/child-updates/'+localStorage.getItem("childID")]);
    });
  }
  back() {
    this.location.back();
  }
}
