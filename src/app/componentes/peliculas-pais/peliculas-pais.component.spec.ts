import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPaisComponent } from './peliculas-pais.component';

describe('PeliculasPaisComponent', () => {
  let component: PeliculasPaisComponent;
  let fixture: ComponentFixture<PeliculasPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
