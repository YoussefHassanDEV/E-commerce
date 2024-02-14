import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isValid: boolean = false;
  typical: boolean = true;
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email,]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    repassword: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^$01[0125][0-9]{8}/)])

  });
  constructor(private _authService: AuthService) {
    
  }
  checkSame(){
    if(this.registerForm.get('password')?.value===this.registerForm.get('repassword')?.value){
      this.typical=true;
    }
    else{
      this.typical=false;
    }
  }
  handleForm(form: FormGroup) {
    console.log(12)
    if (form.valid) {
      //call api
    }
    else {
      this.isValid = true
    }
  }
}
