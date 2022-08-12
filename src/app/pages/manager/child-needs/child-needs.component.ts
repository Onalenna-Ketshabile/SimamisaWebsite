import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child';
import { ChildrenService } from 'src/app/services/children.service';
@Component({
  selector: 'app-child-needs',
  templateUrl: './child-needs.component.html',
  styleUrls: ['./child-needs.component.css','bootstrap.min.css','./../../../../assets/css/icons.min.css','../../../../assets/css/bootstrap.min.css']
})
export class ChildNeedsComponent implements OnInit {
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

}
