import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { League, LeagueResponse, LeagueFromResponse } from "../model/league";
import { HttpClient } from "@angular/common/http";
import { Team, TeamFromResponse, TeamResponse } from "../model/team";

@Injectable({
  providedIn: "root",
})
export class TeamService {
  private apiUrl = "http://localhost:3000/teams"; // API URLを指定します

  constructor(private http: HttpClient) {}

  getTeam(uid: string): Observable<Team> {
    return this.http
      .get<TeamResponse>(`${this.apiUrl}/${uid}`)
      .pipe(map(TeamFromResponse));
  }
}
