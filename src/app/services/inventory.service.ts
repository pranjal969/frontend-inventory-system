import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LocalUrl from './helper2';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private _http: HttpClient) { }

//load all the categories
public categories(){
  return this._http.get(`${LocalUrl}/eleserv/categories/getAll/`);
  
  }

//get category by id
public getCategoryById( categoryId:any){
  return this._http.get(`${LocalUrl}/eleserv/categories/findById/${categoryId}`);
}
  
  //add a new category
  public addCategory(category:any)
  {
    return this._http.post(`${LocalUrl}/eleserv/categories/add/`,category);
  }
  
 //update category
 public updateCategory(category:any)
 {
   return this._http.put(`${LocalUrl}/eleserv/categories/update/`,category);
 }


}
