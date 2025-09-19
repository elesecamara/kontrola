import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from '../../shared/pop-up/pop-up.component';
import { BotonWhatsComponent } from "../../shared/boton-whats/boton-whats.component";

@Component({
  selector: 'app-polizas',
  standalone: true,
  imports: [CommonModule, MatDialogModule, BotonWhatsComponent],
  templateUrl: './polizas.component.html',
  styleUrl: './polizas.component.css'
})
export class PolizasComponent {

  constructor(public dialog: MatDialog) {}

  openPoliticaPopUp(event: MouseEvent): void {
    event.preventDefault();
    this.dialog.open(PopUpComponent, {
      width: '80%',
      maxHeight: '80vh',
      data: { tipo: 'politica', titulo: 'Política de Privacidad' }
    });
  }
}