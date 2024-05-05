// player.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Player, PlayerFromResponse, PlayerResponse } from "../model/player";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  private apiUrl = "http://localhost:3000"; // API URLを指定します

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<PlayerResponse[]>(`${this.apiUrl}/players.json`).pipe(
      map((response) => {
        return response.map(PlayerFromResponse);
      })
    );
  }

  getPlayersByTeam(teamUid: string): Observable<Player[]> {
    return this.http
      .get<PlayerResponse[]>(`${this.apiUrl}/teams/${teamUid}/players.json`)
      .pipe(map((response) => response.map(PlayerFromResponse)));
  }
}
