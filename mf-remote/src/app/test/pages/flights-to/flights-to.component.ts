import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights-to',
  templateUrl: './flights-to.component.html',
  styleUrl: './flights-to.component.scss'
})
export class FlightsToComponent implements OnInit {

  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.subscribeTo();
  }

  buildForm() {
    //TODO: Dividir el formulario en distintos componentes y pequeños formGroups
    //TODO: Crear nuestro primer componente compartido (Input)

    this.form = this.fb.group({
      location: this.fb.group({
        origin: ['', [Validators.required]],
        destination: ['', [Validators.required]],
        date: ['', [Validators.required]],
        dateReturn: ['', [Validators.required]],
        classflight: ['', [Validators.required]]
      }),
      payment: this.fb.group({
        cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
        cardName: ['', [Validators.required]],
        cardDate: ['', [Validators.required]],
        cardCvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
      }),
      preferences: this.fb.group({
        hotel: false,
        airbnb: false,
        security: false,
        transfer: false
      }),
    });
    console.log("Formulario creado", this.form);
  }

  subscribeTo() {
    this.form.statusChanges.subscribe({
      next: (status) => {
        console.log(status);
      }
    })
    this.form.valueChanges.subscribe({
      next: (value) => {
        console.log({ form: this.form, value })
      }
    });
  }

  onSubmit() {
    const form = this.form.getRawValue();
    if (this.form.valid) {
      console.log(form);
    } else {
      console.error("Formulario inválido", this.form);
    }
  }
}
