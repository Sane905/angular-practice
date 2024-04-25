// player.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Player } from "../model/player";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  private apiUrl = "http://localhost:3000/players"; // API URLを指定します

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }
}
