import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css','./bootstrap.min.css','./icons.min.css'],
})
export class AvatarComponent implements OnInit {

  mybootstrapJs: HTMLScriptElement;
  myMinJs: HTMLScriptElement;

  constructor() { 

    this.mybootstrapJs = document.createElement("script");
    this.mybootstrapJs.src = "../../../assets/js/avatar/bootstrap.bundle.min.js";
    document.body.appendChild(this.mybootstrapJs);

    
    this.myMinJs = document.createElement("script");
    this.myMinJs.src = "../../../assets/js/avatar/jquery.min.js";
    document.body.appendChild(this.myMinJs);

  }

  ngOnInit(): void {
  }

}
