import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/child';
import { ChildrenService } from 'src/app/services/children.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-sponsor-child',
  templateUrl: './sponsor-child.component.html',
  styleUrls: ['./sponsor-child.component.css']
})
export class SponsorChildComponent implements OnInit {

  children?: Child[];

  constructor(private children_service:ChildrenService, public loaderService:LoaderService) { }

  ngOnInit(): void {
   this.children_service.getAllChildren().subscribe(data=>{
     this.children =data;
   });
 }

}
