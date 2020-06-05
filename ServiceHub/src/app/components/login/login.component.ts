import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if (form.value.invalid) {
      return;
    }

    /**
     * likely use this commented out version when Post Method will return a Promise ?
     */
    // this.authService.login(this.username, this.password).then(res => console.log(res)).catch(err => console.log(err));
    
    if (this.authService.login(form.value.username, form.value.password)) {
      console.log("successful Login Router away...");
      this.router.navigate(['/reservationAdd']); // reservationAdd  // useroptions
    } else {
      console.log("unsuccessful Login stay at Login...");
    }

    form.resetForm();
    
  }

}
