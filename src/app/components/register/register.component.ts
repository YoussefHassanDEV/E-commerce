import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // isValid: boolean = false;
  typical: boolean = false;
  isloading: boolean = false;
  msgError:string=''
  // constructor(private _AuthService: AuthService) {}  
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    email: new FormControl(null, [Validators.required, Validators.email,]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^.{6,20}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^[0][1][0125][0-9]{8}$/)])

  });
  constructor(private _AuthService: AuthService,private _Router:Router) {

  }
  handleForm() {
    if (this.registerForm.valid) {
      this.isloading = true;
      this._AuthService.setRegister(this.registerForm.value).subscribe({
        next: (Response) => {
          if(Response.message === "success"){
            this._Router.navigate(['/login'])
          }
          console.log(Response);
        },
        error: (err:HttpErrorResponse ) => {
          this.isloading = false;
            this.msgError=err.error.message
            console.log(this.msgError);

        }
      })
    }
    else {
      console.log("error ");
    }
  }

  checkPass() {
    this.typical = this.registerForm.get('password')?.value === this.registerForm.get('rePassword')?.value ? true : false;
    if (this.typical) {
      this.registerForm.controls['rePassword'].setErrors(null);
    } else {
      this.registerForm.controls['rePassword'].setErrors({ 'mismatch': true });

    }
  }
}
