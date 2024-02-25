import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {


  constructor(private _CartService:CartService) { }
  wishListData:any[]=[]
  ngOnInit(): void {
    this._CartService.getLoggedFavourite().subscribe({
      next: (response) => {
        console.log(response);
        this.wishListData = response.data
        console.log(this.wishListData);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  removeWishList(id:any){
    this._CartService.removeWishList(id).subscribe({
      next: (response) => {
        console.log(response);
        this.ngOnInit()
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
