import { Component, Input, OnInit } from '@angular/core';
import { accountability } from 'src/app/models/accountability';

@Component({
  selector: '[app-row-sponsor-acc]',
  templateUrl: './row-sponsor-acc.component.html',
  styleUrls: ['./row-sponsor-acc.component.css']
})
export class RowSponsorAccComponent implements OnInit {

  @Input()
  accountability!: accountability;

  constructor() { }

  ngOnInit(): void {
  }

}
