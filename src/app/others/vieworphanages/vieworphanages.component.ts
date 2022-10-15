import { Component, OnInit,Input } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { OrphanageService } from 'src/app/services/orphanage.service';

interface Filter {
  id: number,
  name: string
}
@Component({
  selector: 'app-vieworphanages',
  templateUrl: './vieworphanages.component.html',
  styleUrls: ['./vieworphanages.component.css']
})
export class VieworphanagesComponent implements OnInit {
  orphanages?: Orphanage[];
  orphanageOriginal?: Orphanage[];

  filters: Filter[] = [
    { id: 1, name: 'None' },
    { id: 2, name: 'Eastern Cape' },
    { id: 3, name: 'Free State' },
    { id: 4, name: 'Gauteng' },
    { id: 5, name: 'KwaZulu-Natal' },
    { id: 6, name: 'Limpopo' },
    { id: 7, name: 'Mpumalanga' },
    { id: 8, name: 'Northern Cape' },
    { id: 9, name: 'North West' },
    { id: 10, name: 'Western Cape' },
  ];
  filterval: number = 1;

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
