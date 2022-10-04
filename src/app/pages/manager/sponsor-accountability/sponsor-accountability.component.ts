import { Component, OnInit } from '@angular/core';
import { accountability } from 'src/app/models/accountability';
import { ManagerReportsService } from 'src/app/services/manager-reports.service';

@Component({
  selector: 'app-sponsor-accountability',
  templateUrl: './sponsor-accountability.component.html',
  styleUrls: ['./sponsor-accountability.component.css','../../../../assets/css/modal.css']
})
export class SponsorAccountabilityComponent implements OnInit {

  sponsorAccountability!: accountability[];
  constructor(private managerService: ManagerReportsService) { }

  ngOnInit(): void {
    this.managerService.getSponsorAccountability().subscribe(data=> {
      this.sponsorAccountability = data;

      console.log("sponsorAcc", this.sponsorAccountability)
    })
  }

}
