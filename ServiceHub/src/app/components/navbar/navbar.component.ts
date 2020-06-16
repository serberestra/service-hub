import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hideBtn: boolean = false;
  username: string = '';
  /**
   * 
   * @param authService for logging out if user clicks on logout
   */
  constructor(private authService: AuthService) { }

  /**
   * Determines if user is logged in order to hide login buttons
   */
  ngOnInit(): void {
    this.authService.hideLogout.subscribe(result => {
      this.hideBtn = result;
      if (result) {
        this.authService.loggedUser.subscribe(rUser => {
          if (rUser)
            this.username = rUser.username;
        })
      }
    });

  }

  /**
   * Performs actual logout
   */
  logout() {
    this.authService.logout();
    this.username = '';
  }


}
