import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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

  LoginStatus= new BehaviorSubject<boolean>(false);
  UserRole = new BehaviorSubject<String>("U");

  constructor( private titleService: Title,
    private authService:AuthenticationService,
    private router:Router,
    private route:ActivatedRoute) {
    titleService.setTitle("Login");
    }

  ngOnInit(): void {
    this.authService.globalStateChanged.subscribe((state)=>{
      this.LoginStatus.next(state.loggedInStatus);
      this.UserRole.next(state.userRole);
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl']||'/';
    if(this.LoginStatus.getValue()){
      this.router.navigate(["/"]);
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
      if(this.UserRole.getValue()==="M") this.returnUrl = this.route.snapshot.queryParams['returnUrl']||'/manager';
     this.router.navigateByUrl(this.returnUrl);
    });
  }

}
