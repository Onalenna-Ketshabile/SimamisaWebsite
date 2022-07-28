import { Component, OnInit,Input } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';

@Component({
  selector: 'app-vieworphanages',
  templateUrl: './vieworphanages.component.html',
  styleUrls: ['./vieworphanages.component.css']
})
export class VieworphanagesComponent implements OnInit {
@Input() orphanage!:Orphanage
  constructor() { }

  ngOnInit(): void {
  }

}
