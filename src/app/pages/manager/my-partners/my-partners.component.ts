import { Component, OnInit } from '@angular/core';
import { da } from 'date-fns/locale';
import { Orphanage } from 'src/app/models/orphanage';
import { LoaderService } from 'src/app/services/loader.service';
import { PartneringService } from 'src/app/services/partnering.service';

@Component({
  selector: 'app-my-partners',
  templateUrl: './my-partners.component.html',
  styleUrls: ['./my-partners.component.css','../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/font-awesome.min.css']
})
export class MyPartnersComponent implements OnInit {
  orphanages!: Orphanage[];
  noData=false;
  isLoading= false;
  constructor(private partneringService: PartneringService,public loaderService:LoaderService) { }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((data)=>{
      this.isLoading=data;
    })
    this.partneringService.GetMyPartners().subscribe(data=>{
      this.orphanages =data;
      if(data.length == 0){
        this.noData = this.nothingReturned();}
      console.log("Data received:", this.orphanages);
    });
  
  }
  nothingReturned(): boolean{
     if(!this.isLoading && this.orphanages.length == 0){
      return true;
     }
     else{
      return false;
     }
  }
  
  

}
