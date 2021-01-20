import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSoaronComponent } from './login-soaron.component';

describe('LoginSoaronComponent', () => {
  let component: LoginSoaronComponent;
  let fixture: ComponentFixture<LoginSoaronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSoaronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSoaronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
