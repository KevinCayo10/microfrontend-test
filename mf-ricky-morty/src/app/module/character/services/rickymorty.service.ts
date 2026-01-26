import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character } from '../interface/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickymortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  private http: HttpClient = inject(HttpClient);

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(this.apiUrl);
  }
}
