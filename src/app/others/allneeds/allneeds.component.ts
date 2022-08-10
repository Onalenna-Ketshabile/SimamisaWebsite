import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Need } from 'src/app/models/need';
import { NeedsService } from 'src/app/services/needs.service';
import { OrphanageService } from 'src/app/services/orphanage.service';
@Component({
  selector: 'app-allneeds',
  templateUrl: './allneeds.component.html',
  styleUrls: ['./allneeds.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllneedsComponent implements OnInit {
  needs?: Need[];
  myIViewJs: HTMLScriptElement;
  myMinJs: HTMLScriptElement;
  myMainJs: HTMLScriptElement;

  constructor(private needs_service:NeedsService,private orphService:OrphanageService) {

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
     this.orphService.init();
    this.needs_service.getAllNeeds().subscribe(data=>{
      this.needs =data;
    });
  }
}
