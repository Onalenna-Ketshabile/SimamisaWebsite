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

  constructor(private adminReports :AdminReportsService) {  }

  ngOnInit(): void {

    
    this.adminReports.getTotalDonationAmount().subscribe(data=>{
      this.donationAmount = data;
 
      console.log(this.donationAmount);

    });
    
    this.adminReports.getOrphanageNeedsReports().subscribe(data=>{
      this.adminOrphanageNeeds = data;
 
      console.log(this.adminOrphanageNeeds);

    });
  }

}
