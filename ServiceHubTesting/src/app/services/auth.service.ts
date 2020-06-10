import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Router } from '@angular/router';

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
    private http: HttpClient,
    private _route: Router
  ) { }

  login(username: string, password: string) {

    // post method ?
    console.log("in Service Post Method " + username + " & " + password);

    /**
     * future Post method below
     */
    // const user: User = { username: username, password: password};
    // this.http.post<{message: string, postId: string}>('http://localhost:3000/api/login', user)
    //     .subscribe((responseData) => {
    //         console.log(responseData.message, "Angular post.service http method:post");

    //         /**
    //          * update user data in response as well as observable ?
    //          */
    //        // post.id = responseData.postId;
    //         //this.posts.push(post);
    //         //this.observedPosts.next([...this.posts]);
    // });


    /**
     * just a temporary thing to get things going till we get endpoints
     */
    if (username === 'test' && password === 'test') {
      return true;
    } else {
      return false;
    }

  }
  clear(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }

  companyLogin(): void {
    localStorage.setItem('user', 'yes');
    this._route.navigate(['/dashboard']);
  }

  userlogin(): void {
    localStorage.setItem('user', 'yes');
    this._route.navigate(['/dashboard']);
  }

  logout(): void {
    this.clear();
    this._route.navigate(['/login']);
  }
}
