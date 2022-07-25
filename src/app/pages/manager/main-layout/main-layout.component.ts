import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  
  mybootstrapJs: HTMLScriptElement;
  myMinJs: HTMLScriptElement;
  myPluginJs: HTMLScriptElement;

  formModal:any;

  constructor() {

    this.myMinJs = document.createElement("script");
    this.myMinJs.src = "../../../assets/js/manager-layout/jquery.min.js";
    document.body.appendChild(this.myMinJs);

    
    this.mybootstrapJs = document.createElement("script");
    this.mybootstrapJs.src = "../../../assets/js/manager-layout/bootstrap.min.js";
    document.body.appendChild(this.mybootstrapJs);

        
    this.myPluginJs = document.createElement("script");
    this.myPluginJs.src = "../../../assets/js/manager-layout/plugins.js";
    document.body.appendChild(this.myPluginJs);

   }

  ngOnInit(): void {
    console.log("Angular On Init!");
    this.formModal = new window.boostrap.Modal(
      document.getElementById("custom-modal")
    );

  }
  openModal(){
     this.formModal.show();
      console.log("Modal function is called...");
  }

  doSomething(){
    this.formModal.hide();
  }

}
