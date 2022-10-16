import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingHandler } from 'src/app/others/loading-indicator/loading-handler';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {LoaderService} from 'src/app/services/loader.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent implements OnInit {
  returnUrl!:string;
  ErrorMessage!:string;

  loadingHandler = new LoadingHandler();
  constructor( private titleService: Title,
    private authService:AuthenticationService,
    private router:Router,
    private route:ActivatedRoute,
    public loaderService:LoaderService) {
    titleService.setTitle("Login");
    }

  ngOnInit(): void {
    if(localStorage.getItem('loggedIn')==='true'&&localStorage.getItem('userRole')==='M'){
      this.router.navigate(['/manager']); localStorage.getItem("orphID");
      console.log("The manager logged in.");
    }
    if(localStorage.getItem('loggedIn')==='true'&&localStorage.getItem('userRole')==='A'){
      this.router.navigate(['/admin']);//localStorage.getItem("orphID")
      console.log("The admin logged in.");
    }
  }

 login(data: {email: string, password: string}){
    let userData = {
        Email:data.email,
        UserPassword:data.password
    }
 

    const body= JSON.stringify(userData);
    this.loadingHandler.start();
    this.authService.login(body).subscribe(data=>{
      console.log(data);
      if(data){
      this.loadingHandler.finish();
      this.returnUrl= this.route.snapshot.queryParams['returnUrl'];

      var router = "home";
      const redirect:string = localStorage.getItem('redirectTo')!;
      if (redirect) {
       localStorage.removeItem('redirectTo');
      router = redirect;
      }
      if(this.authService.getUserRole==="M") router= 'manager' ;
    // this.router.navigateByUrl(this.returnUrl);

      if(this.authService.getUserRole==="A") router = 'admin';
     // this.router.navigateByUrl(this.returnUrl);
    
     window.location.href = router;
     console.log("router:");
     console.log(this.returnUrl);

      }
    });
  }

}
