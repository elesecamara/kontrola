import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonWhatsComponent } from './boton-whats.component';

describe('BotonWhatsComponent', () => {
  let component: BotonWhatsComponent;
  let fixture: ComponentFixture<BotonWhatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonWhatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonWhatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
