import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPaymentInfoComponent } from './form-payment-info.component';

describe('FormPaymentInfoComponent', () => {
  let component: FormPaymentInfoComponent;
  let fixture: ComponentFixture<FormPaymentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPaymentInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPaymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
