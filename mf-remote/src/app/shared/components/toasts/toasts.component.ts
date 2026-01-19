import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastService, ToastMessage } from '../../services/toast.service';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss'],
})
export class ToastsComponent implements OnInit, OnDestroy {
  toasts: (ToastMessage & { id: number })[] = [];
  private sub: Subscription | undefined;
  private seq = 0;

  constructor(private toastSvc: ToastService) {}

  ngOnInit(): void {
    this.sub = this.toastSvc.toasts$.subscribe((t) => this.addToast(t));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  addToast(t: ToastMessage) {
    const id = ++this.seq;
    const toast = { ...t, id };
    this.toasts.push(toast);
    const delay = t.delay ?? 5000;
    setTimeout(() => this.remove(id), delay);
  }

  remove(id: number) {
    this.toasts = this.toasts.filter((x) => x.id !== id);
  }
}
