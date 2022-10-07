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
 isFlagged(){

    return this.managerUnrealiableUser.isFlagged == '1';
  }
  flag(){
    console.log("Input", this.managerUnrealiableUser);
    let body={
      id:this.managerUnrealiableUser.Id
    };
    this.pService.flagUser(JSON.stringify(body)).subscribe((data)=>{
      window.alert(this.managerUnrealiableUser.Name + ' was flagged!');
      this.router.navigate(['manager/item-proposals']);
    })
      
  }
  unflag(){
    console.log("Input", this.managerUnrealiableUser);
    let body={
      id:this.managerUnrealiableUser.Id
    };
    console.log("Unflag",body)
    this.pService.unflagUser(JSON.stringify(body)).subscribe((data)=>{
      window.alert(this.managerUnrealiableUser.Name + ' was unflagged!');
      this.router.navigate(['manager/item-proposals']);
    })
      
  }
}
