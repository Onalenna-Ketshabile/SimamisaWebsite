import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css','./bootstrap.min.css','./icons.min.css'],
})
export class AvatarComponent implements OnInit {
  @Input()
  name!: String|null;
  userName!: String;
  mybootstrapJs: HTMLScriptElement;
  myMinJs: HTMLScriptElement;

  constructor(private authService: AuthenticationService) { 

    this.userName = String(localStorage.getItem('userName'));
    this.mybootstrapJs = document.createElement("script");
    this.mybootstrapJs.src = "../../../assets/js/avatar/bootstrap.bundle.min.js";
    document.body.appendChild(this.mybootstrapJs);

    
    this.myMinJs = document.createElement("script");
    this.myMinJs.src = "../../../assets/js/avatar/jquery.min.js";
    document.body.appendChild(this.myMinJs);

  }

  ngOnInit(): void {
  }
   
  logout(){
    this.authService.logout().subscribe((res)=>{
       console.log("OUT");
    });
   // this.router.navigate(['/home']);
    window.location.href = 'home';
  }
}
