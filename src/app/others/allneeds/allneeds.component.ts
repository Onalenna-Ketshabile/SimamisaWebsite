import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Need } from 'src/app/Need';
import { NEEDS } from 'src/app/mock-needs';
@Component({
  selector: 'app-allneeds',
  templateUrl: './allneeds.component.html',
  styleUrls: ['./allneeds.component.css','./bootstrap.min.css']
})
export class AllneedsComponent implements OnInit {
  needs: Need[] = NEEDS;
  myIViewJs: HTMLScriptElement;
  myMinJs: HTMLScriptElement;
  myMainJs: HTMLScriptElement;

  constructor() {

    this.myMinJs = document.createElement("script");
    this.myMinJs.src = "../../../assets/js/newsfeedposts/jquery.min.js";
    document.body.appendChild(this.myMinJs);

    this.myIViewJs = document.createElement("script");
    this.myIViewJs.src = "../../../assets/js/newsfeedposts/jquery.inview.min.js";
    document.body.appendChild(this.myIViewJs);

    this.myMainJs = document.createElement("script");
    this.myMainJs.src = "../../../assets/js/newsfeedposts/main.js";
    document.body.appendChild(this.myMainJs);
   }

  ngOnInit(): void {
  }

}
