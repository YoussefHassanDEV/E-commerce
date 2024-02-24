import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyResetCodeComponent } from './verify-reset-code.component';

describe('VerifyResetCodeComponent', () => {
  let component: VerifyResetCodeComponent;
  let fixture: ComponentFixture<VerifyResetCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyResetCodeComponent]
    });
    fixture = TestBed.createComponent(VerifyResetCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
