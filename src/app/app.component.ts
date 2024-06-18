import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionTourneeWeb';
  opened = true;
  profileOpened = false;
  isFullPage = false;
  userConnected = {
    nom: 'John Doe',
    email: 'john.doe@example.com',
    isAdmin: true
  };

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isFullPage = event.url === '/login';
    });
  }

  toggleNavBar() {
    this.opened = !this.opened;
  }

  toggleProfile() {
    this.profileOpened = !this.profileOpened;
  }

  logout() {
    // Implémenter la déconnexion ici
    console.log('Déconnexion');
  }
}
