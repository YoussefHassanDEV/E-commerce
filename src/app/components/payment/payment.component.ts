import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute,private _CartService:CartService) { }
  cartId:any

  orderForm:FormGroup=new FormGroup({
    details:new FormControl(''),
    phone:new FormControl(''),
    city:new FormControl(''),
  })
  handleForm(){
    console.log(this.orderForm.value);
    const orderData=this.orderForm.value
    this._CartService.checkOut(this.cartId,this.orderForm.value).subscribe({
      next: (Response) => {
        console.log(Response);
        if(Response.status=="success"){
          window.open(Response.session.url,'_self')
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (Response) => {
        console.log(Response.get('id'));
        this.cartId = Response.get('id');
      },
      error: (err) => {
        console.log(err);
      }
    })

  } 

}
