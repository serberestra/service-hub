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

  constructor(
    private http: HttpClient,
    private router: Router,
    private reService: ReservationService
  ) { }

  /**
   * Method of Authentication
   * @param username 
   * @param password 
   */
  login(username: string, password: string): Observable<User> {
    let user: User = {
      'username': username,
      'password': password
    };
    return this.http.post<User>(`${environment.localUrl}auth`, user)
      .pipe(map((result) => {
        if (result) {
          if (result['userType'] === 'company') {
            this.reService.getCompanyByUserId(parseInt(result['id']))
              .subscribe(company => {
                this.companySource.next(company);
              })
          }
          this.userSource.next(result);
        }
        return result;
      }));
  }

  setHide(hide: boolean) {
    this.sourceLogout.next(hide);
  }

  clear(): void {
    this.userSource.next(null);
  }

  isAuthenticated(): boolean {
    let flag = false;
    this.loggedUser.subscribe(result => flag = result);
    return flag;
  }

  logout(): void {
    this.setHide(false);
    this.clear();
    this.router.navigate(['/']);
  }

}




