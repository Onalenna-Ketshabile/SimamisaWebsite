import { Component, OnInit } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
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
  constructor(private orphService:OrphanageService, public loaderService:LoaderService) { }

  ngOnInit(): void {
    this.orphService.init();
    this.orphService.getOrphanages().subscribe(data=>{
      this.orphanages =data;
      if(data!=null){
      this.isLoaded = true;
      }
    });
  }

}
