import { Component, Input, OnInit } from '@angular/core';
import { Childneed } from 'src/app/models/childneed';

@Component({
  selector: 'app-child-need-item',
  templateUrl: './child-need-item.component.html',
  styleUrls: ['../child-needs/child-needs.component.css']
})
export class ChildNeedItemComponent implements OnInit {
@Input()
childneed!:Childneed
  constructor() { }

  ngOnInit(): void {
  }

}
