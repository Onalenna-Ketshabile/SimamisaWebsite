import { Component, OnInit } from '@angular/core';
import { managerInventoryReport } from 'src/app/models/managerInventoryReport';
import { unreliableUser } from 'src/app/models/unreliableUser';
import { ManagerReportsService } from 'src/app/services/manager-reports.service';

@Component({
  selector: 'app-table-unreliable-users',
  templateUrl: './table-unreliable-users.component.html',
  styleUrls: ['./table-unreliable-users.component.css','../../../../assets/css/modal.css']
})
export class TableUnreliableUsersComponent implements OnInit {
  
  managerUnrealiableUsers!: unreliableUser[];

  constructor(private managerReport: ManagerReportsService) { }

  ngOnInit(): void {
    
    this.managerReport.getManagerUnreliableUsers().subscribe(data=>{
      this.managerUnrealiableUsers = data;
 
      console.log("Unreliable",this.managerUnrealiableUsers);

    });
  }

}
