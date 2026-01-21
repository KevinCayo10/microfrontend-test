import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  isNavCollapsed = true;
  isUserMenuOpen = false;

  onToggleNav(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  onToggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeMenus(): void {
    this.isNavCollapsed = true;
    this.isUserMenuOpen = false;
  }
}
