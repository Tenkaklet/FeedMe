import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanerComponent } from './meal-planer.component';

describe('MealPlanerComponent', () => {
  let component: MealPlanerComponent;
  let fixture: ComponentFixture<MealPlanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealPlanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealPlanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
