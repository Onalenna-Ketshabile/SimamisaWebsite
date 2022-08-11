import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/child';
import { ChildrenService } from 'src/app/services/children.service';

@Component({
  selector: 'app-my-children',
  templateUrl: './my-children.component.html',
  styleUrls: ['./my-children.component.css']
})
export class MyChildrenComponent implements OnInit {

  children?: Child[];

  constructor(private children_service:ChildrenService) { }

  ngOnInit(): void {
   this.children_service.getAllChildren().subscribe(data=>{
     this.children =data;
   });
 }
}
