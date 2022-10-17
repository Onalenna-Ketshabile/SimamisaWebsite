import { Component, OnInit } from '@angular/core';
import { accountability } from 'src/app/models/accountability';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { ManagerReportsService } from 'src/app/services/manager-reports.service';

@Component({
  selector: 'app-sponsor-accountability',
  templateUrl: './sponsor-accountability.component.html',
  styleUrls: ['./sponsor-accountability.component.css','../../../../assets/css/modal.css']
})
export class SponsorAccountabilityComponent implements OnInit {

  sponsorAccountability!: accountability[];
  constructor(private managerService: ManagerReportsService, private dataToModals: DataToModalsService) { }

  ngOnInit(): void {
    this.managerService.getSponsorAccountability().subscribe(data=> {
      this.sponsorAccountability = data.filter( (sponsor:accountability) => (sponsor.Number != 0));

      console.log("sponsorAcc", this.sponsorAccountability)
    });

    this.dataToModals.deleteSponsorshipSent$.subscribe( data => {
         this.sponsorAccountability = this.sponsorAccountability?.filter( sponsor => (sponsor.Childname != data));
    })

  }

}
