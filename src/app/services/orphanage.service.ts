import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Orphanage} from '../models/orphanage';
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrphanageService {
  private orphanages = new BehaviorSubject<Orphanage[]>([]);

  constructor(private http:HttpClient) {
   
  }

  readonly apiURL ="https://simamisaapiv3.azurewebsites.net/simamisa/orphanages";
  
  public init():void {
    this.http.get<Orphanage[]>(this.apiURL).subscribe(
      (orphs)=>{
        this.orphanages.next(orphs);
        console.log(this.orphanages);
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