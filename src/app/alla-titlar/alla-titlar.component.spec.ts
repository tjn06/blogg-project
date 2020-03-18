import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllaTitlarComponent } from './alla-titlar.component';

describe('AllaTitlarComponent', () => {
  let component: AllaTitlarComponent;
  let fixture: ComponentFixture<AllaTitlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllaTitlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllaTitlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
