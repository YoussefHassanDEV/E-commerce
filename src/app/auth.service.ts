import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) {

  }
  signup(info: User): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', info)
  }
}
