import { Component, OnInit } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { LoaderService } from 'src/app/services/loader.service';
import { OrphanageService } from 'src/app/services/orphanage.service';


@Component({
  selector: 'app-orphanages',
  templateUrl: './orphanages.component.html',
  styleUrls: ['./orphanages.component.css']
})
export class OrphanagesComponent implements OnInit {
  orphanages?: Orphanage[];
  isLoaded = false;
  constructor(private orphService:OrphanageService, public loaderService:LoaderService,private dataToModals: DataToModalsService) { }

  ngOnInit(): void {
    this.orphService.init();
    this.orphService.getOrphanages().subscribe(data=>{
      this.orphanages =data;
      if(data!=null){
      this.isLoaded = true;
      }
    });
  }
  search(details:{name: string}){
    this.dataToModals.setSearchOrphanageDetails(details.name);
    console.log("Searched: ", details.name);
  }

}
