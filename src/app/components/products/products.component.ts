import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart.service';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = []
  pageSize: number=0;
  currentPage: number=1;
  total: number=0
  constructor(private _EcomdatapService: EcomdatapService, private _CartService: CartService,private _ToastrService: ToastrService ) {

  }
  ngOnInit(): void {
    this._EcomdatapService.getProducts().subscribe({
      next: (Response) => {
        console.log(Response);
        this.products = Response.data
        this.pageSize = Response.metadata.limit
        this.total = Response.results
        this.currentPage =Response.metadata.currentPage
        this._CartService.cartNumber.next(Response.numOfCartItems)

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  addProduct(id: string) {
    this._CartService.addToCart(id).subscribe({
      next: (Response) => {
        console.log(Response);
        this._ToastrService.success("added to cart");
        this._CartService.cartNumber.next(Response.numOfCartItems)

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  pageChanged(event:any):void{
     console.log(event);
     this._EcomdatapService.getProducts(event).subscribe({
      next: (Response) => {
        console.log(Response);
        this.products = Response.data
        this.pageSize = Response.metadata.limit
        this.total = Response.results
        this.currentPage =Response.metadata.currentPage
        this._CartService.cartNumber.next(Response.numOfCartItems)

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
