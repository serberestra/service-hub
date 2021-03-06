import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormErrorMatcher } from '../../services/form-error-matcher';
import { Router } from "@angular/router";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  matcher = new FormErrorMatcher();
  noUser: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/([a-zA-Z]{1}[\w]+)@([\w]+\.)([\w])+/)]),
    password: new FormControl('', [Validators.required])
  })

  get email() { return this.loginForm.get('email') };
  get password() { return this.loginForm.get('password') };

  /**
   * 
   * @param authService for passing to login method
   * @param router for routing to next page
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * sends email and password to login service and navigates to appropriate page
   */
  onSubmit() {
    this.authService.login(this.email.value, this.password.value)
      .subscribe(result => {
        if (result) {
          this.authService.setHide(true);
          if (result.userType === 'company') this.router.navigate(['/company']);
          else this.router.navigate(['/customer']);
        } else {
          this.noUser = true;
        }
      });
  }

}
