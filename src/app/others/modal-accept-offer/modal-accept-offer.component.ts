import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-modal-accept-offer',
  templateUrl: './modal-accept-offer.component.html',
  styleUrls: ['../../../assets/css/modal.css']
})
export class ModalAcceptOfferComponent implements OnInit {

  offerID = 0;
  offer! : Offer;

  Amount = 0;
  Title = "";
  IDstr: any;

  constructor(private dataToModals: DataToModalsService, private offersService: OffersService) {    
    

 }

  ngOnInit(): void {

    console.log("Modal successfully open!");
    console.log(this.offer);
    this.dataToModals.offerDatasent$.subscribe(
      data => {
        this.offer = data;
        this.Title = this.offer.Title;
        this.Amount= this.offer.Quantity;
        console.log(this.offer);
      }
    )

  }

  acceptOffer( offerDetails: {quantity: number}) {
   
    var strID  = "";
    strID = String(localStorage.getItem("orphID"));
    let OfferAccept = {
      offerItemID:  this.offer.ID,
      id: parseInt(strID),
      amount: offerDetails.quantity,

    };

    console.log(OfferAccept);
    const body = JSON.stringify(OfferAccept);

    this.offersService.AcceptOffer(body).subscribe(data => {
      console.log(data);
        
    console.log("accepted?");


 });

 }
 
}
