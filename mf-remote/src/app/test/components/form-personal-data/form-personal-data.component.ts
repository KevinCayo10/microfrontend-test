import { Component, input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-personal-data',
  templateUrl: './form-personal-data.component.html',
  styleUrl: './form-personal-data.component.scss',
})
export class FormPersonalDataComponent implements OnInit {
  formParent = input.required<FormGroup>();
  personalData: any;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalData = this.fb.group({
      name: ['aasdas', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      passengers: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      nationality: ['', [Validators.required]],
    });
    this.formParent().addControl('personalData', this.personalData);
    /*
    this.personalData.get('phone')?.valueChanges.subscribe({
      next: (v: any) => {
        console.log(v);
      }
    })
    */
  }

  onEventSignal(event: string) {
    /*
    console.log(event);
    console.error('ERROR');
    console.warn('WARNING');
    console.trace('TRACE:', event);
    */
  }

  getControl(controlName: string) {
    return this.personalData.get(controlName) as FormControl;
  }

  nationality = [
    { name: 'Española', id: 1 },
    { name: 'Mexicana', id: 2 },
    { name: 'Argentina', id: 3 },
    { name: 'Colombiana', id: 4 },
  ];
}