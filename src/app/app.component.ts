import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ScrollToTopComponent } from "./shared/scroll-to-top/scroll-to-top.component";

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'kontrola';

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: false,
    });
  }
}
