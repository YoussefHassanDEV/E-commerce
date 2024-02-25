import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EcomdatapService {
  myToken: any = {
    token: localStorage.getItem('eToken'),
  };

  constructor(private _HttpClient: HttpClient) {
  }
  getAllProducts(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  getProducts(page: number = 1): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products?page=' + page)
  }
  getProductDetails(id: any): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getCategories(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  getBrands(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  getCategoriesDetails(id: any): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }
  getBrandsDetails(id: any): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }


}
