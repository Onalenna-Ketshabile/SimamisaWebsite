import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orphanage } from 'src/app/models/orphanage';
import { OrphanageService } from 'src/app/services/orphanage.service';

@Component({
  selector: 'app-orphanage-single',
  templateUrl: './orphanage-single.component.html',
  styleUrls: ['./orphanage-single.component.css','./bootstrap.min.css']
})
export class OrphanageSingleComponent implements OnInit {

  orphanage!: Orphanage;
 
  constructor(private route: ActivatedRoute,private orphanageService: OrphanageService) { }

  ngOnInit(): void {
    

    
    this.orphanageService.init();
    this.orphanageService.getOrphanages().subscribe(data=>{
      console.log("Data Before: ", data);
     this.orphanage =   data[this.route.snapshot.params['id'] - 1];
      console.log("The orphanage by ID: " + this.route.snapshot.params['id']) ;
      console.log(data)
      console.log("###################");
    });
      
  }

}
