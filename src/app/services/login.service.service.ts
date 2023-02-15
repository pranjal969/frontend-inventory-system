import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  //current user
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/login`, loginData);
  }


}
