import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-location',
  templateUrl: './form-location.component.html',
  styleUrl: './form-location.component.scss'
})
export class FormLocationComponent {
  formParent = input.required<FormGroup>();
}
