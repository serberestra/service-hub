import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  /**
   * CreateCustomer()
   * Method to create a customer.
   * @param User
   */
  createCustomer(user: User): Observable<User> {
    return this.http.post<User>(environment.localUrl + 'user', user);
  }

  /**
   * createCompany
   * Method to create a company.
   * @param Company
   */
  // createCompany(company: company): Observable<Company> {
  //   return this.http.post<Company>(environment.localUrl + '/company', company);
  // }
}
