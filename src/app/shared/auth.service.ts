import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _httpClient: HttpClient,private _Router:Router) {
  }
  logOut():void{
    localStorage.removeItem('eToken')
    this._Router.navigate(['/login'])
  }
  setRegister(userData: object): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userData);
  }
  setLogin(userData: object): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, userData);
  }
}
