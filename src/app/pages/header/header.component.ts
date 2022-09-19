import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

LoginStatus = new BehaviorSubject<boolean>(false);
UserRole = new BehaviorSubject<String>("");
UserName!: Observable<String>;
  constructor(private authService:AuthenticationService,
   private router:Router
   ) { }

  ngOnInit(): void {
    this.authService.globalStateChanged.subscribe((state)=>{
      this.LoginStatus.next(state.loggedInStatus);
      this.UserRole.next(state.userRole);
    });
    this.UserName= this.authService.currentuserName;
  }
  showHeader():boolean{
    return (this.router.routerState.snapshot.url.includes('login')||this.router.routerState.snapshot.url.includes('register')||this.UserRole.getValue()=='M'|| this.UserRole.getValue()=='A');

  }
 
}
