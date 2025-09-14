import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./shared/header/header.component";
import { CarruselComponent } from "./shared/carrusel/carrusel.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./shared/footer/footer.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CarruselComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kontrola';
}
