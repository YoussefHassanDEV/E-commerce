import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  isloading: boolean = false;
  msgError: string = ''
  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email,]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^.{6,20}$/)]),

  });
  handleForm() {
    if (this.LoginForm.valid) {
      this.isloading = true;

      this._AuthService.setLogin(this.LoginForm.value).subscribe({
        next: (Response) => {
          if (Response.message === "success") {
            this.isloading = false;
            localStorage.setItem('eToken', Response.token)
            this._Router.navigate(['/home']) 
          }
          console.log(Response);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);

          this.isloading = false;
          this.msgError = err.error.message
          console.log(this.msgError);

        }
      })
    }
    else {
      console.log("error ");
    }
  }

}
