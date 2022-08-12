import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/child';
import { ChildrenService } from 'src/app/services/children.service';

@Component({
  selector: 'app-children-manager',
  templateUrl: './children-manager.component.html',
  styleUrls: ['./children-manager.component.css','../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/font-awesome.min.css']
})
export class ChildrenManagerComponent implements OnInit {
  children?: Child[];
  constructor(private cService:ChildrenService) { }

  ngOnInit(): void {
    this.cService.getAllChildren().subscribe(data=>{
      this.children =data;
    });
  }

}
