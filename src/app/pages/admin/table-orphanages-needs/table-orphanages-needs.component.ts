import { Component, OnInit } from '@angular/core';
import { adminOrphanageNeeds } from 'src/app/models/adminOrphanageNeeds';
import { AdminReportsService } from 'src/app/services/admin-reports.service';

@Component({
  selector: 'app-table-orphanages-needs',
  templateUrl: './table-orphanages-needs.component.html',
  styleUrls: ['./table-orphanages-needs.component.css','../../../../assets/css/modal.css']
})
export class TableOrphanagesNeedsComponent implements OnInit {

  adminOrphanageNeeds!: adminOrphanageNeeds[];
  donationAmount!: any[];
  amountNeeded!:any[];

  constructor(private adminReports :AdminReportsService) {  }

  ngOnInit(): void {

    this.adminReports.getNeededAmount().subscribe(data=>{
     
      this.amountNeeded = data;
      console.log("Amount Needed: ", data);

    });

    this.adminReports.getTotalDonationAmount().subscribe(data=>{
      this.donationAmount = data;
     
      console.log(this.donationAmount);

    });
    
    this.adminReports.getOrphanageNeedsReports().subscribe(data=>{
      this.adminOrphanageNeeds = data;
      for(var i=0; i < this.adminOrphanageNeeds.length; i++){
        this.adminOrphanageNeeds[i].amountNeeded = this.amountNeeded[i].Amount;
        console.log("Index: " + i + " ",this.amountNeeded[i])
      }
      console.log(this.adminOrphanageNeeds);

    });
  }

}
