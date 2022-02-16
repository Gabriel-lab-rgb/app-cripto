import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptomonedaTablaComponent } from './criptomoneda-tabla.component';

describe('CriptomonedaTablaComponent', () => {
  let component: CriptomonedaTablaComponent;
  let fixture: ComponentFixture<CriptomonedaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptomonedaTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptomonedaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
