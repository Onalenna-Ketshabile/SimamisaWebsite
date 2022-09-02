import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-accept-offer',
  templateUrl: './modal-accept-offer.component.html',
  styleUrls: ['../../../assets/css/modal.css']
})
export class ModalAcceptOfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  acceptOffer( offerDetails: { title: String;  quantity: number; description: string}) {



    let Offer = {
      from:  1,
      to: 5,
      Title: offerDetails.title,
      Description: offerDetails.description ,
      Quantity: offerDetails.quantity,

    };

    console.log(Offer);
    const body = JSON.stringify(Offer);

    // this.offersService.MakeOffer(body).subscribe(data => {
    //   console.log(data);
        
    //   this.router.navigate(['./home']);


 //});

 }
 
}
