import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-modal-make-offer',
  templateUrl: './modal-make-offer.component.html',
  styleUrls: ['../../../assets/css/modal.css']
})
export class ModalMakeOfferComponent implements OnInit {

  constructor(private offersService: OffersService,private router: Router, private dataToModals: DataToModalsService) { }

  ngOnInit(): void {
  }
  makeOffer( offerDetails: { title: String;  quantity: number; description: string}) {

   console.log("About to make an offer");
    this.dataToModals.makeOfferDatasent$.subscribe(data=>{ // data is the id to sent an offer to
     
    }
    );
  var fromOrphanageID = Number(localStorage.getItem("orphID"));
  console.log("RecID",localStorage.getItem("recID") )

    let Offer = {
      from:  fromOrphanageID,
      to:   localStorage.getItem("recID"),
      Title: offerDetails.title,
      Description: offerDetails.description ,
      Quantity: offerDetails.quantity,

    };

    console.log("MyOffer",Offer);
    const body = JSON.stringify(Offer);
    window.alert(localStorage.getItem("recID"));
    this.offersService.MakeOffer(body).subscribe(data => {
      console.log(data);
      window.alert("The offer was succefully sent.");
      localStorage.removeItem("recID");
      window.location.reload();
      //this.router.navigate(['./home']);
      

  });


 }
 

}
