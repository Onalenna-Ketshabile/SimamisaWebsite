import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments'
@Component({
  selector: 'app-modal-paypal-need',
  templateUrl: './modal-paypal-need.component.html',
  styleUrls: ['./modal-paypal-need.component.css']
})
export class ModalPaypalNeedComponent implements OnInit {
  amount: string = "";

  constructor() {
   
  }
  updateamount=(val:string)=>{
    this.amount=val;
    console.log(val);
  }
  clickme() {
    render({
      id: "#paypal",
      currency: "USD",
      value: this.amount,
      onApprove: (details) => {
        alert("Transaction Successful");
      }
    })
  }
  ngOnInit(): void {
  }

}
