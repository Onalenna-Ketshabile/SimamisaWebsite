import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-modal-distribute-funds',
  templateUrl: './modal-distribute-funds.component.html',
  styleUrls: ['./modal-distribute-funds.component.css','./../../../assets/css/modal.css']
})
export class ModalDistributeFundsComponent implements OnInit {
  @ViewChild('distributeFundsForm') distributeFundsForm!: NgForm;
  orphanageID!:number;
  amountNeeded!: number;
  constructor(private dataToModals: DataToModalsService, private donationService: DonationService) { }

  ngOnInit(): void {
    this.dataToModals.idDistributeSent$.subscribe(data=>{
      this.orphanageID = data.ID;
      this.amountNeeded = data.amountNeeded;
      console.log(this.orphanageID, this.amountNeeded);
      setTimeout(()=>{
        console.log("BreakPoint");
        this.distributeFundsForm.controls["unitCost"].setValue(this.amountNeeded);
   
      })
    });

  }

  Distribute(modalData: { unitCost: number;}){ //unitCost , the amount distributed
    console.log("The Modal Says: ", this.orphanageID);
    console.log("amount", modalData.unitCost);

    this.donationService.distribute(this.orphanageID,modalData.unitCost).subscribe(data => {
      console.log(data);
      window.alert("Distribution was successful!");
      window.location.reload();

        
  });

  }

}
