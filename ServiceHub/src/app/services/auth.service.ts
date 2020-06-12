import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Worker } from "../models/worker.model";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged_in_user = new Subject<User>();

  private user: User = {

    id: "",
    username: "",
    password: "",
    userType: "",
    phoneNumber: ""
  };

  //private user2: Observable<User>;...........TO TRY OBSERVABLE ?? ?? ???

  constructor(
    private http: HttpClient
  ) { }

  /**
   * This need to become a post method
   */
  login(username: string, password: string): Observable<User> {

    // console.log("in Service Post Method " + username + " & " + password);

    let user: User = { 'username': username, 'password': password };
    return this.http.post<User>(`http://localhost:9191/api/auth`, user);

  }

  setLogged_in_user(user: User) {
    console.log("Auth Service Has: "+ user.username);
    console.log("Auth Service Has: "+ user.id);
    this.logged_in_user.next(user);
    //this.user2 = user;...............................FOR OBSERVABLE.....
  }

  getLogged_in_user(): Observable<any> {
    // console.log("SERVICE: " + this.logged_in_user);
    //console.log("SERVICE: " + this.user2);//....................FOR OBSERVABLE.....
    
     return this.logged_in_user;
    //return this.user2;//........................FOR OBSERVABLE
  }



}




