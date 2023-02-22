import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LocalUrl from './helper2';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(private _http: HttpClient) { }
 
  //load all the description
  public getAllDescription(){
    return this._http.get(`${LocalUrl}/eleserv/description/getAll/`);
    
    }
//get description by id
public getDescriptionById( descriptionId:any){
  return this._http.get(`${LocalUrl}/eleserv/description/findById/${descriptionId}`);
}
  
  //add a new description
  public addVendor(description:any)
  {
    return this._http.post(`${LocalUrl}/eleserv/description/add/`,description);
  }
  
 //update description
 public updateVendor(description:any)
 {
   return this._http.put(`${LocalUrl}/eleserv/description/update/`,description);
 }
}
