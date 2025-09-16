import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from '../../shared/pop-up/pop-up.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
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
