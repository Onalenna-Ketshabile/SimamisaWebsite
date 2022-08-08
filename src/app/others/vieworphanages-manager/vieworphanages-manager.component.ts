import { Component, Input, OnInit } from '@angular/core';
import { Orphanage } from 'src/app/models/orphanage';

@Component({
  selector: 'app-vieworphanages-manager',
  templateUrl: './vieworphanages-manager.component.html',
  styleUrls: ['./vieworphanages-manager.component.css','../../../assets/css/bootstrap.min.css',
  '../../../assets/css/font-awesome.min.css',]
})
export class VieworphanagesManagerComponent implements OnInit {
  @Input() orphanage!:Orphanage
  constructor() { }

  ngOnInit(): void {
  }

}
