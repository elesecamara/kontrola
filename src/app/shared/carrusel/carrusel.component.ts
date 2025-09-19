import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements OnInit, OnDestroy {

  // Índice del slide que se está mostrando actualmente
  currentIndex = 0;
  // Referencia al intervalo para poder limpiarlo después
  private intervalId: any;

  // Define aquí los datos para cada slide del carrusel
  slides = [
    {
      bgImage: '/assets/img/slide1.jpg',
      logo: '/assets/img/logoK.svg', 
      title: 'Cambia la forma en que tu empresa entiende la productividad y la seguridad.',
      subtitle: 'Control de tu Operación'
    },
    {
      bgImage: '/assets/img/slide2.jpg',
      logo: '/assets/img/logoK.svg', 
      title: 'Interfaces Dinámicas',
      subtitle: 'Evidencia de las Incidencias.'
    },
    {
      bgImage: '/assets/img/slide3.jpg',
      logo: '/assets/img/logoK.svg', 
      title: 'Ecosistema Versátil',
      subtitle: 'Prevención de Riesgos.'
    },
        {
      bgImage: '/assets/img/slide3.jpg',
      logo: '/assets/img/logoK.svg', 
      title: 'Ecosistema Versátil',
      subtitle: 'Soporte Técnico Especializado'
    }
  ];

  ngOnInit(): void {
    // Inicia el carrusel cuando el componente se carga
    this.startCarousel();
  }

  ngOnDestroy(): void {
    // Detiene el carrusel para evitar fugas de memoria cuando el componente se destruye
    clearInterval(this.intervalId);
  }

  /**
   * Cambia el slide actual cada 3 segundos.
   */
  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000);
  }
}
