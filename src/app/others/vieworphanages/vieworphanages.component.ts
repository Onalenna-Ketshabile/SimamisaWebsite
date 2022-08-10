import { Component, OnInit,Input } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
import { OrphanageService } from 'src/app/services/orphanage.service';

@Component({
  selector: 'app-vieworphanages',
  templateUrl: './vieworphanages.component.html',
  styleUrls: ['./vieworphanages.component.css']
})
export class VieworphanagesComponent implements OnInit {
  orphanages?: Orphanage[];
  constructor(private orphService:OrphanageService) { }

  ngOnInit(): void {
    this.orphService.init();
    this.orphService.getOrphanages().subscribe(data=>{
      this.orphanages =data;
    });
  }
}
