import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child';
import { ChildrenService } from 'src/app/services/children.service';

@Component({
  selector: 'app-child-updates',
  templateUrl: './child-updates.component.html',
  styleUrls: ['./child-updates.component.css','./bootstrap.min.css','../../../../assets/css/icons.min.css','../../../../assets/css/bootstrap.min.css']
})
export class ChildUpdatesComponent implements OnInit {
  formModal:any;
  id!: string|null;
  child!:Child
   constructor(private _Activatedroute:ActivatedRoute,private cService:ChildrenService) { }
 
   ngOnInit(): void {
     this.id=this._Activatedroute.snapshot.paramMap.get("id");
     console.log(this.id);
     this.cService.getChildByID(this.id!).subscribe(data=>{
       this.child =data;
     });
   }
   openModal(){
    this.formModal.show();
     console.log("Modal function is called...");
 }
}
