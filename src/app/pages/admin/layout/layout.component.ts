import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css','../../manager/main-layout/main-layout.component.css']
})
export class LayoutComponent implements OnInit {

  UserName!: Observable<String>;
  constructor(private authService:AuthenticationService) {
    this.UserName= this.authService.currentuserName;
   }

  ngOnInit(): void {
  }

}
