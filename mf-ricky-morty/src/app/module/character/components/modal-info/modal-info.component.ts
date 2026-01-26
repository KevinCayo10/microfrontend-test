import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-info',
  standalone: true,
  imports: [NgbModalModule],
  templateUrl: './modal-info.component.html',
})
export class ModalInfoComponent {
  @Input() item: any;
  public activeModal: NgbActiveModal = inject(NgbActiveModal);

  onClose(): void {
    this.activeModal.close();
  }
}
