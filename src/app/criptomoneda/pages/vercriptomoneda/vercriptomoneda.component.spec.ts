import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercriptomonedaComponent } from './vercriptomoneda.component';

describe('VercriptomonedaComponent', () => {
  let component: VercriptomonedaComponent;
  let fixture: ComponentFixture<VercriptomonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercriptomonedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VercriptomonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
