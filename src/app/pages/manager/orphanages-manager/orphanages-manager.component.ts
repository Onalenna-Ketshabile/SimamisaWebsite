import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orphanage } from 'src/app/models/orphanage';
import { LoaderService } from 'src/app/services/loader.service';
import { OrphanageService } from 'src/app/services/orphanage.service';

@Component({
  selector: 'app-orphanages-manager',
  templateUrl: './orphanages-manager.component.html',
  styleUrls: ['./orphanages-manager.component.css','../../../../assets/css/bootstrap.min.css',
              '../../../../assets/css/font-awesome.min.css','responsive.css']
})
export class OrphanagesManagerComponent implements OnInit {
  orphanages?: Orphanage[];
  constructor(private orphService:OrphanageService, private route:ActivatedRoute, public loaderService:LoaderService) {
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
    this.orphService.getOrphanages().subscribe(data=>{
      this.orphanages =data.filter( orph => (orph.ID != Number(localStorage.getItem('orphID'))));
    });
  }
}
