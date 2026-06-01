import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isHome = false;

  constructor(
    private router: Router,
    private scrollService: ScrollService
  ) {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.isHome = currentUrl === '/' || currentUrl === '/home';
    });
  }

  scrollToSection(sectionId: string): void {
    if (this.isHome) {
      this.scrollService.scrollTo(sectionId);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollService.scrollTo(sectionId);
        }, 100);
      });
    }
  }
}
