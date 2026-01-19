import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface ToastMessage {
  header?: string;
  body: string;
  classname?: string; // bootstrap class e.g. 'bg-success text-white'
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();

  get toasts$(): Observable<ToastMessage> {
    return this.toastSubject.asObservable();
  }

  show(body: string, options: Partial<ToastMessage> = {}) {
    const msg: ToastMessage = {
      body,
      header: options.header,
      classname: options.classname || 'bg-dark text-white',
      delay: options.delay ?? 5000,
    };
    this.toastSubject.next(msg);
  }

  success(body: string, header = 'Éxito') {
    this.show(body, { header, classname: 'bg-success text-white' });
  }

  error(body: string, header = 'Error') {
    this.show(body, { header, classname: 'bg-danger text-white' });
  }
}
