import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
[x: string]: any;
  constructor(private _EcomdatapService: EcomdatapService,private _CartService:CartService,private _ToastrService: ToastrService) {

  }
  products: any[] = []
  categories: any[] = []
  // categories:Category[]=[]
  ngOnInit(): void {
    this._EcomdatapService.getAllProducts().subscribe({
      next: (Response) => {
        console.log(Response);
        this.products = Response.data
        this._CartService.cartNumber.next(Response.numOfCartItems)
        
      },
      error: (err) => {
        console.log(err);
      }
    })
    this._EcomdatapService.getCategories().subscribe({
      next: (Response) => {
        this.categories = Response.data
        console.log(this.categories);
        this._CartService.cartNumber.next(Response.numOfCartItems)

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

addProduct(id:string){
  this._CartService.addToCart(id).subscribe({
    next:(Response)=>
    {
      console.log(Response);
      this._ToastrService.success("added to cart");
      this._CartService.cartNumber.next(Response.numOfCartItems)

    },
    error:(err)=>
    {
      console.log(err);
      
    }
  })
}

  CategoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  mainSlide: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,

    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

}
