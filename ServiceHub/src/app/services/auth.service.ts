import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Worker } from "../models/worker.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User = {

    id: "",
    username: "",
    password: "",
    userType: "",
    phoneNumber: ""
  };

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

}




