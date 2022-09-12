import { Component, Input, OnInit } from '@angular/core';
import { sponsorRequest } from 'src/app/models/sponsorRequest';

@Component({
  selector: '[app-sponsor-request-item]',
  templateUrl: './sponsor-request-item.component.html',
  styleUrls: ['./sponsor-request-item.component.css']
})
export class SponsorRequestItemComponent implements OnInit {
  @Input()
  sponsorRequest!: sponsorRequest;

  constructor() { }

  ngOnInit(): void {
  }

}
