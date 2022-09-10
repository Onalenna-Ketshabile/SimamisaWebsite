import { Component } from '@angular/core';


declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimamisaWebApplication';
  formModal:any;
  makeproposalModal:any;
  payNeed:any;

  constructor() { }

  ngOnInit(): void {
    // this.formModal = new window.boostrap.Modal(
    //   document.getElementById("custom-modal")
    // );
    // this.makeproposalModal = new window.boostrap.Modal(
    //   document.getElementById("makeproposal-modal")
    // );
    // this.payNeed = new window.boostrap.Modal(
    //   document.getElementById("payNeed-modal")
    // );

  
  }

}
