import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css','../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/font-awesome.min.css']
})
export class MyOffersComponent implements OnInit {
  offers?: Offer[]
  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getMyOffer().subscribe(data=>{
      
      this.offers =data;
    });
  }
  nothingReturned(): boolean{
    if(this.offers?.length == 0){
     return true;
    }
    else{
     return false;
    }
 }
 

}
