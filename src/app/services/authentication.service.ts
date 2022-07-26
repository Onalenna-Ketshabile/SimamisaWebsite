import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  readonly apiURL="http://simamisaapiv1.azurewebsites.net/simamisa/orphanages/users/login";
   
  login(details:string):Observable<User>{
   return  this.http.post<User>("http://simamisaapiv1.azurewebsites.net/simamisa/orphanages/users/login",details)
  }
}
