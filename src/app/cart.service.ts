import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, count, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private _HttpClient: HttpClient) { }

  cartNumber: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  myToken: any = {
    token: localStorage.getItem('eToken'),
  };

  addToCart(prodtId: any): Observable<any> {
    return this._HttpClient.post(
      'https://route-ecommerce.onrender.com/api/v1/cart',
      {
        productId: prodtId,
      },
      {
        headers: this.myToken,
      }
    );
  }

  getCartItems(): Observable<any> {
    return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/cart',
      {
        headers: this.myToken,
      }
    );
  }

  removeCartItem(cartItemId: string): Observable<any> {
    return this._HttpClient.delete('https://route-ecommerce.onrender.com/api/v1/cart/' + cartItemId, {
      headers: this.myToken,
    });
  }
  updateCart(cartId: string, countNum: number): Observable<any> {
    return this._HttpClient.put(
      'https://route-ecommerce.onrender.com/api/v1/cart/' + cartId,
      {
        count: countNum,
      },
      {
        headers: this.myToken,
      }
    )
  }
  clearCart(): Observable<any> {
    return this._HttpClient.delete('https://route-ecommerce.onrender.com/api/v1/cart', {
      headers: this.myToken,
    })
  }
  checkOut(cartId: any, orderInfo: object): Observable<any> {
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        "shippingAddress": orderInfo
      },
      {
        headers: this.myToken,
      })
  }  
  addToFavorite(id: any): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,    {
      "productId": id
    }, {
      headers: this.myToken,
    }
    )
  }
  getLoggedFavourite(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      headers: this.myToken,
    })
  }
  removeWishList(id: any): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
      headers: this.myToken,
    })
  }
}
