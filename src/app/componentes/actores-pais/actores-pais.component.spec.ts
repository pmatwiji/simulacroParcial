import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresPaisComponent } from './actores-pais.component';

describe('ActoresPaisComponent', () => {
  let component: ActoresPaisComponent;
  let fixture: ComponentFixture<ActoresPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
