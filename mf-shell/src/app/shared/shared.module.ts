import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './component/layout/layout.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [CommonModule, NgSelectModule, HttpClientModule],
  exports: [LayoutComponent, NavbarComponent, NgSelectModule],
})
export class SharedModule {}
