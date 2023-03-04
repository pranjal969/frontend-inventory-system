import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LocalUrl from './helper2';

@Injectable({
  providedIn: 'root'
})
export class StockinService {

  constructor(private _http: HttpClient) { }
 
  //load all the Stockin
  public getAllStockin(){
    return this._http.get(`${LocalUrl}/eleserv/stock_in/getAll/`);
    
    }
//get Stockin by id
public getStockinById( stockinId:any){
  return this._http.get(`${LocalUrl}/eleserv/stock_in/findById/${stockinId}`);
}
  
  //add a new Stockin
  public addStockIn(stockIn:any)
  {
    return this._http.post(`${LocalUrl}/eleserv/stock_in/add/`,stockIn);
  }
  
 //update Stockin
 public updateStockIn(stockIn:any)
 {
   return this._http.put(`${LocalUrl}/eleserv/stock_in/update/`,stockIn);
 }


  // delete stockin by id
public deletestockin(stockinId:any){
  return this._http.delete(`${LocalUrl}/eleserv/stock_in/delete/${stockinId}`)
}


  // delete total  stockin
  public getTotalStockIn(){
    return this._http.get(`${LocalUrl}/eleserv/total_stock_in/getAll/`);
  }


}
