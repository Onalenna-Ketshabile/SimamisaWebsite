import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEURL } from '../constants/constants';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AwsimagesService {
 
  headers: any;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json');
    this.headers.set('Accept', 'application/json')
    this.headers.set('Access-Control-Allow-Origin', '*');

  }

  readonly apiURL = `https://simamisa.herokuapp.com/s3url`;

  getUploadURL(): Observable<any> {
    return this.http.get<any>(this.apiURL, { headers: this.headers });
  }


  uploadImage(urlL: string, file: any): Observable<any> {
    const hd: any = new HttpHeaders().set('content-type', 'image/jpeg');
     return this.http.put<any>(urlL,file, { headers: hd });


  }

  readonly docsURL = `https://simamisa.herokuapp.com/s3docs`;
  getUploadDocsURL(): Observable<any> {
    return this.http.get<any>(this.docsURL, { headers: this.headers });
  }
  uploadDocument(urlL: string, file: any): Observable<any> {
    const hd: any = new HttpHeaders().set('content-type', 'application/pdf');
     return this.http.put<any>(urlL,file, { headers: hd });


  }

}
