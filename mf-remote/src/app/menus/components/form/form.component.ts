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
      remoteEntry: ['', Validators.required],
      exposedModule: ['', Validators.required],
      displayName: ['', Validators.required],
      routePath: ['', Validators.required],
      ngModuleName: ['', Validators.required],
    });

    if (this.menu) {
      this.form.patchValue(this.menu);
    }
  }

  get remoteEntry() {
    return this.form.get('remoteEntry');
  }

  get exposedModule() {
    return this.form.get('exposedModule');
  }

  get displayName() {
    return this.form.get('displayName');
  }

  get routePath() {
    return this.form.get('routePath');
  }

  get ngModuleName() {
    return this.form.get('ngModuleName');
  }

  showErrors(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  submit(): void {
    if (this.form.invalid) return;
    this.save.emit(this.form.value);
  }
}
