import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, AfterViewInit {

  constructor(private authService:AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
   
  }
  logout(){
    this.authService.logout().subscribe((res)=>{
       console.log("OUT");
    });
   // this.router.navigate(['/home']);
    window.location.href = 'home';
  }
  ngAfterViewInit(): void{
    this.logout();
  }
}
