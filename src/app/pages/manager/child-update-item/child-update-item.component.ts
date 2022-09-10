import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildUpdate } from 'src/app/models/childupdate';
import { ChildrenService } from 'src/app/services/children.service';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';

@Component({
  selector: '[app-child-update-item]',
  templateUrl: './child-update-item.component.html',
  styleUrls: ['./child-update-item.component.css']
})
export class ChildUpdateItemComponent implements OnInit {
  @Input()
  childUpdate!:ChildUpdate 
  @Output()
  elementDeleted: EventEmitter<any> = new EventEmitter();
  constructor(private cService:ChildrenService, private dataToModals: DataToModalsService) { }

  ngOnInit(): void {
  }
  deleteChildNeed(){
    console.log("Trying") 
    this.cService.deleteChildUpdate(this.childUpdate.ID).subscribe(data => {  
      console.log(this.childUpdate.ID);
      console.log(data);
      this.elementDeleted.emit();//Notifies parent to reload
     
    });
   }
   editChildUpdate(){
      this.dataToModals.setChildUpdateDetails(this.childUpdate);
   }
}
