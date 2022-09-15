import { Component, OnInit } from '@angular/core';
import { da } from 'date-fns/locale';
import { Orphanage } from 'src/app/models/orphanage';
import { PartneringService } from 'src/app/services/partnering.service';

@Component({
  selector: 'app-my-partners',
  templateUrl: './my-partners.component.html',
  styleUrls: ['./my-partners.component.css','../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/font-awesome.min.css']
})
export class MyPartnersComponent implements OnInit {
  orphanages!: Orphanage[];
  constructor(private partneringService: PartneringService) { }

  ngOnInit(): void {
    this.partneringService.GetMyPartners().subscribe(data=>{
      this.orphanages =data;
      console.log("Data received:", this.orphanages);
    });
  
  }
  
  

}
