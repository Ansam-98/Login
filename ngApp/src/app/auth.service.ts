import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _registerUrl = "http://localhost:3000/api/register";
private _loginUrl = "http://localhost:3000/api/login";

private _registerUrl2 = "http://localhost:3000/api/registeradmin";
private _loginUrl2 = "http://localhost:3000/api/admin";


constructor(private http:HttpClient) { }

  registerUser(user:any){
    return this.http.post<any>(this._registerUrl,user)
  }
  loginUser(user:any){
    return this.http.post<any>(this._loginUrl,user)
  }

  registerAdmin(admin:any){
    return this.http.post<any>(this._registerUrl2,admin)
  }
   loginAdmin(admin:any){
    return this.http.post<any>(this._loginUrl2,admin)
  }

  loggedIn():any{
    return !!localStorage.getItem('token')
  }

  getToken():any{
return localStorage.getItem('token')
  }

}
