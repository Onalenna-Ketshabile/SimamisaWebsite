import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class RegisterComponent implements OnInit {

  user: any;
  returnUrl!: string;
  ErrorMessage!: string;
  constructor(private titleService: Title, private authService: AuthenticationService,
    private router: Router, private route: ActivatedRoute) {
    titleService.setTitle("Register");

    this

  }

  ngOnInit(): void {
  }
  getUserRegistrationData(data: { name: string, surname: string,gender: string, dob: string, address: string, email: string, phone: string, password: string, password_confirm: string }) {
    let userData = {
      FirstName: data.name,
      Surname: data.surname,
      Email: data.email,
      Phonenumber: data.phone,
      Status: "new",
      isFlagged: "false",
      isVolunteer: "0",
      isSponsor: "0",
      isDonor: "0",
      UserPassword: data.password,
      UserAddress: data.address,
      UserRole: "R"
    }
    const body = JSON.stringify(userData);

    this.authService.register(body).subscribe(data => {
      console.log(data);
    
      this.router.navigate(['./login']);
    });
  }

}
