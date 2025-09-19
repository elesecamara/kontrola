import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  // Un Subject que emitirá el ID del elemento al que queremos ir.
  private scrollToSectionSource = new Subject<string>();

  // Un Observable público para que los componentes se suscriban a él.
  scrollToSection$ = this.scrollToSectionSource.asObservable();

  /**
   * Método que los componentes llamarán para iniciar el scroll.
   * @param sectionId El ID del elemento HTML de destino.
   */
  scrollTo(sectionId: string) {
    this.scrollToSectionSource.next(sectionId);
  }
}
