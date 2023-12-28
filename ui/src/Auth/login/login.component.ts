import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleDriveService } from '../../Home/google-drive.service';
import { StateService } from '../state.service';

@Component({
  standalone: true,
  imports: [GoogleSigninButtonModule, HttpClientModule],
  providers: [GoogleDriveService],
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
})
export class LoginComponent {
  constructor(
    private socialAuthService: SocialAuthService,
    private state: StateService,
    private router: Router
  ) {}

  ngOnInit() {
    // Gets called when signed in via pop up and returned to this page
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.state.name$.next(user.name);

      this.onGoogleSignIn(user);
    });
  }

  onGoogleSignIn(res: any) {
    console.log('onGoogleSignIn');

    // Handle successful sign-in
    console.log('ID token:', res.idToken);
    this.getAccessToken();
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

  getAccessToken(): void {
    console.log('getAccessToken');

    this.socialAuthService
      .getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then((accessToken) => {
        console.log(accessToken);
        this.state.isLoggedIn$.next(true);
        this.state.accessToken$.next(accessToken);
        this.router.navigate(['/home']);
      });
  }
}
