import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptomonedaInputComponent } from './criptomoneda-input.component';

describe('CriptomonedaInputComponent', () => {
  let component: CriptomonedaInputComponent;
  let fixture: ComponentFixture<CriptomonedaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptomonedaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptomonedaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
