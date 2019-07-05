import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate() {
    if (this.authService.loggedIn()) {
      console.log(this.authService.loggedIn());
      return true;
    } else {
      this.router.navigate(['/app-login']);
      return false;
    }
  }
}
