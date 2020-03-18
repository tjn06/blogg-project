import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkapaArtikelComponent } from './skapa-artikel.component';

describe('SkapaArtikelComponent', () => {
  let component: SkapaArtikelComponent;
  let fixture: ComponentFixture<SkapaArtikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkapaArtikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkapaArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
