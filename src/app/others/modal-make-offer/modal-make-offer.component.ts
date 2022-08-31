import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-modal-make-offer',
  templateUrl: './modal-make-offer.component.html',
  styleUrls: ['../../../assets/css/modal.css']
})
export class ModalMakeOfferComponent implements OnInit {

  constructor(private offersService: OffersService,private router: Router) { }

  ngOnInit(): void {
  }
  makeOffer( offerDetails: { title: String;  quantity: number; description: string}) {



    let Offer = {
      from:  1,
      to: 5,
      Title: offerDetails.title,
      Description: offerDetails.description ,
      Quantity: offerDetails.quantity,

    };

    console.log(Offer);
    const body = JSON.stringify(Offer);

    this.offersService.MakeOffer(body).subscribe(data => {
      console.log(data);
        
      this.router.navigate(['./home']);


  });

 }

}
