import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';

@Component({
  selector: 'app-view-myoffers',
  templateUrl: './view-myoffers.component.html',
  styleUrls: ['./../../pages/manager/my-offers/my-offers.component.css','../../../assets/css/bootstrap.min.css','../../../assets/css/font-awesome.min.css']
})
export class ViewMyoffersComponent implements OnInit {
   
  @Input() offer!:Offer;
  
  offers?: Offer[];
  acceptOfferModal: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  openModal(){
    //this.formModal.show();
     console.log("Modal function is called...");
 }
 show():boolean{
  return localStorage.getItem('userRole')=="M";
 }
 showAcceptOfferModal():void{
   console.log("About to show a modal form.");
   this.acceptOfferModal.show();
 }
}
