import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-proposals',
  templateUrl: './item-proposals.component.html',
  styleUrls: ['./item-proposals.component.css','../manager/child-needs/bootstrap.min.css','./../../../assets/css/icons.min.css','../../../assets/css/bootstrap.min.css']
})
export class ItemProposalsComponent implements OnInit {

  public activeLayout = "pickups"
  constructor() { }

  ngOnInit(): void {
  }
  showPickUps(): void {
   this.activeLayout = "pickups";
  }
  showDropOff(): void {
    this.activeLayout = "dropoffs";
  }

}
