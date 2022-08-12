import { Component, OnInit, Input } from '@angular/core';
import { Need } from 'src/app/models/need';
import { OrphanageService } from 'src/app/services/orphanage.service';
@Component({
  selector: 'app-needitem',
  templateUrl: './needitem.component.html',
  styleUrls: ['./needitem.component.css']
})
export class NeeditemComponent implements OnInit {
  @Input()
  need!: Need;
  descriptionToShow: string = "";
  showReadMore: boolean = false;
  showShowLess:boolean= false;
  progress!:number;
  orphName?:string="";
  date!: string;
  formModal: any;
  constructor(private orphService:OrphanageService) {

  }

   ngOnInit():void {
    //progress
    let num =((this.need.AmountReceived/this.need.AmountNeed)*100);
   this.progress= Math.round( num * 100 + Number.EPSILON ) / 100;
   //date
    this.date = this.need.DateEstablished.slice(0,10);
   //orphanage name

   var orph = this.orphService.getOrphanageByID(this.need.orphanageID);
   orph.subscribe((orphanage)=>{this.orphName=orphanage?.OrphanageName});
    console.log("name "+this.orphName);
    if (this.need.Description.length > 100) {
      this.descriptionToShow = this.need.Description.slice(0, 100);
      this.showReadMore = true;
    } else {
      this.descriptionToShow = this.need.Description;
      this.showReadMore = false;
      this.showShowLess = false;
    }
  }
  onReadMore(need: { Description: string; }): void {
    this.showReadMore = false;
    this.showShowLess=true;
    this.descriptionToShow = need.Description;

  }

  onShowless(need: { Description: string; }): void {
    if (need.Description.length > 100) {
      this.descriptionToShow = this.need.Description.slice(0, 100);
      this.showReadMore = true;
    } else {
      this.descriptionToShow = this.need.Description;
      this.showReadMore = false;
      this.showShowLess = false;
    }
  }
  openModal(){
    this.formModal.show();
     console.log("Modal function is called...");
 }
}

