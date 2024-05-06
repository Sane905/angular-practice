import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { League, LeagueResponse, LeagueFromResponse } from "../model/league";
import { HttpClient } from "@angular/common/http";
import { Team, TeamFromResponse, TeamResponse } from "../model/team";
import { TeamRankingInfo } from "../model/team_ranking_info";

@Injectable({
  providedIn: "root",
})
export class TeamService {
  private apiUrl = "http://localhost:3000/teams"; // API URLを指定します
  private _team$: BehaviorSubject<Team | null> =
    new BehaviorSubject<Team | null>(null);

  team$ = this._team$.asObservable();
  constructor(private http: HttpClient) {}

  getTeam(uid: string): Observable<Team> {
    return this.http.get<TeamResponse>(`${this.apiUrl}/${uid}`).pipe(
      map(TeamFromResponse),
      tap((team) => this._team$.next(team))
    );
  }
}
