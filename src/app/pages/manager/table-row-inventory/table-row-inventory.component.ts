import { Component, Input, OnInit } from '@angular/core';
import { managerInventoryReport } from 'src/app/models/managerInventoryReport';

@Component({
  selector: '[app-table-row-inventory]',
  templateUrl: './table-row-inventory.component.html',
  styleUrls: ['./table-row-inventory.component.css']
})
export class TableRowInventoryComponent implements OnInit {

  @Input()
  managerInventoryReport!: managerInventoryReport;
  constructor() { }

  ngOnInit(): void {
  }

}
