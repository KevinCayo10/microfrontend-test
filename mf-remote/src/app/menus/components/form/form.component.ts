import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  @Input() menu: any;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  form!: FormGroup;
  private readonly fb = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      path: ['', Validators.required],
      status: [true, Validators.required],
    });

    if (this.menu) {
      this.form.patchValue(this.menu);
    }
  }

  submit(): void {
    if (this.form.invalid) return;
    this.save.emit(this.form.value);
  }
}
