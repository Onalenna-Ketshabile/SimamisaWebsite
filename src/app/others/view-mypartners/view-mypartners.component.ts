import { Component, Input, OnInit } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { OrphanageService } from 'src/app/services/orphanage.service';
import { PartneringService } from 'src/app/services/partnering.service';


@Component({
  selector: 'app-view-mypartners',
  templateUrl: './view-mypartners.component.html',
  styleUrls: ['./../../pages/manager/my-partners/my-partners.component.css','../../../assets/css/bootstrap.min.css','../../../assets/css/font-awesome.min.css']
})
export class ViewMypartnersComponent implements OnInit {

  @Input() orphanage!:Orphanage;
  
  orphanages?: Orphanage[];
  formModal:any;
  makeOfferModal: any;
  constructor(private partneringService: PartneringService, private dataToModels: DataToModalsService) { }

  ngOnInit(): void {
    console.log("Initializing my partners");
    this.partneringService.GetMyPartners().subscribe(data=>{
      this.orphanages =data;
      
      console.log("Data returned:", this.orphanages);
    });
  }
  openModal(){
    this.formModal.show();
     console.log("Modal function is called...");
 }
 openMakeOfferModal(){
   this.makeOfferModal.show();
 }
 selected(orphanage: Orphanage){
   // this.dataToModels.setToOrphanageID(orphanage.ID);
    localStorage.setItem("recID",orphanage.ID.toString());
 }

}
