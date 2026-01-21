import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container-fluid">
      <div class="p-4 p-lg-5 bg-light border rounded-3">
        <h1 class="h4 mb-2">Inicio</h1>
        <p class="mb-0 text-muted">Selecciona una opción del menú para cargar un microfrontend.</p>
      </div>
    </div>
  `,
})
export class HomeComponent {}
