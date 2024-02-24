import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart.service';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  params: any;
  productDetails: any;
  constructor(private _ActivatedRoute: ActivatedRoute, private _EcomdatapService: EcomdatapService, private _CartService: CartService, private _ToastrService: ToastrService) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (Response) => {
        this.params = Response.get('id')
        console.log(this.params);

      },
      error: (err) => {
        console.log(err);
      }
    })
    this._EcomdatapService.getProductDetails(this.params).subscribe({
      next: (Response) => {
        this.productDetails = Response.data
        console.log(this.productDetails);
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
        // console.log(Response);
        console.log(Response.numOfCartItems);
        this._ToastrService.success("added to cart");
        this._CartService.cartNumber.next(Response.numOfCartItems)

      },
    error: (err) => {
        console.log(err);

      }
    })
  }
}
