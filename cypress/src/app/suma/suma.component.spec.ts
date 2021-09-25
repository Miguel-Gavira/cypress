import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaComponent } from './suma.component';

describe('SumaComponent', () => {
  let component: SumaComponent;
  let fixture: ComponentFixture<SumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('La suma de 1 más 2 es 3', () => {
    // Set up
    component.sumando1 = 1;
    component.sumando2 = 2;

    // Act
    const actualValue = component.resultado();

    // Assert
    const expectedValue = 3;
    expect(actualValue).toEqual(expectedValue);
  });

  xit('La suma de 1 más 2 es 4', () => {
    // Set up
    component.sumando1 = 1;
    component.sumando2 = 2;

    // Act
    const actualValue = component.resultado();

    // Assert
    const expectedValue = 4;
    expect(actualValue).toEqual(expectedValue);
  });
});
