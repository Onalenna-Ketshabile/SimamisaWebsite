import { Component, Input, OnInit } from '@angular/core';
import { unreliableUser } from 'src/app/models/unreliableUser';

@Component({
  selector: '[app-table-row-unreliable-users]',
  templateUrl: './table-row-unreliable-users.component.html',
  styleUrls: ['./table-row-unreliable-users.component.css']
})
export class TableRowUnreliableUsersComponent implements OnInit {

  @Input()
  managerUnrealiableUser!: unreliableUser;

  constructor() {
    console.log("Input", this.managerUnrealiableUser);
   }

  ngOnInit(): void {
  }
  flag(){
    window.alert(this.managerUnrealiableUser.Name + ' was flagged!');
  }

}
