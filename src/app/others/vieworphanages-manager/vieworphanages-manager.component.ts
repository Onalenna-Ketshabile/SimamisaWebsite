import { Component, Input, OnInit } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';
import { OrphanageService } from 'src/app/services/orphanage.service';
import { PartneringService } from 'src/app/services/partnering.service';

@Component({
  selector: 'app-vieworphanages-manager',
  templateUrl: './vieworphanages-manager.component.html',
  styleUrls: ['./vieworphanages-manager.component.css','../../../assets/css/bootstrap.min.css',
  '../../../assets/css/font-awesome.min.css',]
})
export class VieworphanagesManagerComponent implements OnInit {
  @Input() orphanage!:Orphanage;
  
  orphanages?: Orphanage[];

  constructor(private orphService:OrphanageService,private partneringService: PartneringService) { }

  ngOnInit(): void {
   // this.orphService.init();
    this.orphService.getOrphanages().subscribe(data=>{
      this.orphanages =data;
    });
  }
  sendPartneringRequest(): void{
    this.partneringService.sendRequest(localStorage.getItem("orphID"),this.orphanage.ID+"").subscribe(data => {
      console.log(data);
        
  });
    console.log("Send Partnering Request To: " + this.orphanage.ID + "By " + localStorage.getItem("orphID"));
  }
  

}
