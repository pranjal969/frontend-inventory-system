import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LocalUrl from './helper2';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private _http: HttpClient) { }
 
  //load all the Vendor
  public getAllVendor(){
    return this._http.get(`${LocalUrl}/eleserv/vendor/getAll/`);
    
    }
//get Vendor by id
public getVendorById( vendorId:any){
  return this._http.get(`${LocalUrl}/eleserv/vendor/findById/${vendorId}`);
}
  
  //add a new Vendor
  public addVendor(vendor:any)
  {
    return this._http.post(`${LocalUrl}/eleserv/vendor/add/`,vendor);
  }
  
 //update Vendor
 public updateVendor(vendor:any)
 {
   return this._http.put(`${LocalUrl}/eleserv/vendor/update/`,vendor);
 }

   // delete vendor by id
   public deletevendor(vendorId:any){
    return this._http.delete(`${LocalUrl}/eleserv/vendor/delete/${vendorId}`)
  }
}
