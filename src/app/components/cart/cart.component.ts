import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {
    {

    }

  }
  cartDetails: any;
  ngOnInit(): void {
    this._CartService.getCartItems().subscribe({
      next: (Response) => {
        this.cartDetails = Response.data
        console.log(Response);
        this._CartService.cartNumber.next(Response.numOfCartItems)


      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  removeItem(id: string) {
    this._CartService.removeCartItem(id).subscribe({
      next: (Response) => {
        this.cartDetails = Response.data
        console.log(Response);
        this._CartService.cartNumber.next(Response.numOfCartItems)

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  ChangeCount(count: number, id: string) {
    console.log(count);

    if (count >= 1) {
      this._CartService.updateCart(id, count).subscribe({
        next: (Response) => {
          this.cartDetails = Response.data
          console.log(Response);
          this._CartService.cartNumber.next(Response.numOfCartItems)

        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    else {
      this.cartDetails =null
      this.removeItem(id);
    }
  }
  clearCart() {
    this._CartService.clearCart().subscribe({
      next: (Response) => {
        this.cartDetails = null
        console.log(Response);
        this._CartService.cartNumber.next(Response.numOfCartItems)

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}

