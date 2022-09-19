import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';


declare var window: any;


@Component({
  selector: 'app-view-myoffers',
  templateUrl: './view-myoffers.component.html',
  styleUrls: ['./../../pages/manager/my-offers/my-offers.component.css','../../../assets/css/bootstrap.min.css','../../../assets/css/font-awesome.min.css']
})
export class ViewMyoffersComponent implements OnInit {
   
  @Input() offer!:Offer;
  
  offers?: Offer[];
  acceptOfferModal: any;


  constructor(private dataToModals: DataToModalsService) { }

  ngOnInit(): void {
    
  }
  
  openModal(){
    //this.formModal.show();
     console.log("Modal function is called...");
 }
 show():boolean{
  return localStorage.getItem('userRole')=="M";
 }
 selected(offer: Offer){
   console.log('Selected: ' + offer.Title+ "||| ID: " + offer.ID);
   this.dataToModals.setOfferDetails(offer);
 }
}
