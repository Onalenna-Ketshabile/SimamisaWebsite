import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Data } from '@angular/router';
import { Need } from 'src/app/models/need';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { LoaderService } from 'src/app/services/loader.service';
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
  needs!: Need[];
  needOriginal?: Need[];
  isLoaded= false;
  loadingHandler = new LoadingHandler();
  totalLength:any;
  page:number=1;
  constructor(private needs_service:NeedsService,private orphService:OrphanageService, public loaderService:LoaderService, private dataToModals:DataToModalsService) {


   }

  ngOnInit(): void {
     this.orphService.init();
     this.getNeeds();

     this.dataToModals.SearchNeedSent$.subscribe(data=>{
      console.log("Arrived need to search for: ", data);
      this.needs = this.needOriginal!.filter( need => (need.Title.toLowerCase() == data.toLowerCase()));
        this
     });

     this.dataToModals.NeeedsUpdateSent$.subscribe(data=>{
      console.log("Arrived need to search for: ", data);
     // this.needs?.filter( need => (need.Title.toLowerCase() == data.toLowerCase()));

     });
    
  }
  show(){
    return !(this.isLoaded && this.needs!.length<1) ;
  }
   getNeeds(){
    this.loadingHandler.start();
    if(localStorage.getItem("userRole")=="M"){
      if(this.id){
        console.log("ID->",this.id)
        this.needs_service.getOrphanageNeeds().subscribe(data=>{
          console.log(data);
          let need = data.find((nd)=>nd.ID==this.id);
          this.needs = new Array(need!);
          this.needOriginal = this.needs;
         this.totalLength = data.length; 
          this.isLoaded=true;    
        })
      }else{
        this.needs_service.getOrphanageNeeds().subscribe(data=>{
          this.needs =data;
          this.needOriginal = this.needs;
          this.totalLength = data.length; 
          this.isLoaded=true;    
        });
      }
    
    }else{
      this.needs_service.getAllNeeds().subscribe(data=>{
        this.needs =data;
        this.needOriginal = this.needs;
        this.loadingHandler.finish();
        this.isLoaded=true;    
      });
    }
   }
  onElementDeleted(element: any) {
    console.log(element)
   this.getNeeds();
  }
  onElementAdded(element: any) {
    console.log(element)
   this.getNeeds();
  }
  onElementUpdated(element:any){
  
    this.getNeeds();
    //document.getElementById("close-add-cneed")!.click();
    
  }
  public trackItem (index: number, need: Need) {
    return need.ID;
  }
}
