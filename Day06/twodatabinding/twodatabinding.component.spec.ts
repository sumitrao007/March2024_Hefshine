import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwodatabindingComponent } from './twodatabinding.component';

describe('TwodatabindingComponent', () => {
  let component: TwodatabindingComponent;
  let fixture: ComponentFixture<TwodatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwodatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwodatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
