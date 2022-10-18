import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { OfferItem } from 'src/app/models/offer-item';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { LoaderService } from 'src/app/services/loader.service';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css','../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/font-awesome.min.css']
})
export class MyOffersComponent implements OnInit {
  rec_offers?: Offer[];
  sent_offers?: OfferItem[];
  noData:boolean=false;
  isLoading = false;
  loadingHandler = new LoadingHandler();
  bsPickUp = 'inset 1px 2px 5px #777';
  bsDropOff = 'unset'
  btnPickUp = '#ed7226';
  btnDropOff = '#FF7B29';
  public activeLayout = "received"
  constructor(private offersService: OffersService,public loaderService:LoaderService) { }

  ngOnInit(): void {
    this.loadingHandler.start();
    this.loaderService.isLoading.subscribe((data)=>{
      this.isLoading = data;
    })
    this.offersService.getMyOffer().subscribe(data=>{
      this.rec_offers =data;
      // if(data.length == 0){
      //   this.noData = this.nothingReturned();}
    });
    this.offersService.getSentOffers().subscribe(data=>{
      this.sent_offers =data;
      console.log("Sent Offers",data);
      // if(data.length == 0){
      //   this.noData = this.nothingReturned();}
    });
   
  }



  nothingRecReturned(): boolean{
 
    if(this.rec_offers?.length == 0 && !this.isLoading){
     return true;
    }
    else if(this.rec_offers?.length == undefined && !this.isLoading ){
      return true;
     }
    else{
     return false;
    }
 }
 nothingSentReturned(): boolean{
 
  if(this.sent_offers?.length == 0 && !this.isLoading){
   return true;
  }
  else if(this.sent_offers?.length == undefined && !this.isLoading ){
    return true;
   }
  else{
   return false;
  }
}
 pickUpFocused() {
  this.btnPickUp = '#ed7226';
  this.bsPickUp = 'inset 1px 2px 5px #777';
  this.btnDropOff = '#FF7B29';
  this.bsDropOff = 'unset';
}
dropOffFocused() {
  this.btnDropOff = '#ed7226';
  this.bsDropOff = 'inset 1px 2px 5px #777';
  this.btnPickUp = '#FF7B29';
  this.bsPickUp = 'unset';
}
 showReceived(): void {
  this.pickUpFocused();
  this.activeLayout = "received";//Get the pickups
  this.updateFilter();


}

 showSent(): void {
  this.loadingHandler.start();
  this.dropOffFocused();
  this.activeLayout = "sent";//Get the dropoffs
  this.updateFilter();
}
updateFilter(): void {

  // if (this.activeLayout == 'received') {
  //   this.proposals = this.allProps!.filter(prop => (prop.PickUpPlace != 'Orphanage' && prop.ProposalType == 'ITEM'))
  // }
  // if (this.activeLayout == 'sent') {
  //   this.proposals = this.allProps!.filter(prop => (prop.PickUpPlace == 'Orphanage' && prop.ProposalType == 'ITEM'))
  // }
  // console.log(this.proposals);
}
}
