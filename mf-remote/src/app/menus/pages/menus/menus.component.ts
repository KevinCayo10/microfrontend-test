import { Component, inject } from '@angular/core';

import { MenusService } from '../../services/menus.service';
import { Menu } from '../../models/menus.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.scss',
})
export class MenusComponent {
  private readonly menusSvc: MenusService = inject(MenusService);
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly modalService = inject(NgbModal);
  menus: Menu[] = [];
  constructor() {
    this.getMenus();
  }

  getMenus() {
    this.menusSvc.getMenus().subscribe(
      (menus) => {
        console.log(menus);
        this.menus = menus.data;
      },
      (error) => {
        console.error('Error fetching menus:', error);
      },
    );
  }

  openCreateModal() {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
      size: 'lg',
    });

    modalRef.result.then((data) => {
      if (!data) return;

      this.menusSvc.createMenu(data).subscribe(() => this.getMenus());
    });
  }

  openCreate() {
    this.openCreateModal();
  }

  openEdit(menu: Menu) {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
      size: 'lg',
    });

    // Pass menu to modal
    (modalRef.componentInstance as ModalComponent).menu = menu as any;

    modalRef.result.then((data) => {
      if (!data) return;

      if (menu.id == null) {
        console.error('Menu id is missing, cannot update');
        return;
      }

      this.menusSvc.updateMenu(menu.id, data).subscribe(() => this.getMenus());
    });
  }

  confirmDelete(menu: Menu) {
    const confirmed = window.confirm(`¿Eliminar el menú "${menu.name}"?`);
    if (!confirmed) return;

    this.menusSvc.deleteMenu(menu.id).subscribe(
      () => this.getMenus(),
      (err) => console.error('Error deleting menu:', err),
    );
  }
}
