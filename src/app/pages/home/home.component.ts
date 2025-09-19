import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarruselComponent } from "../../shared/carrusel/carrusel.component";
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { PopUpComponent } from '../../shared/pop-up/pop-up.component';
import { Subscription } from 'rxjs'; 
import { ScrollService } from '../../services/scroll.service';
import { BotonWhatsComponent } from "../../shared/boton-whats/boton-whats.component";

@Component({
  selector: 'app-home',
  imports: [CarruselComponent, CommonModule, MatDialogModule, BotonWhatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

    private scrollSubscription!: Subscription;

    constructor(
    public dialog: MatDialog, 
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.scrollSubscription = this.scrollService.scrollToSection$.subscribe(sectionId => {
      this.scrollToElement(sectionId);
    });
  }
  private scrollToElement(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // --- 8. AGREGAMOS ngOnDestroy PARA LIMPIAR LA SUSCRIPCIÓN ---
  ngOnDestroy(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  } 
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
  openMntoPopUp(event: MouseEvent): void {
    event.preventDefault();
    this.dialog.open(PopUpComponent, {
      width: '80%',
      maxHeight: '80vh',
      data: { tipo: 'serviciosMantenimiento', titulo: 'Mantenimiento' }
    });
  }
  openAlarmaPopUp(event: MouseEvent): void {
    event.preventDefault();
    this.dialog.open(PopUpComponent, {
      width: '80%',
      maxHeight: '80vh',
      data: { tipo: 'serviciosAlarmas', titulo: 'Alarmas contra intrusión' }
    });
  }
  openAccesoPopUp(event: MouseEvent): void {
    event.preventDefault();
    this.dialog.open(PopUpComponent, {
      width: '80%',
      maxHeight: '80vh',
      data: { tipo: 'serviciosAcceso', titulo: 'Control de acceso' }
    });
  }
  openIncendioPopUp(event: MouseEvent): void {
    event.preventDefault();
    this.dialog.open(PopUpComponent, {
      width: '80%',
      maxHeight: '80vh',
      data: { tipo: 'serviciosIncendio', titulo: 'Detección de incendio' }
    });
  }
  openCableadoPopUp(event: MouseEvent): void {
    event.preventDefault();
    this.dialog.open(PopUpComponent, {
      width: '80%',
      maxHeight: '80vh',
      data: { tipo: 'serviciosCableado', titulo: 'Cableado estructurado' }
    });
  }
  openVideoPopUp(event: MouseEvent): void {
    event.preventDefault();
    this.dialog.open(PopUpComponent, {
      width: '80%',
      maxHeight: '80vh',
      data: { tipo: 'serviciosVideo', titulo: 'VIDEOVIGILANCIA' }
    });
  }
}
