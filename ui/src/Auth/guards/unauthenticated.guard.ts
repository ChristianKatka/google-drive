import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard {
  constructor(private router: Router, private state: StateService) {}

  canActivate(): Observable<boolean> {
    return this.state.isLoggedIn$.pipe(
      map((isLoggedIn) => this.checkIfUserIsUnauthenticated(isLoggedIn)),
      tap((isUnAuthenticated) => {
        const userIsLoggedInSoRedirectToHome = !isUnAuthenticated;

        if (userIsLoggedInSoRedirectToHome) {
          this.router.navigate(['/home']);
        }
      })
    );
  }

  checkIfUserIsUnauthenticated(isLoggedIn: boolean): boolean {
    // if user is logged in we dont want him to acces login page
    if (isLoggedIn) {
      return false;
    } else {
      return true;
    }
  }
}
