import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unreliableUser } from 'src/app/models/unreliableUser';
import { ProposalServiceService } from 'src/app/services/proposal-service.service';

@Component({
  selector: '[app-table-row-unreliable-users]',
  templateUrl: './table-row-unreliable-users.component.html',
  styleUrls: ['./table-row-unreliable-users.component.css']
})
export class TableRowUnreliableUsersComponent implements OnInit {

  @Input()
  managerUnrealiableUser!: unreliableUser;

  constructor(private pService:ProposalServiceService,private router:Router) {
    console.log("Input", this.managerUnrealiableUser);
   }

  ngOnInit(): void {
  }
  flag(){
   
    let body={
      id:this.managerUnrealiableUser.Id
    };
    this.pService.flagUser(JSON.stringify(body)).subscribe((data)=>{
      window.alert(this.managerUnrealiableUser.Name + ' was flagged!');
      this.router.navigate(['manager/item-proposals']);
    })
      
  }

}
