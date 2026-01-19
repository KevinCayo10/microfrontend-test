import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Menu } from '../../models/menus.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() data: Menu[] = [];
  @Output() edit = new EventEmitter<Menu>();
  @Output() delete = new EventEmitter<Menu>();

  trackById(index: number, item: Menu) {
    return item.id;
  }
}
