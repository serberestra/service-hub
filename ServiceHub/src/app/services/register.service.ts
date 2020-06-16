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

  /**
   * 
   * @param http for making the AJAX calls.
   */
  constructor(private http: HttpClient) { }

  /**
   * CreateCustomer()
   * Sends AJAX call to create customer in backend
   * @param User Customer to create
   */
  createCustomer(user: User): Observable<User> {
    return this.http.post<User>(environment.localUrl + 'user', user);
  }

  /**
   * createCompany
   * sends AJAX call to create company in backend
   * @param Company Company to be created
   */
  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(environment.localUrl + '/company', company);
  }
}
