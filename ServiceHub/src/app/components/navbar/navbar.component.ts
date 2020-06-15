import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hideBtn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.hideLogout.subscribe(result => {
      this.hideBtn = result;
    });
  }

  logout() {
    this.authService.logout();
  }


}
