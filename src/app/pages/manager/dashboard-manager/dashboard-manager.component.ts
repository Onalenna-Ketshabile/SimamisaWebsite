import { Component, OnInit } from '@angular/core';
import { ManagerReportsService } from 'src/app/services/manager-reports.service';

@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.css']
})
export class DashboardManagerComponent implements OnInit {

  constructor(private managerReport: ManagerReportsService ) { }
    dropoffs!: number;
    pickups!: number;
    x : number = 0;
  ngOnInit(): void {
    
    let orphanageID = localStorage.getItem("orphID")!;
    this.managerReport.getWeeklyPickups(orphanageID).subscribe((data)=>{
      this.pickups= data;
    });
    this.managerReport.getWeeklyDropoffs(orphanageID).subscribe((data)=>{
      this.dropoffs= data;
    });
    this.managerReport.getGasNeeded(orphanageID).subscribe((data)=>{
    this.x= data;
    })
  }

}
