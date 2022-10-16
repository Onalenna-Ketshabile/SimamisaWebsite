import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Child } from 'src/app/models/child';
import { ChildrenService } from 'src/app/services/children.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-sponsor-child',
  templateUrl: './sponsor-child.component.html',
  styleUrls: ['./sponsor-child.component.css']
})
export class SponsorChildComponent implements OnInit {

  children!: Child[];
  totalLength:any;
  page:number=1;
  invalidUser = false;
  constructor(private router:Router,private children_service:ChildrenService, public loaderService:LoaderService) { }

  ngOnInit(): void {
   this.children_service.getAllChildren().subscribe(data=>{
     this.children =data;
     console.log(data[0]);
   });
 }

 show():boolean{
  if(localStorage.getItem("userRole")==null &&localStorage.getItem("userName")==null ){
    return false;
  }else{
    return true;
  }
 }
 onChildClicked(element: any) {
  if(!this.show()){
     //Please Register
     localStorage.setItem('redirectTo', this.router.url);
     this.router.navigate(['./login']);
  }
}


}
