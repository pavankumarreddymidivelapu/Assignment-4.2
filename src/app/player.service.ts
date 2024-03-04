// player.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  addPlayer(arg0: { name: string; }) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://your-api-url/api/players';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deletePlayer(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
