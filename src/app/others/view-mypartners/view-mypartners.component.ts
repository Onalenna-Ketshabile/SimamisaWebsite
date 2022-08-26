import { Component, Input, OnInit } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
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
  
  constructor(private partneringService: PartneringService) { }

  ngOnInit(): void {
    this.partneringService.GetMyPartners().subscribe(data=>{
      this.orphanages =data;
    });
  }

}
