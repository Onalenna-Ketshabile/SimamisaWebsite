import { Component, OnInit,Input } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { OrphanageService } from 'src/app/services/orphanage.service';

@Component({
  selector: 'app-vieworphanages',
  templateUrl: './vieworphanages.component.html',
  styleUrls: ['./vieworphanages.component.css']
})
export class VieworphanagesComponent implements OnInit {
  orphanages?: Orphanage[];
  orphanageOriginal?: Orphanage[];

  constructor(private orphService:OrphanageService,private dataToModals: DataToModalsService) { }

  ngOnInit(): void {
    this.orphService.init();
    this.orphService.getOrphanages().subscribe(data=>{
      this.orphanages =data;
      this.orphanageOriginal = data;
    });

    this.dataToModals.SearchOrphanageSent$.subscribe(data=>{
      console.log("Arrived orphanage to search for: ", data);
      this.orphanages = this.orphanageOriginal?.filter( orphanage => (orphanage.OrphanageName.toLowerCase().includes(data.toLowerCase()) ));
     });

     
  }
}
