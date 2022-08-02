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
