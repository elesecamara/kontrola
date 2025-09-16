import { Component } from '@angular/core';
import { CarruselComponent } from "../../shared/carrusel/carrusel.component";
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { PopUpComponent } from '../../shared/pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  imports: [CarruselComponent, CommonModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  // Función para los clics normales de las soluciones
  openSolucionesPopUp(event: MouseEvent): void {
    event.preventDefault();
    this.dialog.open(PopUpComponent, {
      width: '400px',
      data: { tipo: 'normal', titulo: 'Detalles de la Solución' }
    });
  }

  // Función para el clic en la política de privacidad
  openPoliticaPopUp(event: MouseEvent): void {
    event.preventDefault();
    this.dialog.open(PopUpComponent, {
      width: '80%',
      maxHeight: '80vh',
      data: { tipo: 'politica', titulo: 'Política de Privacidad' }
    });
  }
}
