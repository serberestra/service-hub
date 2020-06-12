import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
    user: User = {

      id: "",
      username: "",
      password: "",
      userType: "",
      phoneNumber: ""
  };  //While the Login works, we Might need to Instantiate

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log("yes this onSubit ran");

    // this.authService.login(this.username, this.password).toPromise().then(res=>{

    //   console.log("this is response "+res);
    //   if (res !== null) {
    //     console.log(res.id);
    //     console.log(res.username);
    //     console.log(res.password);
    //     console.log(res.userType);
    //     console.log(res.phoneNumber);

    //     this.router.navigate(['/reservationAdd']);
    //   }

    // }).catch(err => {
    //   console.log("This is the ERROR: " + err);
    // });

    this.authService.login(this.username, this.password)
      .subscribe(res => {
        console.log("res in login: " + res);
        console.log("res in login: " + res.username);
        console.log("res in login: " + res.id);
        
        this.user = {id:res.id, username:res.username, password:res.password, userType:res.userType, phoneNumber:res.phoneNumber};

        
        if (res !== null) {
          // this.authService.setLogged_in_user(res);
          
          this.authService.setLogged_in_user(this.user);
          this.router.navigate(['/reservationAdd']);
        }
      })

  }

}
