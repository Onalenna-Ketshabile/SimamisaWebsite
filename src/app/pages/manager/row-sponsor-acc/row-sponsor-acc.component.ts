import { Component, Input, OnInit } from '@angular/core';
import { accountability } from 'src/app/models/accountability';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';

@Component({
  selector: '[app-row-sponsor-acc]',
  templateUrl: './row-sponsor-acc.component.html',
  styleUrls: ['./row-sponsor-acc.component.css']
})
export class RowSponsorAccComponent implements OnInit {

  @Input()
  accountability!: accountability;

  constructor(private dataToModals: DataToModalsService) { }

  ngOnInit(): void {
  }
  delete(){
    console.log("delete ", this.accountability)
    this.dataToModals.setSponsorshipDetails(this.accountability.Childname);
  }

}
