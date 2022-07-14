import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class RegisterComponent implements OnInit {

  constructor(private titleService: Title) { 
    titleService.setTitle("Register");
  }

  ngOnInit(): void {
  }

}
