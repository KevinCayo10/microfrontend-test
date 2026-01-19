import {
  Component,
  input,
  output,
} from '@angular/core';
import { FormControl, } from '@angular/forms';

@Component({
  selector: 'app-shared-input',
  templateUrl: './shared-input.component.html',
  styleUrl: './shared-input.component.scss',
})
export class SharedInputComponent {
  //* Inputs con signals
  control = input.required<FormControl>();
  label = input<string>();
  placeholder = input<string>('');

  //* Outputs con signals
  value = output<string>();

  onEventSignal(event: string) {
    this.value.emit(event);
  }
}
