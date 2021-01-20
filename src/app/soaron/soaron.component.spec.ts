import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoaronComponent } from './soaron.component';

describe('SoaronComponent', () => {
  let component: SoaronComponent;
  let fixture: ComponentFixture<SoaronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoaronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoaronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
