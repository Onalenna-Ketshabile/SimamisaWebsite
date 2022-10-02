import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/services/donation.service';
import { render } from 'creditcardpayments/creditCardPayments'
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  paymentType!: string;
  selected: boolean = false;
  isCustomAmt: boolean = false;
  amountchosen: number = 0;
  amountErr: boolean = false;
  constructor(private dService: DonationService) { }

  ngOnInit(): void {
  }
  updateType(type: any) {
    console.log(type)
    if (this.amountchosen <= 0) {
      this.amountErr = true;
    } else {
      if (type == 'paypal') {
        this.clickme();
      }
      this.paymentType = type;

    }

  }

  clickme() {
    // render({
    //   id: "#paypal",
    //   currency: "USD",
    //   value: this.amountchosen.toPrecision(2),
    //   onApprove: (details) => {
    //     console.log(details);

    //     this.makeDonation();

    //   }
    // })
     this.dService.randToUSD(this.amountchosen).subscribe((data)=>{
      console.log("Res",data);
      render({
        id: "#paypal",
        currency: "USD",
        value: this.amountchosen.toPrecision(2),
        onApprove: (details) => {
          console.log(details);
  
          this.makeDonation();
  
        }
      })
     })
   
  }
  onKey(event: any) { // without type info

    this.updateAmount(Number(event.target.value));
  }
  isCardPayment() {
    return this.paymentType == "card";
  }
  isPaypal() {
    return this.paymentType == "paypal";
  }
  isSelected() {
    return this.selected;
  }
  isCustom() {
    return this.isCustomAmt;
  }

  setCustom() {
    this.isCustomAmt = true;
  }
  updateAmount(num: number) {

    this.amountchosen = num;
    this.selected = true;
    this.amountErr = false;
  }
  makeDonation() {
    let body = {
    amt:this.amountchosen,
      userid:localStorage.getItem("userID")
    }
    this.dService.generalDonation(body).subscribe(data => {

window.alert("Thank you")
    });
  }


}
