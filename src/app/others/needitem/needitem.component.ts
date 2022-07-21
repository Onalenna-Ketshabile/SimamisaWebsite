import { Component, OnInit,Input } from '@angular/core';
import { Need } from 'src/app/Need';

@Component({
  selector: 'app-needitem',
  templateUrl: './needitem.component.html',
  styleUrls: []
})
export class NeeditemComponent implements OnInit {
  @Input()
  need!: Need;
  descriptionToShow:string= "";
  showReadMore:boolean=false;
  constructor() {
   
   }

  ngOnInit(): void {
    if(this.need.description.length > 100){
      this.descriptionToShow= this.need.description.slice(0,100);
      this.showReadMore=true;
   }else{
     this.descriptionToShow= this.need.description;
     this.showReadMore=false;
   }
  }
onReadMore(need: { description: string; }):void{
  this.showReadMore=false;
  this.descriptionToShow= need.description;

}

onShowless(need: { description: string; }):void{
  this.showReadMore=false;
  this.descriptionToShow= need.description.slice(0,100);
 
}
}
