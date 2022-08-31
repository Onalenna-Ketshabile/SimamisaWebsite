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
    this.headers= new HttpHeaders()
    .set('content-type', 'application/json');
    this.headers.set( 'Accept','application/json')
    this.headers.set('Access-Control-Allow-Origin', '*');
  }

  readonly apiURL =`${BASEURL}/`;
  
  public init():void {
    this.http.get<Orphanage[]>(this.apiURL,{headers:this.headers}).subscribe(
      (orphs)=>{
        this.orphanages.next(orphs);

      }
    )
  }

  public getOrphanages():Observable<Orphanage[]>{
 
    return this.orphanages;
  }

  getOrphanageByID(id: number): Observable<Orphanage|undefined>{
    return this.getOrphanages().pipe(
        map(orphs => orphs.find(orph => orph.ID === id))
    );
}
 

}