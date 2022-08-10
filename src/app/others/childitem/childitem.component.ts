import { Component, Input, OnInit } from '@angular/core';
import { Child } from 'src/app/models/child';

@Component({
  selector: 'app-childitem',
  templateUrl: './childitem.component.html',
  styleUrls: ['./../../pages/sponsor-child/sponsor-child.component.css']
})
export class ChilditemComponent implements OnInit {

  @Input()
  child!: Child;
  constructor() { }

  ngOnInit(): void {
  }

}
