import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Orphanage } from 'src/app/models/orphanage';
import { OrphanageService } from '../orphanage.service';

@Injectable({
  providedIn: 'root'
})
export class OrphanagesResolverService implements Resolve<Orphanage[]> {

  constructor(private orphanageService: OrphanageService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Orphanage[]>  {
    console.log("Resolver called.");
   // this.orphanageService.init();

    
    return this.orphanageService.getOrphanages();
  }
  
  

}
