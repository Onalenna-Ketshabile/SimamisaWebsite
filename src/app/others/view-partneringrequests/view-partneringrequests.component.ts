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
    console.log("Send Partnering Request from" + this.orphanage.ID + " To " + localStorage.getItem("orphID"));

        this.partneringService.AcceptRequest(this.orphanage.ID+"",localStorage.getItem("orphID")).subscribe(data => {
      console.log(data);
      console.log("Request Accepted.")
      window.alert("Parnering Request Has Been Accepted.");
  });
    
  }

}
