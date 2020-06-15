import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormErrorMatcher } from "../../services/form-error-matcher";
import { User } from "../../models/user.model";
import { RegisterService } from '../../services/register.service';
import { OpenSnackBarService } from "../../services/open-snack-bar.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  matcher = new FormErrorMatcher();
  matchPass: boolean = false;

  registerUser = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(/([a-zA-Z]{1}[\w]+)@([\w]+\.)([\w])+/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    rePassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/([0-9])/)]),
  })

  get username() { return this.registerUser.get('username'); }
  get password() { return this.registerUser.get('password'); }
  get rePassword() { return this.registerUser.get('rePassword'); }
  get phoneNumber() { return this.registerUser.get('phoneNumber'); }

  constructor(
    private registerService: RegisterService,
    private _snackBar: OpenSnackBarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('in register', this.password.value === this.rePassword.value)
    if (this.password.value === this.rePassword.value) {
      let user: User = this.registerUser.value;
      user.userType = 'user';
      this.registerService.createCustomer(user)
        .subscribe(result => {
          this.registerUser.reset({});
          this._snackBar.open('User created successfully', '');
          this.router.navigate(['/login']);
        })
    } else {
      this.matchPass = true;
      // this._snackBar.open('The re-password do not match with the password', '');
    }

  }

}
