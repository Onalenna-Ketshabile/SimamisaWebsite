import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orphanage } from 'src/app/models/orphanage';
import { OrphanageService } from 'src/app/services/orphanage.service';

@Component({
  selector: 'app-orphanage-item',
  templateUrl: './orphanage-item.component.html',
  styleUrls: ['./orphanage-item.component.css']
})
export class OrphanageItemComponent implements OnInit {
  @Input()
  orphanage!: Orphanage;

  constructor(private orphService:OrphanageService,private router: Router) {

  }

   ngOnInit():void {

    }
    onSelected(): void{
      console.log(this.orphanage);
      this.router.navigate(['/orphanage-single/'+this.orphanage.ID]);
   }

}
