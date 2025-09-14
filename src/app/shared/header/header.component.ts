import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

import { APP_ROUTES } from '../../app.routes'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly ROUTES = APP_ROUTES;
  isHome = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        
        // Comparación más robusta
        const currentUrl = event.urlAfterRedirects;
        this.isHome = currentUrl === '/' || currentUrl === this.ROUTES.HOME;
        
      });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
