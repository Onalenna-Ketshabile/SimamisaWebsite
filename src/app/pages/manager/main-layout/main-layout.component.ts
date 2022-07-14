import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  
  mybootstrapJs: HTMLScriptElement;
  myMinJs: HTMLScriptElement;
  myPluginJs: HTMLScriptElement;

  constructor() {

    this.myMinJs = document.createElement("script");
    this.myMinJs.src = "./more/scripts/jquery.min.js";
    document.body.appendChild(this.myMinJs);

    
    this.mybootstrapJs = document.createElement("script");
    this.mybootstrapJs.src = "./more/scripts/bootstrap.min.js";
    document.body.appendChild(this.mybootstrapJs);

        
    this.myPluginJs = document.createElement("script");
    this.myPluginJs.src = "./more/scripts/plugins.js";
    document.body.appendChild(this.myPluginJs);
   }

  ngOnInit(): void {
  }

}
