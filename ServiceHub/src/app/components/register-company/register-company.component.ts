import { Component, OnInit } from '@angular/core';
import { FormErrorMatcher } from 'src/app/services/form-error-matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { OpenSnackBarService } from 'src/app/services/open-snack-bar.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {

  matcher = new FormErrorMatcher();

  registerCompany = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/([0-9])/)]),
    address: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.pattern(/([a-zA-Z]{1}[\w]+)@([\w]+\.)([\w])+/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    rePassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
  })

  get name() { return this.registerCompany.get('name'); }
  get phoneNumber() { return this.registerCompany.get('phoneNumber'); }
  get address() { return this.registerCompany.get('address'); }
  get username() { return this.registerCompany.get('username'); }
  get password() { return this.registerCompany.get('password'); }
  get rePassword() { return this.registerCompany.get('rePassword'); }

  constructor(
    private registerService: RegisterService,
    private _snackBar: OpenSnackBarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let user: User = this.registerCompany.value;
    user.userType = 'company';
    console.log(user);
    // this.registerService.createCustomer(user)
    //   .subscribe(result => {
    //     this.registerCompany.reset({});
    //     this._snackBar.open('User created successfully', '');
    //     this.router.navigate(['/login']);
    //   })
  }

}
