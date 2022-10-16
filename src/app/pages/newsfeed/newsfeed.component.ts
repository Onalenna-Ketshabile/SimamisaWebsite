import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css','../../../assets/css/font-awesome.min.css']
})
export class NewsfeedComponent implements OnInit {
  formModal:any;
  myAngularQrCode:any
  id: any;
  constructor(private router:Router,private _Activatedroute: ActivatedRoute, public loaderService:LoaderService,private toModalservice:DataToModalsService) { }
 

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    this.myAngularQrCode="Simamisa Mobile App Link"
  }

  openModal(){
    this.formModal.show();
     console.log("Modal function is called...");
 }
 show():boolean{
  return localStorage.getItem('userRole')=="M";
 }
 search(details:{ need: string}){
  console.log(details);
  console.log("About to search ", details.need);
  this.toModalservice.setSearchNeedDetails(details.need);
 }
 setUrl():void{
  localStorage.setItem('redirectTo', this.router.url);

 }
}
