import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VigilanciaComponent } from './pages/vigilancia/vigilancia.component';
import { PolizasComponent } from './pages/polizas/polizas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ConstruccionComponent } from './pages/construccion/construccion.component';
import { IndustriaComponent } from './pages/industria/industria.component';

export const APP_ROUTES = {
  HOME: ''
} as const;

// Exporta el tipo para TypeScript
export type AppRoute = keyof typeof APP_ROUTES;

// Configuración de rutas de Angular (usa las constantes)
export const routes: Routes = [
  { path: APP_ROUTES.HOME, component: HomeComponent, title: 'Inicio | Kontrola' },
  {
    path: 'vigilancia',
    loadComponent: () => import('./pages/vigilancia/vigilancia.component').then(c => c.VigilanciaComponent),
    title: 'Videovigilancia | Kontrola'
  },
  {
    path: 'polizas',
    loadComponent: () => import('./pages/polizas/polizas.component').then(c => c.PolizasComponent),
    title: 'Polizas | Kontrola'
  },
  { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto.component').then(c => c.ContactoComponent) },
  { path: 'industria', loadComponent: () => import('./pages/industria/industria.component').then(c => c.IndustriaComponent) },
  { path: 'construccion', loadComponent: () => import('./pages/construccion/construccion.component').then(c => c.ConstruccionComponent)},
  { path: '**', redirectTo: APP_ROUTES.HOME }
];
