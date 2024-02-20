import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  

params: any;
  productDetails:any; 
  constructor(private _ActivatedRoute: ActivatedRoute, private _EcomdatapService: EcomdatapService) { }
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

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
