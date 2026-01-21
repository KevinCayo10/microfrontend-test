import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './component/layout/layout.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, NgSelectModule, HttpClientModule],
  exports: [LayoutComponent, NavbarComponent, SidebarComponent, NgSelectModule],
})
export class SharedModule {}
