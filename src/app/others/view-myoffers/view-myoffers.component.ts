import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-myoffers',
  templateUrl: './view-myoffers.component.html',
  styleUrls: ['./../../pages/manager/my-offers/my-offers.component.css','../../../assets/css/bootstrap.min.css','../../../assets/css/font-awesome.min.css']
})
export class ViewMyoffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  openModal(){
    //this.formModal.show();
     console.log("Modal function is called...");
 }
 show():boolean{
  return localStorage.getItem('userRole')=="M";
 }
}