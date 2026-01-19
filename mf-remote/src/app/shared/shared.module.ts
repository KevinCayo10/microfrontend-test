import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedInputComponent } from './components/shared-input/shared-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    SharedInputComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    SharedInputComponent,
    NgSelectModule
  ]
})
export class SharedModule { }
