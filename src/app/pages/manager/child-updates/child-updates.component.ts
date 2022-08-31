import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child';
import { ChildUpdate } from 'src/app/models/childupdate';
import { ChildrenService } from 'src/app/services/children.service';

@Component({
  selector: 'app-child-updates',
  templateUrl: './child-updates.component.html',
  styleUrls: ['./child-updates.component.css', './bootstrap.min.css', '../../../../assets/css/icons.min.css', '../../../../assets/css/bootstrap.min.css']
})
export class ChildUpdatesComponent implements OnInit {
  formModal: any;
  id!: string | null;
  child!: Child;
  childupdates!: ChildUpdate[];
  name! :string ;
  
  constructor(private _Activatedroute: ActivatedRoute, private cService: ChildrenService) { }

  ngOnInit(): void {
    this.getChildUpdates();
  }

  getChildUpdates() {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
   
    localStorage.setItem("childID", this.id!);
    this.cService.getChildByID(this.id!).subscribe(data => {
      this.child = data;
      this.name = this.child.Nickname;
    });
    this.cService.getChildUpdatesByID(this.id!).subscribe(data => {
      this.childupdates = data;
     
    });

  }
  openModal() {
    //this.formModal.show();
    console.log("Modal function is called...");
  }
  onElementDeleted(element: any) {
    console.log("Deleted child need" + element);
    this.getChildUpdates();
    console.log(this.childupdates);
  }

  onElementAdded(element:any){
    console.log("added child need" + element);
  
    this.getChildUpdates();
    document.getElementById("close-add-update")!.click();
    console.log(this.childupdates);
  }
}
