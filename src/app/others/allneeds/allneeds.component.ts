import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Need } from 'src/app/models/need';
import { NeedsService } from 'src/app/services/needs.service';
import { OrphanageService } from 'src/app/services/orphanage.service';
import { LoadingHandler } from '../loading-indicator/loading-handler';

@Component({
  selector: 'app-allneeds',
  templateUrl: './allneeds.component.html',
  styleUrls: ['./allneeds.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllneedsComponent implements OnInit {

  @Input()
  id!:any
  needs?: Need[];

  loadingHandler = new LoadingHandler();
  constructor(private needs_service:NeedsService,private orphService:OrphanageService) {


   }

  ngOnInit(): void {
     this.orphService.init();
     this.getNeeds();
    
  }
   getNeeds(){
    this.loadingHandler.start();
    if(localStorage.getItem("userRole")=="M"){
      if(this.id){
        console.log("ID->",this.id)
        this.needs_service.getAllHNeeds().subscribe(data=>{
          console.log(data);
          let need = data.find((nd)=>nd.ID==this.id);
          this.needs = new Array(need!);
          this.loadingHandler.finish();     
        })
      }else{
        this.needs_service.getOrphanageNeeds().subscribe(data=>{
          this.needs =data;
          this.loadingHandler.finish();
        });
      }
    
    }else{
      this.needs_service.getAllNeeds().subscribe(data=>{
        this.needs =data;
        this.loadingHandler.finish();
      });
    }
   }
  onElementDeleted(element: any) {
    console.log(element)
   this.getNeeds();
  }
  onElementUpdated(element:any){
  
    this.getNeeds();
    //document.getElementById("close-add-cneed")!.click();
    
  }
}
