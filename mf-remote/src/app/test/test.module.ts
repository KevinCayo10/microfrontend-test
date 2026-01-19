import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test.routing.module';
import { SecondComponentComponent } from './second-component/second-component.component';
import { SharedModule } from '../shared/shared.module';
import { FlightsToComponent } from './pages/flights-to/flights-to.component';
import { FormPersonalDataComponent } from './components/form-personal-data/form-personal-data.component';
import { FormLocationComponent } from './components/form-location/form-location.component';
import { FormPaymentInfoComponent } from './components/form-payment-info/form-payment-info.component';
import { FormPreferComponent } from './components/form-prefer/form-prefer.component';


@NgModule({
  declarations: [
    SecondComponentComponent,
    FlightsToComponent,
    FormPersonalDataComponent,
    FormLocationComponent,
    FormPaymentInfoComponent,
    FormPreferComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule,
  ],
  exports: [
    SecondComponentComponent,
    FlightsToComponent,
    FormPersonalDataComponent,
    FormLocationComponent,
    FormPaymentInfoComponent,
    FormPreferComponent
  ]
})
export class TestModule { }
