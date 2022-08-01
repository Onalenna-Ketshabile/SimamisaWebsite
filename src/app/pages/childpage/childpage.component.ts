import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-childpage',
  templateUrl: './childpage.component.html',
  styleUrls: ['./childpage.component.css']
})
export class ChildpageComponent implements OnInit {

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
