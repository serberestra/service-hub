import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  name: string = "";
  /**
   * Sets the title of the page to the name of the logged in company
   * @param as gets the logged in company
   */
  constructor(private as: AuthService) {
    this.as.loggedUser.subscribe(data => this.name = data.name).unsubscribe();
  }

  ngOnInit(): void {
  }

}
