import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orphanage } from 'src/app/models/orphanage';
import { LoaderService } from 'src/app/services/loader.service';
import { OrphanageService } from 'src/app/services/orphanage.service';
import { PartneringService } from 'src/app/services/partnering.service';

@Component({
  selector: 'app-orphanages-manager',
  templateUrl: './orphanages-manager.component.html',
  styleUrls: ['./orphanages-manager.component.css','../../../../assets/css/bootstrap.min.css',
              '../../../../assets/css/font-awesome.min.css','responsive.css']
})
export class OrphanagesManagerComponent implements OnInit {
  orphanages?: Orphanage[];
  partners!: Orphanage[];
  constructor(private orphService:OrphanageService, private partneringService: PartneringService,private route:ActivatedRoute, public loaderService:LoaderService) {
    console.log("Trying to load orphanages...");
//  this.orphanages = this.route.snapshot.data['orphanages'];
  
// route.data.subscribe(
//       data => this.orphanages = data['orphanages']
//     );
//  console.log(this.orphanages);
//   console.log("done loading!");

   }

  ngOnInit(): void {
   this.orphService.init();
   this.partneringService.GetMyPartners().subscribe(data=>{
    this.partners =data;
    console.log("Partners",this.partners)

   });
    this.orphService.getOrphanages().subscribe(data=>{
      this.orphanages =data.filter( orph => (orph.ID != Number(localStorage.getItem('orphID'))));
      console.log("Ofrphs",this.orphanages)

      if(this.partners != undefined && this.partners.length>=1){
        console.log("Partners2",this.partners)
        console.log("Has Pp-")
        this.orphanages = this.orphanages.filter( ( el ) => !this.isPartner(el.ID) );
        console.log("2222222222",this.orphanages)

      }

    });
   
  }
  isPartner(ID: number): boolean{
    let found =false; 
    for(let i = 0 ; i <this.partners!.length; i++){
      if(this.partners[i].ID == ID){
        found =true;
      }
    }
    return found;
  }
}
