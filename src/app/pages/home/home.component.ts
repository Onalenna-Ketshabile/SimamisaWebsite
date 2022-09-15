import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private titleService: Title,private router:Router) {
   titleService.setTitle("Home");
   }

  ngOnInit(): void {
    if(localStorage.getItem('userRole')=='M'){
      this.router.navigate(['/manager']);
    }
  }

  show() :boolean{
     return !(localStorage.getItem('userRole')=='M');
  }

}
