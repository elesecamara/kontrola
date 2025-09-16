import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VigilanciaComponent } from './pages/vigilancia/vigilancia.component';
import { PolizasComponent } from './pages/polizas/polizas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const APP_ROUTES = {
  HOME: ''
} as const;

// Exporta el tipo para TypeScript
export type AppRoute = keyof typeof APP_ROUTES;

// Configuración de rutas de Angular (usa las constantes)
export const routes: Routes = [
  { path: APP_ROUTES.HOME, component: HomeComponent, title: 'Inicio | Kontrola' },
  { path: 'vigilancia', component: VigilanciaComponent, title: 'Videovigilancia | Kontrola' },
  { path: 'polizas', component: PolizasComponent, title: 'Polizas | Kontrola' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto | Kontrola' },
  { path: '**', redirectTo: APP_ROUTES.HOME }
];
