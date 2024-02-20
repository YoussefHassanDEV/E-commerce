import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient) { }


  myToken: any = {
    token: localStorage.getItem('eToken')
  }
  addToCart(prodtId: any): Observable<any> {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/cart',
      {
        productId: prodtId

      },
      {
        headers: this.myToken

      }
    )
  }
}
