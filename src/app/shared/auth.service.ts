import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { 
  }
  setRegister(userData:object)
  {
    this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userData)
  }
}
