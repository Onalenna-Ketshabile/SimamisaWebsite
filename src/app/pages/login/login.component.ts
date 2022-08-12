import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent implements OnInit {
  returnUrl!:string;
  ErrorMessage!:string;

  constructor( private titleService: Title,
    private authService:AuthenticationService,
    private router:Router,
    private route:ActivatedRoute) {
    titleService.setTitle("Login");
    }

  ngOnInit(): void {
    if(localStorage.getItem('loggedIn')==='true'&&localStorage.getItem('userRole')==='M'){
      this.router.navigate(['/manager']);
    }
  }

 login(data: {email: string, password: string}){
    let userData = {
        Email:data.email,
        UserPassword:data.password
    }
 

    const body= JSON.stringify(userData);
    
    this.authService.login(body).subscribe(data=>{
      console.log(data);
      this.returnUrl= this.route.snapshot.queryParams['returnUrl'];
      if(this.authService.getUserRole==="M") this.returnUrl = this.route.snapshot.queryParams['returnUrl']||'/manager';
      this.router.navigateByUrl(this.returnUrl);
  
    });
  }

}
