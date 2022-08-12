import { Component, OnInit,Input } from '@angular/core';
import { Child } from 'src/app/models/child';

@Component({
  selector: 'app-child-item-manager',
  templateUrl: './child-item-manager.component.html',
  styleUrls: ['../children-manager/children-manager.component.css']
})
export class ChildItemManagerComponent implements OnInit {
@Input()
child!:Child
  constructor() { }

  ngOnInit(): void {
  }

}
