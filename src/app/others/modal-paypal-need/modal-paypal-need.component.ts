import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments'
import { NeedsService } from 'src/app/services/needs.service';
@Component({
  selector: 'app-modal-paypal-need',
  templateUrl: './modal-paypal-need.component.html',
  styleUrls: ['./modal-paypal-need.component.css']
})
export class ModalPaypalNeedComponent implements OnInit {

  amount: string = "";

  constructor(private needService:NeedsService) {
   
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
        // let val  = localStorage.getItem("needAmount");
        // var num:number = parseInt(val!);
        // var edit:number = parseInt(this.amount)
        // let body = {
        //   AmountNeeded: num-edit ,
        // }
        // let id= localStorage.getItem("needID");
        // let body2 = JSON.stringify(body)
        // this.needService.updateNeed(id!,body2).subscribe(data => {
    
        //   console.log("Posted");
        //   console.log(data);
        //   //Close modal and show the newsfeed
        // });
        
      }
    })
  }
  ngOnInit(): void {
  }

}
