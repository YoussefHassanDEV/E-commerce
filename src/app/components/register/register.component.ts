import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isValid: boolean = false;
  typical: boolean = true;
  constructor(private _AuthService: AuthService) {}
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required, Validators.email,]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    repassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^$[0][1][0125][0-9]{8}/)])

  });
  k()
  {
    console.log(this.registerForm.get('name')?.errors);
    
  }
  checkSame() {
    if (this.registerForm.get('password')?.value === this.registerForm.get('repassword')?.value) {
      this.typical = true;
    }
    else {
      this.typical = false;
    }
  }
  handleForm(form: FormGroup) :void{
    console.log(12)
    if (form.valid) {
      //call api
      console.log(form.value);
      
      // this._AuthService.setRegister(form.value) 
    }
    else {
      // this.isValid = true
    }
  }
}
