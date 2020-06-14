import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  name: string = "";
  constructor(private as: AuthService) {
    this.as.loggedUser.subscribe(data => this.name = data.name).unsubscribe();
  }

  ngOnInit(): void {
<<<<<<< HEAD
    this.as.loggedCompany.subscribe(data=> this.name = data.name);
=======
>>>>>>> e78cd1e25844ec4d352f2bdb8d60ca56d0d8cb7c
  }

}
