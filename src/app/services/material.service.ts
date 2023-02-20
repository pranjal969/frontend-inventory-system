import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LocalUrl from './helper2';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  constructor(private _http: HttpClient) { }

  //
  //load all the categories
  public material(){
    return this._http.get(`${LocalUrl}/eleserv/material/getAll/`);
    
    }
  
}
