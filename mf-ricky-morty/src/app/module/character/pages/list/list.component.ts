import { Component, inject, OnInit } from '@angular/core';
import { RickymortyService } from '../../services/rickymorty.service';
import { Result } from '../../interface/character';
import { TableComponent } from '../../components/table/table.component';
import { ModalInfoComponent } from '../../components/modal-info/modal-info.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [TableComponent, ModalInfoComponent],
})
export class ListComponent implements OnInit {
  public items: Result[] = [];
  private rikymortyService: RickymortyService = inject(RickymortyService);
  public selectedItem: Result | null = null;

  private modalService: NgbModal = inject(NgbModal);
  ngOnInit(): void {
    this.rikymortyService.getCharacters().subscribe((data) => {
      const dataResults = data.results;
      this.items = dataResults;
    });
  }

  viewDetail(item: Result) {
    const modalRef = this.modalService.open(ModalInfoComponent, { size: 'lg' });
    modalRef.componentInstance.item = item;
  }
}
