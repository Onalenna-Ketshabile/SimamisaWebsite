import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child';
import { Childneed } from 'src/app/models/childneed';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';
@Component({
  selector: 'app-child-needs',
  templateUrl: './child-needs.component.html',
  styleUrls: ['./child-needs.component.css', 'bootstrap.min.css', './../../../../assets/css/icons.min.css', '../../../../assets/css/bootstrap.min.css']
})
export class ChildNeedsComponent implements OnInit {
  id!: string | null;
  child!: Child
  childneeds!: Childneed[]
  formModal: any
  constructor(private _Activatedroute: ActivatedRoute, private cService: ChildrenService, private nService: NeedsService) { }

  ngOnInit(): void {
    this.getChildNeeds();
    
  }

  getChildNeeds() {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);
    localStorage.setItem("childID", this.id!);
    this.cService.getChildByID(this.id!).subscribe(data => {
      this.child = data;
    });
    this.nService.getChildNeedsById(this.id!).subscribe(data => {
      this.childneeds = data;
    });
   
  }
  openModal() {
    this.formModal.show();
    console.log("Modal function is called...");
  }
  onElementDeleted(element: any) {
    console.log("Deleted child need" + element);
    this.getChildNeeds();
  }
}
