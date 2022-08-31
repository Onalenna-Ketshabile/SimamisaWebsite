import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments'
import { NeedsService } from 'src/app/services/needs.service';
@Component({
  selector: 'app-modal-paypal-need',
  templateUrl: './modal-paypal-need.component.html',
  styleUrls: ['./modal-paypal-need.component.css']
})
export class ModalPaypalNeedComponent implements OnInit {

  amount: string = "";
  amountDollars!: number;
  isSucessful!:boolean;
  @Output()
  transactionDone: EventEmitter<any> = new EventEmitter();
  constructor(private needService: NeedsService) {
    this.isSucessful=false;
  }

  ngOnInit(): void {
    this.isSucessful=false;
  }

  updateamount = () => {
   
    this.amountDollars = (Number(this.amount)*0.059);
    console.log(this.amount);
    console.log(this.amountDollars);
  }
  clickme() {
    this.updateamount();
    render({
      id: "#paypal",
      currency: "USD",
      value:this.amountDollars.toPrecision(2),
      onApprove: (details) => {
        console.log(details);
        this.isSucessful = true;
        this.donateMoney();

      }
    })
  }
  donateMoney() {
    console.log("I have been called")
     let needid = localStorage.getItem("needID");
    
    let donation = {
      id: needid, // itemID
      amount: this.amount,
      ProposalComment: "This is a donation",
      registeredUserID: localStorage.getItem("userID")
    }

    let body = JSON.stringify(donation)
    console.log(body);
    this.needService.donate(body).subscribe(data => {

      console.log("Donated");
      console.log(data);
      //Close modal and show the newsfeed
      localStorage.removeItem("needAmount");
      localStorage.removeItem("needID");
    });
  }
   closeModal(){
    this.isSucessful=false;
    this.transactionDone.emit();
   }
}
