import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Childneed } from 'src/app/models/childneed';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
  selector: '[app-child-need-item]',
  templateUrl: './child-need-item.component.html',
  styleUrls: ['../child-needs/child-needs.component.css']
})
export class ChildNeedItemComponent implements OnInit {
@Input()
childneed!:Childneed

@Output()
elementDeleted: EventEmitter<any> = new EventEmitter();
  constructor(private needService:NeedsService) { }

  ngOnInit(): void {
  }
  deleteChildNeed(){
    console.log("Trying") 
    this.needService.deleteChildNeed(this.childneed.ID).subscribe(data => {  
      console.log("Posted");
      console.log(data);
      this.elementDeleted.emit();//Notifies parent to reload
     
    });
   }
  
}
