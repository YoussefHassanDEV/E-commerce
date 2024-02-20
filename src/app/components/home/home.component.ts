import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
[x: string]: any;
  constructor(private _EcomdatapService: EcomdatapService) {

  }
  products: any[] = []
  categories: any[] = []
  // categories:Category[]=[]
  ngOnInit(): void {
    this._EcomdatapService.getAllProducts().subscribe({
      next: (Response) => {
        console.log(Response);
        this.products = Response.data
      },
      error: (err) => {
        console.log(err);
      }
    })
    this._EcomdatapService.getCategories().subscribe({
      next: (Response) => {
        this.categories = Response.data
        console.log(this.categories);

      },
      error: (err) => {
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
