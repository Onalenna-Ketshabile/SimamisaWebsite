import { Component, OnInit } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
import { PartneringRequest } from 'src/app/models/PartneringRequest';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { PartneringService } from 'src/app/services/partnering.service';

@Component({
  selector: 'app-partnering-requests',
  templateUrl: './partnering-requests.component.html',
  styleUrls: ['./partnering-requests.component.css','../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/font-awesome.min.css']
})
export class PartneringRequestsComponent implements OnInit {
  
  orphanages?: Orphanage[];
  noData:boolean=false;

  isLoaded= false;
  loadingHandler = new LoadingHandler();
  constructor(private partneringService: PartneringService) { }

  ngOnInit(): void {
    this.partneringService.init();
    this.partneringService.ViewRequests().subscribe(data=>{
      
      this.orphanages =data;
      if(data.length == 0){
        this.noData = this.nothingReturned();}
    });
  }

nothingReturned(): boolean{
  if(this.orphanages?.length == 0){
   return true;
  }
  else{
   return false;
  }
}

}
