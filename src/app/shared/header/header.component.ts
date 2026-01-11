import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

import { APP_ROUTES } from '../../app.routes'; 
import { ScrollService } from '../../services/scroll.service'; 

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

  constructor(
    private router: Router, 
    private scrollService: ScrollService 
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Tu lógica existente para detectar si es la página de inicio
        const currentUrl = event.urlAfterRedirects;
        this.isHome = currentUrl === '/' || currentUrl === this.ROUTES.HOME;
      });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  irASoluciones(): void {
    // Verificamos si ya estamos en el home
    if (this.isHome) {
      // Si ya estamos, solo hacemos scroll
      this.scrollService.scrollTo('soluciones');
    } else {
      // Si no estamos en home, navegamos primero y LUEGO hacemos scroll
      this.router.navigate(['/']).then(() => {
        // Usamos un pequeño delay para asegurar que el home se haya renderizado
        setTimeout(() => {
          this.scrollService.scrollTo('soluciones');
        }, 100); 
      });
    }
  }
    irAServicios(): void {
    // Verificamos si ya estamos en el home
    if (this.isHome) {
      // Si ya estamos, solo hacemos scroll
      this.scrollService.scrollTo('servicios');
    } else {
      // Si no estamos en home, navegamos primero y LUEGO hacemos scroll
      this.router.navigate(['/']).then(() => {
        // Usamos un pequeño delay para asegurar que el home se haya renderizado
        setTimeout(() => {
          this.scrollService.scrollTo('servicios');
        }, 100); 
      });
    }
  }
    irAClientes(): void {
    // Verificamos si ya estamos en el home
    if (this.isHome) {
      // Si ya estamos, solo hacemos scroll
      this.scrollService.scrollTo('clientes');
    } else {
      // Si no estamos en home, navegamos primero y LUEGO hacemos scroll
      this.router.navigate(['/']).then(() => {
        // Usamos un pequeño delay para asegurar que el home se haya renderizado
        setTimeout(() => {
          this.scrollService.scrollTo('clientes');
        }, 100); 
      });
    }
  }
      irAMantenemos(): void {
    // Verificamos si ya estamos en el home
    if (this.isHome) {
      // Si ya estamos, solo hacemos scroll
      this.scrollService.scrollTo('mantenemos');
    } else {
      // Si no estamos en home, navegamos primero y LUEGO hacemos scroll
      this.router.navigate(['/']).then(() => {
        // Usamos un pequeño delay para asegurar que el home se haya renderizado
        setTimeout(() => {
          this.scrollService.scrollTo('mantenemos');
        }, 100); 
      });
    }
  }
}
