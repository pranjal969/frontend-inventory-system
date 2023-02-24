import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LocalUrl from './helper2';

@Injectable({
  providedIn: 'root'
})
export class StockoutService {
  constructor(private _http: HttpClient) { }
 
  //load all the Stockout
  public getAllStockout(){
    return this._http.get(`${LocalUrl}/eleserv/stock_out/getAll/`);
    
    }
//get Stockout by id
public getStockoutById( stockoutId:any){
  return this._http.get(`${LocalUrl}/eleserv/stock_out/findById/${stockoutId}`);
}
  
  //add a new Stockout
  public addStockout(stockout:any)
  {
    return this._http.post(`${LocalUrl}/eleserv/stock_out/add/`,stockout);
  }
  
 //update Stockout
 public updateStockout(stockout:any)
 {
   return this._http.put(`${LocalUrl}/eleserv/stock_out/update/`,stockout);
 }

  // delete stockout by id
  public deletestockout(stockoutId:any){
    return this._http.delete(`${LocalUrl}/eleserv/stock_out/delete/${stockoutId}`)
  }

}
