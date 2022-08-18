import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildUpdate } from 'src/app/models/childupdate';
import { ChildrenService } from 'src/app/services/children.service';

@Component({
  selector: 'app-child-update-item',
  templateUrl: './child-update-item.component.html',
  styleUrls: ['./child-update-item.component.css']
})
export class ChildUpdateItemComponent implements OnInit {
  @Input()
  childUpdate!:ChildUpdate 
  @Output()
  elementDeleted: EventEmitter<any> = new EventEmitter();
  constructor(private cService:ChildrenService) { }

  ngOnInit(): void {
  }
  deleteChildNeed(){
    console.log("Trying") 
    this.cService.deleteChildUpdate(this.childUpdate.ID).subscribe(data => {  
      console.log("Posted");
      console.log(data);
      this.elementDeleted.emit();//Notifies parent to reload
     
    });
   }
}
