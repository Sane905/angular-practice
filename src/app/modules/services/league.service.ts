import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { League, LeagueFromResponse, LeagueResponse } from "../model/league";

@Injectable({
  providedIn: "root",
})
export class LeagueService {
  private apiUrl = "http://localhost:3000/leagues"; // API URLを指定します

  constructor(private http: HttpClient) {}

  getLeagues(): Observable<League[]> {
    return this.http.get<LeagueResponse[]>(this.apiUrl).pipe(
      map((response) => {
        return response.map(LeagueFromResponse);
      })
    );
  }

  getLeague(uid: string): Observable<League> {
    return this.http
      .get<LeagueResponse>(`${this.apiUrl}/${uid}`)
      .pipe(map(LeagueFromResponse));
  }
}
