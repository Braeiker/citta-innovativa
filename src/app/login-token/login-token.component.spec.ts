import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTokenComponent } from './login-token.component';

describe('LoginTokenComponent', () => {
  let component: LoginTokenComponent;
  let fixture: ComponentFixture<LoginTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTokenComponent]
    });
    fixture = TestBed.createComponent(LoginTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
