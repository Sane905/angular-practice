import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Match, MatchFromResponse, MatchResponse } from "../model/match";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MatchService {
  private apiUrl = "http://localhost:3000"; // API URLを指定します

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    return this.http
      .get<MatchResponse[]>(`${this.apiUrl}/matches.json`)
      .pipe(map((response) => response.map(MatchFromResponse)));
  }
  getMatchesByTeam(teamUid: string): Observable<Match[]> {
    return this.http
      .get<MatchResponse[]>(`${this.apiUrl}/teams/${teamUid}/matches.json`)
      .pipe(map((response) => response.map(MatchFromResponse)));
  }
}
