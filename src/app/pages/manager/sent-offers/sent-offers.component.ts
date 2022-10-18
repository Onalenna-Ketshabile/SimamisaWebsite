import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { OfferItem } from 'src/app/models/offer-item';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-sent-offers',
  templateUrl: './sent-offers.component.html',
  styleUrls: ['./../../../pages/manager/my-offers/my-offers.component.css','../../../../assets/css/bootstrap.min.css','../../../../assets/css/font-awesome.min.css']
})
export class SentOffersComponent implements OnInit {

  @Input() offer!:OfferItem;
  
  
  acceptOfferModal: any;


  constructor(private dataToModals: DataToModalsService,private offersService: OffersService) { }

  ngOnInit(): void {
    
  }
  
  openModal(){
    //this.formModal.show();
     console.log("Modal function is called...");
 }

 getStatus(){
  //Not Taken
  
  if(!this.offer.isRejected && (this.offer.isAccepted == '0')){
    return 'Awaiting Action'
  }

  if(this.offer.isRejected &&  (this.offer.isAccepted == '0')){
    return 'Rejected'
  }
  if(this.offer.isRejected && (this.offer.isAccepted == '1')){
    return 'Confirm'
  }
  if(!this.offer.isRejected && (this.offer.isAccepted == '1') ){
    return 'Accepted'
  }
  return ""
 }
 isAwaiting(){
return this.getStatus()=="Awaiting Action"
 }
 isReject(){
return this.getStatus() =="Rejected"
 }
 isConfirm(){
return this.getStatus()=="Confirm"
 }
 isAccepted(){
  return this.getStatus()=="Accepted"
 }
 show():boolean{
  return localStorage.getItem('userRole')=="M";
 }
 confirm(){
this.offersService.confirmOffer(this.offer.ReceivingPartner.toString(),this.offer.ID).subscribe((data)=>{
  console.log(data);
  window.location.reload();
})

 }
//  selected(){
//    console.log('Selected: ' + offer.Title+ "||| ID: " + offer.ID);
//    this.dataToModals.setOfferDetails(offer);
//  }

}
