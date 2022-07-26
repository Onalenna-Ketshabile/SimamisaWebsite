import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent implements OnInit {

  constructor( private titleService: Title,private http: HttpClient,private authService:AuthenticationService) {
    titleService.setTitle("Login");
    }

  ngOnInit(): void {
  }

 login(data: {email: string, password: string}){
    let userData = {
        Email:data.email,
        UserPassword:data.password
    }

    const body= JSON.stringify(userData);
    console.log(body);
    this.authService.login(body).subscribe(data=>{
     console.log(data);
    });
  }

}
