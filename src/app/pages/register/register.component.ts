import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class RegisterComponent implements OnInit {

  user: any;

  constructor(private titleService: Title,private http: HttpClient) { 
    titleService.setTitle("Register");

    this

  }

  ngOnInit(): void {
  }
  getUserRegistrationData(data: {name: string,surname: string, dob: string, address: string,email: string,phone: string,password: string,password_confirm: string}){
    console.log(data);
    this.http.post("http://simamisaapiv1.azurewebsites.net/simamisa/orphanages/users/register",data)
    .subscribe((res) => { console.log(res)});
    
  }

}
