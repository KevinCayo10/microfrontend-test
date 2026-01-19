import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-payment-info',
  templateUrl: './form-payment-info.component.html',
  styleUrl: './form-payment-info.component.scss'
})
export class FormPaymentInfoComponent {
  formParent = input.required<FormGroup>();
}
