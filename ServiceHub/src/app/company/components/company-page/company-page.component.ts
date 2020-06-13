import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  name: string = "";
  constructor(private as: AuthService) { }

  ngOnInit(): void {
    this.as.loggedUser.subscribe(data=> this.name = data.name);
  }

}
