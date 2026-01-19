import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../models/menus.models';
import { Response } from '../../shared/interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  private apiUrl = 'http://localhost:3000/menu';

  constructor(private http: HttpClient) {}

  getMenus(): Observable<Response<Menu[]>> {
    return this.http.get<Response<Menu[]>>(this.apiUrl);
  }

  getMenuById(id: number): Observable<Response<Menu>> {
    return this.http.get<Response<Menu>>(`${this.apiUrl}/${id}`);
  }

  createMenu(menu: Menu): Observable<Response<Menu>> {
    return this.http.post<Response<Menu>>(this.apiUrl, menu);
  }

  updateMenu(id: number, menu: Menu): Observable<Response<Menu>> {
    return this.http.patch<Response<Menu>>(`${this.apiUrl}/${id}`, menu);
  }

  deleteMenu(id: number): Observable<Response<void>> {
    return this.http.delete<Response<void>>(`${this.apiUrl}/${id}`);
  }
}
