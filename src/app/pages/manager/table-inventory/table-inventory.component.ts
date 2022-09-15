import { Component, OnInit } from '@angular/core';
import { managerInventoryReport } from 'src/app/models/managerInventoryReport';
import { ManagerReportsService } from 'src/app/services/manager-reports.service';

@Component({
  selector: 'app-table-inventory',
  templateUrl: './table-inventory.component.html',
  styleUrls: ['./table-inventory.component.css']
})
export class TableInventoryComponent implements OnInit {

  managerInventoryReports!: managerInventoryReport[];

  constructor(private managerReport: ManagerReportsService) { }

  ngOnInit(): void {
    this.managerReport.getManagerInventoryReport().subscribe(data=>{
      this.managerInventoryReports = data;
 
      console.log(this.managerInventoryReports);

    });
  }

}
