import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Need } from 'src/app/models/need';
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
  needImage!: SafeUrl;
  progress!:number;
  orphName:string="";
  date!: string;
  constructor(private sanitizer: DomSanitizer,) {

  }

  async ngOnInit(): Promise<void> {
    //progress
    let num =((this.need.AmountReceived/this.need.AmountNeed)*100);
   this.progress= Math.round( num * 100 + Number.EPSILON ) / 100;
   //date
    this.date = this.need.DateEstablished.slice(0,10);
   

 
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
}
function async(ItemImage: any) {
  throw new Error('Function not implemented.');
}

