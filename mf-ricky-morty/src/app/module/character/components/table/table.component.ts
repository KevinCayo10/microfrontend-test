import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from '../../interface/character';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() items: Result[] = [];
  @Output() view = new EventEmitter<Result>();
  trackById(index: number, item: Result) {
    return item.id;
  }

  viewDetail(item: Result) {
    this.view.emit(item);
  }
}
