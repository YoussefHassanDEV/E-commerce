import { Component, OnInit } from '@angular/core';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  constructor(private _EcomdatapService: EcomdatapService) { }
  brands: any
  ngOnInit(): void {
    this._EcomdatapService.getBrands().subscribe(
      {
      next: (Response) => {
          console.log(Response);
          this.brands = Response.data
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

}
