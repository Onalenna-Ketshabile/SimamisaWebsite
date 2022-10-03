import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { LoaderService } from 'src/app/services/loader.service';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css','../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/font-awesome.min.css']
})
export class MyOffersComponent implements OnInit {
  offers?: Offer[]
  noData:boolean=false;
  isLoading = false;
  constructor(private offersService: OffersService,public loaderService:LoaderService) { }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((data)=>{
      this.isLoading = data;
    })
    this.offersService.getMyOffer().subscribe(data=>{
     
      this.offers =data;
      if(data.length == 0){
        this.noData = this.nothingReturned();}
    });
  }
  nothingReturned(): boolean{
    if(this.offers?.length == 0 && !this.isLoading){
     return true;
    }
    else{
     return false;
    }
 }
 

}
