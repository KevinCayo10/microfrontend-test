import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FlightsToComponent } from './pages/flights-to/flights-to.component';


const routes: Routes = [
  {
    path: '',
    component: FlightsToComponent,
  },
  {
    path: 'ruta2',
    component: SecondComponentComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule { }