import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() menu: any;

  public activeModal: NgbActiveModal = inject(NgbActiveModal);

  onSave(data: any): void {
    this.activeModal.close(data);
  }

  onCancel(): void {
    this.activeModal.dismiss();
  }
}
