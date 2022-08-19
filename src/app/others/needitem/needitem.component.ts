import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Need } from 'src/app/models/need';
import { NeedsService } from 'src/app/services/needs.service';
import { OrphanageService } from 'src/app/services/orphanage.service';
@Component({
  selector: 'app-needitem',
  templateUrl: './needitem.component.html',
  styleUrls: ['./needitem.component.css']
})
export class NeeditemComponent implements OnInit {
  @Input()
  need!: Need;
  @Output()
  elementDeleted: EventEmitter<any> = new EventEmitter();
  descriptionToShow: string = "";
  showReadMore: boolean = false;
  showShowLess:boolean= false;
  progress!:number;
  orphName?:string="";
  date!: string;
  formModal: any;
  constructor(private orphService:OrphanageService,private needService:NeedsService) {

  }

   ngOnInit():void {

    let num =((this.need.AmountReceived/this.need.AmountNeeded)*100);
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
  isSponsor=()=>{
    return localStorage.getItem("userRole")=="M";
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
    localStorage.setItem("needID",this.need.ID.toString());
    localStorage.setItem("needAmount",this.need.AmountNeeded.toString());
    this.formModal.show();
     console.log("Modal function is called...");
 }
 deleteNeed(){
  console.log("Trying")

  this.needService.deleteNeed(this.need.ID).subscribe(data => {  
    console.log("Posted");
    console.log(data);
    this.elementDeleted.emit();//Notifies parent to reload
   
  });
 }

}

