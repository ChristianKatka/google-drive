import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UiFacade } from '../Store/facades/ui.facade';
import { SocialLoginModule } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SocialLoginModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.uiFacade.onWindowResize(window.innerWidth);
  }

  private readonly uiFacade = inject(UiFacade);

  ngOnInit(): void {
    this.uiFacade.onWindowResize(window.innerWidth);
  }
}
