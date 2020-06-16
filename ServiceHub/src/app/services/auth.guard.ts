import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  /**
   * 
   * @param router tells router what to do
   * @param authService checks for user being logged in to determine behavior
   */
  constructor(private router: Router, private authService: AuthService) { }

  /**
   * Returns true value if user is authenticated
   * @param next Metadata on where the route is headed
   * @param state Metadata on the current state of the route, including current URL
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  /**
   * Initial entry method that provides routing information
   * @param next Metadata on where the route is headed
   * @param state Metadata on the current state of the route
   */
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }

  /**
   * Does the actual url check and navigates to login if false
   * If false, also stores attempted URL
   * @param url the url to be checked
   */
  checkLogin(url: string): boolean {
    if (this.authService.isAuthenticated()) { return true; }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }

}
