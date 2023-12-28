import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard {
  constructor(private router: Router, private state: StateService) {}

  canActivate(): Observable<boolean> {
    return this.state.isLoggedIn$.pipe(
      tap((loggedIn) => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
