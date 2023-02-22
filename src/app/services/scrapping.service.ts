import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LocalUrl from './helper2';

@Injectable({
  providedIn: 'root'
})
export class ScrappingService {

  constructor(private _http: HttpClient) { }
 
  //load all the scrapping
  public getAllDescription(){
    return this._http.get(`${LocalUrl}/eleserv/scrapping/getAll/`);
    
    }
//get scrapping by id
public getDescriptionById( scrappingId:any){
  return this._http.get(`${LocalUrl}/eleserv/scrapping/findById/${scrappingId}`);
}
  
  //add a new scrapping
  public addDescription(scrapping:any)
  {
    return this._http.post(`${LocalUrl}/eleserv/scrapping/add/`,scrapping);
  }
  
 //update scrapping
 public updateDescription(scrapping:any)
 {
   return this._http.put(`${LocalUrl}/eleserv/scrapping/update/`,scrapping);
 }
}
