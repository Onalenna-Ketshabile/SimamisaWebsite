import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.css']
})
export class ChildPageComponent implements OnInit {

  formModal:any;

  constructor() { }

  ngOnInit(): void {
    this.formModal = new window.boostrap.Modal(
      document.getElementById("custom-modal")
    );
    console.log(this.formModal);
  }
  openModal(){
    this.formModal.show();
     console.log("Modal function is called...");
 }

}
