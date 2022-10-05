import { Component, Input, OnInit } from '@angular/core';
import { PartneringService } from 'src/app/services/partnering.service';
import { PartneringRequest } from 'src/app/models/PartneringRequest';
import { Orphanage } from 'src/app/models/orphanage';

@Component({
  selector: 'app-view-partneringrequests',
  templateUrl: './view-partneringrequests.component.html',
  styleUrls: ['../../pages/manager/partnering-requests/partnering-requests.component.css','../../../assets/css/bootstrap.min.css',
  '../../../assets/css/font-awesome.min.css']
})
export class ViewPartneringrequestsComponent implements OnInit {

  @Input() orphanage!:Orphanage;
  
  orphanages?: Orphanage[];
  constructor(private partneringService: PartneringService) { }

  ngOnInit(): void {
    this.partneringService.ViewRequests().subscribe(data=>{
      this.orphanages =data;
    });
  }
  AcceptPartneringRequest(): void {
        this.partneringService.AcceptRequest(this.orphanage.ID+"",localStorage.getItem("orphID")).subscribe(data => {
      console.log(data);
      window.alert("Partnering Request has been accepted.");
      window.location.href = 'partners';
        
  });
   
     console.log("Accepting partnering request.");
  }

}
