import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent implements OnInit {

  constructor( private titleService: Title,private http: HttpClient) {
    titleService.setTitle("Login");
    }

  ngOnInit(): void {
  }

  getUserLoginData(data: {email: string, password: string}){
    console.log(data);
    this.http.post("http://simamisaapiv1.azurewebsites.net/simamisa/orphanages/users/login",data)
    .subscribe((res) => { console.log(res)});
  }

}
