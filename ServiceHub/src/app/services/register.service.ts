import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

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
  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(environment.localUrl + '/company', company);
  }
}
