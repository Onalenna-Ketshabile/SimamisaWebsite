import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Childneed } from '../models/childneed';
import { ChildUpdate } from '../models/childupdate';
import { Need } from '../models/need';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class DataToModalsService {

  private _offerDataSource = new Subject<Offer>();
  offerDatasent$ = this._offerDataSource.asObservable();

  private _needDataSource = new Subject<Need>();
  needDatasent$ = this._needDataSource.asObservable();

  private _childNeedDataSource = new Subject<Childneed>();
  childNeedDatasent$ = this._childNeedDataSource.asObservable();

  private _childUpdateDataSource = new Subject<ChildUpdate>();
  childUpdateDatasent$ = this._childUpdateDataSource.asObservable();

  private _makeOfferDataSource = new Subject<Number>();
  makeOfferDatasent$ = this._makeOfferDataSource.asObservable();

   
  constructor() { }
  
  setOfferDetails(offer: Offer){
    this._offerDataSource.next(offer);
  }

  setNeedDetails(need: Need){
    this._needDataSource.next(need);
  }
  setChildNeedDetails(childNeed: Childneed){
    this._childNeedDataSource.next(childNeed);
  }
  setChildUpdateDetails(childUpdate: ChildUpdate){
    this._childUpdateDataSource.next(childUpdate);
  }
  setToOrphanageID(ID: number){
    console.log("Orphanaged clicked has ID " + ID);
   this._makeOfferDataSource.next(ID);
  }

}
