import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  /**
   * 
   * @param authService checks if user is logged in
   * @param router for router information
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Checks to make sure a logged in user cannot navigate to the company module 
   * if user or user module if company
   * @param next metadata for where router is going
   * @param state metadata for current state of router
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let userType = '';
    this.authService.loggedUser
      .subscribe(result => {
        if (result)
          userType = result['userType'];
      })
    if (userType === next.data.role) {
      return true;
    }

    this.router.navigate(['/main']);
    return false;

  }

}
