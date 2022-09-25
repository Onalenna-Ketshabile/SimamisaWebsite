import { Component, OnInit } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
import { OrphanageService } from 'src/app/services/orphanage.service';


@Component({
  selector: 'app-orphanages',
  templateUrl: './orphanages.component.html',
  styleUrls: ['./orphanages.component.css']
})
export class OrphanagesComponent implements OnInit {
  orphanages?: Orphanage[];
  isLoaded = false;
  constructor(private orphService:OrphanageService) { }

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
