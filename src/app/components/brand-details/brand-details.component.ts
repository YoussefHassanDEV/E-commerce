import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute ,private _EcomdatapService: EcomdatapService) { }
  brandDetails: any
  brandId: any
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(
      {
        next: (Response) => {
          console.log(Response['id']);
          this.brandId = Response['id']
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
    this._EcomdatapService.getBrandsDetails
    (this.brandId).subscribe(
      {
        next: (Response) => {
          this.brandDetails = Response.data
          console.log(Response);

          console.log("brandssss",this.brandDetails);

        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }


}
