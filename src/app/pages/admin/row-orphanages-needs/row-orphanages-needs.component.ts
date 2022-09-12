import { Component, Input, OnInit } from '@angular/core';
import { adminOrphanageNeeds } from 'src/app/models/adminOrphanageNeeds';

@Component({
  selector: '[app-row-orphanages-needs]',
  templateUrl: './row-orphanages-needs.component.html',
  styleUrls: ['./row-orphanages-needs.component.css']
})
export class RowOrphanagesNeedsComponent implements OnInit {
  @Input()
  admOrphanageNeeds!:adminOrphanageNeeds;

  @Input()
  myIndex!: number;
  index!:number;
  constructor() {
    this.index = 0;
   }

  ngOnInit(): void {
  }

}
