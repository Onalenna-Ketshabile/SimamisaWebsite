import { Component, OnInit } from '@angular/core';
import { sponsorRequest } from 'src/app/models/sponsorRequest';

@Component({
  selector: 'app-sponsor-request',
  templateUrl: './sponsor-request.component.html',
  styleUrls: ['./sponsor-request.component.css','bootstrap.min.css','./../../../../assets/css/icons.min.css','../../../../assets/css/bootstrap.min.css','../../../../assets/css/table.css']
})
export class SponsorRequestComponent implements OnInit {

  sponsorRequests!: sponsorRequest[];

  constructor() { }

  ngOnInit(): void {
  }

}
