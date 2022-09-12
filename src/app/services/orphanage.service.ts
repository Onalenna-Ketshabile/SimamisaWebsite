import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Orphanage} from '../models/orphanage';
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASEURL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class OrphanageService {
  private orphanages = new BehaviorSubject<Orphanage[]>([]);
  headers: any;
  constructor(private http:HttpClient) {
    console.log("Constructor called.");
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json');
    this.headers.set( 'Accept','application/json')
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.init();
  }

  readonly apiURL =`${BASEURL}/`;
  
  public init():void {
    console.log("Inside the init.")
    this.http.get<Orphanage[]>(this.apiURL,{headers:this.headers}).subscribe(
      
      (orphs)=>{
        this.orphanages.next(orphs);
        console.log("Done with Init.");
      }
    )
    
    console.log("Out but not done.");
  }

  public getOrphanages():Observable<Orphanage[]>{
  console.log("Inside a method");
  console.log(this.orphanages);
  
    return this.orphanages;
  }

  getOrphanageByID(id: number): Observable<any>{
    return this.getOrphanages().pipe(
        map(orphs => orphs.find(orph => orph.ID === id))
    );
}
 

}