import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LocalUrl from './helper2';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  constructor(private _http: HttpClient) { }

  
  //load all the materials
  public material(){
    return this._http.get(`${LocalUrl}/eleserv/material/getAll/`);
    
    }
//get material by id
public getMaterialById( materialId:any){
  return this._http.get(`${LocalUrl}/eleserv/material/findById/${materialId}`);
}
  
  //add a new material
  public addMaterial(material:any)
  {
    return this._http.post(`${LocalUrl}/eleserv/material/add/`,material);
  }
  
 //update material
 public updateMaterial(material:any)
 {
   return this._http.put(`${LocalUrl}/eleserv/material/update/`,material);
 }

}
