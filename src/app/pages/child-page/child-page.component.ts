import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child';
import { Orphanage } from 'src/app/models/orphanage';
import { ChildrenService } from 'src/app/services/children.service';
import { OrphanageService } from 'src/app/services/orphanage.service';

declare var window: any;

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.css','../../../assets/css/font-awesome.min.css']
})
export class ChildPageComponent implements OnInit {

  formModal:any;

  child?: Child;
  orphanage?: Orphanage;
  
  constructor(private route: ActivatedRoute,private children_service:ChildrenService,private orphanage_service:OrphanageService) { }

  ngOnInit(): void {
    console.log("Page Loaded");
    console.log("o_id:" + this.route.snapshot.params['o_id'] + " c_id: " + this.route.snapshot.params['c_id']);
     
    //Get the child
    this.children_service.getChildByID(this.route.snapshot.params['c_id']).subscribe(data=>{
      this.child =data; });
    
    //Get the Orphanage
    this.orphanage_service.getOrphanageByID(this.route.snapshot.params['o_id']).subscribe(data=>{
      this.orphanage =data; });

    // this.formModal = new window.boostrap.Modal(
    //   document.getElementById("custom-modal")
    // );

  }
  openModal(){
    this.formModal.show();
     console.log("Modal function is called...");
 }

}
