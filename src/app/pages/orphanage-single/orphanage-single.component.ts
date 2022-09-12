import { Component, OnInit } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
import { OrphanageService } from 'src/app/services/orphanage.service';

@Component({
  selector: 'app-orphanage-single',
  templateUrl: './orphanage-single.component.html',
  styleUrls: ['./orphanage-single.component.css','./bootstrap.min.css']
})
export class OrphanageSingleComponent implements OnInit {

  orphanage!: Orphanage;

  constructor(private orphanageService: OrphanageService) { }

  ngOnInit(): void {
    
    this.orphanageService.init();
    this.orphanageService.getOrphanageByID(1).subscribe(data=>{
      this.orphanage =   data;
      console.log("The orphanage by ID");
      console.log(this.orphanage)
    });
      
  }

}
