import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  loginStatusSubject: any;

  constructor(private http: HttpClient) { }

  //current user
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/login`, loginData);
  }
//set user details in local storage
  public setUser(username: any) {
    localStorage.setItem("username", JSON.stringify(username));

  }

//user is login or not
public isloggedIn() {
  let tokenStr = localStorage.getItem("username")
  if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
    return false;
  }
  else {
    return true;
  }

}
//logout : remove user from local storage
public logout() {
  localStorage.removeItem("username");
 
  return true;
}

 //get user
 public getUser() {
  let userStr = localStorage.getItem("username");
  if (userStr != null) {
    return JSON.parse(userStr);
  }
  else {
    this.logout();
    return null;
  }
}


}
