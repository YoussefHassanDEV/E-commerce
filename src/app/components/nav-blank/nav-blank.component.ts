import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit{
  constructor(private _AuthService: AuthService,private _CartService:CartService) { }
  cartNumber: any = null;  
  ngOnInit() {
    this._CartService.cartNumber.subscribe({
      next:(value)=>{
        console.log('nav',value);
        this.cartNumber=value
      }
    })
  }
  logOutUser():void{
    this._AuthService.logOut()
  }
}
