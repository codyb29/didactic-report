import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      // all ok, proceed navigation to routed component
      return true;
    }
    else {
      // start a new navigation to redirect to login page
      this.router.navigate(['/login']);
      // abort current navigation
      return false;
    }
  }
}
