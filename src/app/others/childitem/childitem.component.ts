import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Child } from 'src/app/models/child';
import { Orphanage } from 'src/app/models/orphanage';

@Component({
  selector: 'app-childitem',
  templateUrl: './childitem.component.html',
  styleUrls: ['./../../pages/sponsor-child/sponsor-child.component.css']
})
export class ChilditemComponent implements OnInit {

  @Input()
  child!: Child;
  orphanage!: Orphanage;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelected(_child: Child): void{
     console.log(_child);
     this.router.navigate(['/orphanage/'+_child.orphanageID+'/child/'+_child.ID]);
  }

}
