import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { User } from "../models/user.model";
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSource = new BehaviorSubject(null);
  loggedUser = this.userSource.asObservable();

  private user: User = {

    id: "",
    username: "",
    password: "",
    userType: "",
    phoneNumber: ""
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /**
   * This need to become a post method
   */
  login(username: string, password: string): Observable<User> {
    let user: User = {
      'username': username,
      'password': password
    };
    // console.log(environment.localUrl);
    return this.http.post<User>(`${environment.localUrl}auth`, user)
      .pipe(map((result) => {
        if (result) {
          this.userSource.next(result);
          // sessionStorage.setItem('user', JSON.stringify(result));
        }
        return result;
      }));
  }

  clear(): void {
    this.userSource.next(null);
  }

  isAuthenticated(): boolean {
    let flag = false;
    this.loggedUser.subscribe(result => flag = result);
    return flag;
    // return sessionStorage.getItem('user') !== null;
  }

  logout(): void {
    this.clear();
    this.router.navigate(['/']);
  }


  /*
    Remove all the methods below 
  */
  setLogged_in_user(user: User) {
    console.log("Auth Service Has: " + user.username);
    console.log("Auth Service Has: " + user.id);
    this.userSource.next(user);
    //this.user2 = user;...............................FOR OBSERVABLE.....
  }

  getLogged_in_user(): Observable<any> {
    // console.log("SERVICE: " + this.logged_in_user);
    //console.log("SERVICE: " + this.user2);//....................FOR OBSERVABLE.....

    return this.userSource;
    //return this.user2;//........................FOR OBSERVABLE
  }

}




