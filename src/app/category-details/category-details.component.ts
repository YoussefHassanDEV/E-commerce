import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomdatapService } from '../shared/services/ecomdatap.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute, private _EcomdatapService: EcomdatapService) { }
  categoryId: any
  categoryDetails: any
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(
      {
        next: (Response) => {
          console.log(Response['id']);

          this.categoryId = Response['id']
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
    this._EcomdatapService.getCategoriesDetails(this.categoryId).subscribe(
      {
        next: (Response) => {
          console.log(Response);
          this.categoryDetails = Response.data
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

}
