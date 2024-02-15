import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // isValid: boolean = false;
  typical: boolean = false;
  // constructor(private _AuthService: AuthService) {}  
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required, Validators.email,]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^[0][1][0125][0-9]{8}$/)])

  });
  constructor(private _AuthService: AuthService) {

  }
  handleForm() {
    if (this.registerForm.valid) {
      this._AuthService.setRegister(this.registerForm.value).subscribe({
        next: (Response) => {
          console.log(Response);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    else {
      console.log("error ");
    }
  }

  checkPass() {
    this.typical = this.registerForm.get('password')?.value === this.registerForm.get('repassword')?.value ? true : false;
    if (this.typical) {
      this.registerForm.controls['repassword'].setErrors(null);
    } else {
      this.registerForm.controls['repassword'].setErrors({ 'mismatch': true });

    }
  }
}
