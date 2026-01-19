import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreferComponent } from './form-prefer.component';

describe('FormPreferComponent', () => {
  let component: FormPreferComponent;
  let fixture: ComponentFixture<FormPreferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPreferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPreferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
