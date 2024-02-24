import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private _AuthService: AuthService,private _Router:Router) { }
  ngOnInit(): void {
  }
  step1:boolean=true
  step2:boolean=false
  step3:Boolean=false
  email:any
  forgetForm:FormGroup=new FormGroup({
    email:new FormControl(''),
   })
  resetCodeForm:FormGroup=new FormGroup({
    resetCode:new FormControl('')
  })
  resetPassword:FormGroup=new FormGroup({
    // email:this.forgetForm.get('email')?.value
    newPassword:new FormControl('')
  }) 
  forgetPassword(): void {
    let userEmail = this.forgetForm.value
    this.email=userEmail.email
    this._AuthService.forgetPassword(this.email).subscribe(
      {
        next: (Response) => {
          console.log(Response);
          this.step1=false
          this.step2=true
        },
        error: (err) => {
          console.log(err);
        } 
      }
     )
  }
  resetCode():void{
    this._AuthService.verifyCode(this.resetCodeForm.value.resetCode).subscribe({
      next: (Response) => {
        console.log(Response);
        this.step1=false;
        this.step2=false;
        this.step3=true
      },
      error: (err) => {
        console.log(err);
      }
    })    
  }
  resetPass():void{
    let resetForm=this.resetPassword.value
    resetForm.email=this.email
    this._AuthService.resetPassword(resetForm).subscribe({
      next: (Response) => {
        console.log(Response);
        if(Response.token){
          localStorage.setItem('eToken',Response.token)
          this._Router.navigate(['/home'])
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
