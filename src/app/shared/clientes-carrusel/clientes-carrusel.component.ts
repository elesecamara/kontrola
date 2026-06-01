import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes-carrusel.component.html',
  styleUrl: './clientes-carrusel.component.css'
})
export class ClientesCarruselComponent implements OnInit, OnDestroy {
  // Array de logos de clientes
  clientes = [
    { logo: '/assets/img/logo11.png' },
    { logo: '/assets/img/logo2.png' },
    { logo: '/assets/img/logo3.png' },
    { logo: '/assets/img/logo4.png' },
    { logo: '/assets/img/logo5.png' },
    { logo: '/assets/img/logo6.png' },
    { logo: '/assets/img/logo7.png' },
    { logo: '/assets/img/logo8.png' },
    { logo: '/assets/img/logo9.png' },
    { logo: '/assets/img/logo10.png' },
    { logo: '/assets/img/logo1.png' },
    { logo: '/assets/img/crown.png' }
  ];

  // Variables para el carrusel
  currentIndex = 0;
  itemsPerView = 6; // Por defecto para desktop
  private intervalId: any;

  ngOnInit(): void {
    this.updateItemsPerView();
    window.addEventListener('resize', () => this.updateItemsPerView());
    this.startCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    window.removeEventListener('resize', () => this.updateItemsPerView());
  }

  /**
   * Actualiza la cantidad de items visibles según el tamaño de la pantalla
   */
  updateItemsPerView(): void {
    const width = window.innerWidth;
    if (width < 576) {
      this.itemsPerView = 1; // Celular
    } else if (width < 768) {
      this.itemsPerView = 2; // Tablet pequeño
    } else if (width < 992) {
      this.itemsPerView = 3; // Tablet
    } else if (width < 1200) {
      this.itemsPerView = 4; // Desktop pequeño
    } else {
      this.itemsPerView = 6; // Desktop
    }
  }

  /**
   * Inicia el carrusel automático
   */
  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000); // Cambia cada 4 segundos
  }

  /**
   * Avanza al siguiente slide
   */
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % (this.clientes.length - this.itemsPerView + 1);
  }

  /**
   * Retrocede al slide anterior
   */
  prevSlide(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.clientes.length - this.itemsPerView;
    } else {
      this.currentIndex--;
    }
  }

  /**
   * Obtiene los clientes visibles actualmente
   */
  getVisibleClientes() {
    return this.clientes.slice(this.currentIndex, this.currentIndex + this.itemsPerView);
  }
}
