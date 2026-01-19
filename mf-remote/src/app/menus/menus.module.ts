import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './pages/menus/menus.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastsComponent } from '../shared/components/toasts/toasts.component';

@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule,
    MenusRoutingModule,
    TableComponent,
    HttpClientModule,
    NgbModule,
    ToastsComponent,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class MenusModule {}
