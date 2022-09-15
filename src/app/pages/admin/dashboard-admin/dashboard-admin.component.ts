import { Component, OnInit } from '@angular/core';
import { AdminReportsService } from 'src/app/services/admin-reports.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css','./../../../../assets/css/bootstrap.min.css','../../../../assets/css/entypo/css/entypo.css']
})
export class DashboardAdminComponent implements OnInit {

  numberOfOrphanages!: number[];
  numberOfUsers!: number[];
  numberOfChildren!: number[];
  numberOfSponsors!: number[];
          
  constructor(private adminReports: AdminReportsService) { }

  ngOnInit(): void {

    this.adminReports.getNumberOfOrphanages().subscribe(data=>{
      this.numberOfOrphanages = data;
      console.log(this.numberOfOrphanages);
    });

    this.adminReports.getNumberOfUsers().subscribe(data=>{
      this.numberOfUsers = data;
    });

    this.adminReports.getNumberOfChildren().subscribe(data=>{
      this.numberOfChildren = data;
    });

    this.adminReports.getNumberOfSponsors().subscribe(data=>{
      this.numberOfSponsors= data;
    });

  }

}
