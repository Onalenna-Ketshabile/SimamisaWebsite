import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-modal-accept-offer',
  templateUrl: './modal-accept-offer.component.html',
  styleUrls: ['../../../assets/css/modal.css']
})
export class ModalAcceptOfferComponent implements OnInit {
@Input()
offer! : Offer;
  offerID = 0;
 
  Amount! :string;
  Title = "";
  IDstr: any;

  constructor(private dataToModals: DataToModalsService, private offersService: OffersService) {    
    

 }

  ngOnInit(): void {
  
    // localStorage.setItem("quantity",offer.Quantity.toString());
    // localStorage.setItem("ID-ot",offer.ID.toString());

    // console.log("Modal successfully Trash open!");
    // console.log(this.offer);
    // this.dataToModals.offerDatasent$.subscribe(
    //   data => {
    //     this.offer = data;
    //     this.Title = this.offer.Title;
    //     this.Amount= this.offer.Quantity;
    //     console.log(this.offer);
    //   }
    // )

  }

  acceptOffer( offerDetails: {quantity: number}) {
     console.log(this.offer)
    var strID  = "";
    strID = String(localStorage.getItem("orphID"));
    let OfferAccept = {
      offerItemID:  this.offer.ID,
      id: parseInt(strID),
      amount: offerDetails.quantity,

    };

    //console.log(OfferAccept);
    const body = JSON.stringify(OfferAccept);

    this.offersService.AcceptOffer(body).subscribe(data => {
      window.alert(data);
      console.log(data);     
 });

 }
 
}
