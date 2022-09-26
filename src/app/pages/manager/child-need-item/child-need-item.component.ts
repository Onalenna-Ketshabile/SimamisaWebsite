import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Childneed } from 'src/app/models/childneed';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
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
loadingHandler = new LoadingHandler();
  constructor(private needService:NeedsService,private dataToModals: DataToModalsService) { }

  ngOnInit(): void {
  }
  deleteChildNeed(){
    console.log("Trying") 
    this.loadingHandler.start();
    this.needService.deleteChildNeed(this.childneed.ID).subscribe(data => {  
      console.log("Posted");
      console.log(data);
      this.elementDeleted.emit();//Notifies parent to reload
      this.loadingHandler.finish(); 
    });
   }
   editChildNeed(){
     this.dataToModals.setChildNeedDetails(this.childneed);
   }
  
}
