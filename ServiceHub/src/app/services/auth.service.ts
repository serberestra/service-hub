import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { User } from "../models/user.model";
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReservationService } from "../services/reservation.service";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSource = new BehaviorSubject(null);
  private companySource = new BehaviorSubject(null);
  private sourceLogout = new BehaviorSubject(false);

  redirectUrl: string;

  loggedUser = this.userSource.asObservable();
  loggedCompany = this.companySource.asObservable();
  hideLogout = this.sourceLogout.asObservable();

  authUser: User;

  /**
   * 
   * @param http for making AJAX calls
   * @param router for redirects once authenticated
   * @param reService for finding company IDs
   */
  constructor(
    private http: HttpClient,
    private router: Router,
    private reService: ReservationService
  ) { }

  /**
   * Method of Authentication. Returns observable based on whether user is Customer or company
   * If company, gets the company ID and emits a seperate observable
   * @param username username to be checked
   * @param password password to be checked
   */
  login(username: string, password: string): Observable<User> {
    let user: User = {
      'username': username,
      'password': password
    };
    return this.http.post<User>(`${environment.localUrl}auth`, user)
      .pipe(map((result) => {
        if (result) {
          this.setAuthUser(result);
          result.password = null;
          if (result['userType'] === 'company') {
            this.reService.getCompanyByUserId(parseInt(result['id']))
              .subscribe(company => {
                this.companySource.next(company);
              })
          }
        }
        return result;
      }));
  }

  /**
   * Sends flag to logout
   * @param hide flag in question
   */
  setHide(hide: boolean) {
    this.sourceLogout.next(hide);
  }

  setAuthUser(user: User) {
    this.authUser = user;
    this.authUser.password = null;
    this.userSource.next(this.authUser);
  }

  /**
   * Removes current session state
   */
  clear(): void {
    this.userSource.next(null);
  }

  /**
   * Check to determine if user is logged in
   */
  isAuthenticated(): boolean {
    let flag = false;
    this.loggedUser.subscribe(result => flag = result);
    return flag;
  }

  /**
   * perfoms all logout methods.
   */
  logout(): void {
    this.setHide(false);
    this.clear();
    this.router.navigate(['/']);
  }

}




