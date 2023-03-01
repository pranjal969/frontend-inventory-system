import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LocalUrl from './helper2';

@Injectable({
  providedIn: 'root'
})
export class CaseidService {

  constructor(private _http: HttpClient) { }
  
  //get case details by id
public getCaseById( caseId:any){
  return this._http.get(`${LocalUrl}/eleserv/description/getCaseDetails?Id=${caseId}&details=Stagging,Dispatch,Planning,Account,ThreeDPrinting`);
}
  
}
