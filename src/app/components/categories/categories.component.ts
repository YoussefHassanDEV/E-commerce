import { Component, OnInit } from '@angular/core';
import { EcomdatapService } from 'src/app/shared/services/ecomdatap.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
  categories: any;
  constructor(private _EcomdatapService: EcomdatapService) {
  }
  ngOnInit(): void {
    this._EcomdatapService.getCategories().subscribe(
      {
        next: (Response) => {
          this.categories = Response.data
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
    
  }

  
}
