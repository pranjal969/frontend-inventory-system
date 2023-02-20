import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LocalUrl from './helper2';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private _http: HttpClient) { }

//
//load all the categories
public categories(){
  return this._http.get(`${LocalUrl}/eleserv/inventory/getAll/`);
  
  }

}
