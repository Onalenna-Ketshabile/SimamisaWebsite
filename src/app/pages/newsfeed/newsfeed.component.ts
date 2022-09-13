import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  formModal:any;
  myAngularQrCode:any
  constructor(private authService:AuthenticationService,) { }
 

  ngOnInit(): void {
    this.myAngularQrCode="Simamisa Mobile App Link"
  }

  openModal(){
    this.formModal.show();
     console.log("Modal function is called...");
 }
 show():boolean{
  return localStorage.getItem('userRole')=="M";
 }
}
