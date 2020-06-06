import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUser = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(/([a-zA-Z]{1}[\w]+)@([\w]+\.)([\w])+/)]),
    password: new FormControl('')
  })

  get username() { return this.registerUser.get('username'); }
  get password() { return this.registerUser.get('password'); }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerUser.value);
  }

}
