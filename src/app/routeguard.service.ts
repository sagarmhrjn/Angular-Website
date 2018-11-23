import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// canActivate--> is guard which protect user, admin , use for pages which are accessible for only loggedin user
export class RouteguardService implements CanActivate {

  constructor(private router: Router) { }
  // ActivatedRouteSnapshot--> contains the info about route associated with component which is currently active
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // checking if we have name called 'currentUser' in localStorage
    if (localStorage.getItem('currentUser')) {
      // logged in
      return true;
    }
    // anyone who tries to follow a link which is restricted it redirects to loginPage
    this.router.navigate(['/login']), { queryParams: { returnUrl: state.url } };
    return false;
  }
}
