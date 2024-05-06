import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import {
  TeamRankingInfo,
  TeamRankingInfoFromResponse,
  TeamRankingInfoResponse,
} from "../model/team_ranking_info";
import { LeagueFromResponse } from "../model/league";

@Injectable({
  providedIn: "root",
})
export class TeamRankingInfoService {
  private apiUrl = "http://localhost:3000/team_ranking_infos.json"; // API URLを指定します
  private _teamRankingInfos$: BehaviorSubject<TeamRankingInfo[]> =
    new BehaviorSubject<TeamRankingInfo[]>([]);

  constructor(private http: HttpClient) {}

  teamRankingInfos$ = this._teamRankingInfos$.asObservable();

  getTeamRankingInfosByLeague(
    params: TeamRankingInfoParams
  ): Observable<TeamRankingInfo[]> {
    return this.http
      .get<TeamRankingInfoResponse[]>(this.apiUrl, {
        params: {
          league_uid: params.leagueUid,
          season_year: params.seasonYear.toString(),
        },
      })
      .pipe(
        map((response) => response.map(TeamRankingInfoFromResponse)),
        tap((teamRankingInfos) =>
          this._teamRankingInfos$.next(teamRankingInfos)
        )
      );
  }
}

export interface TeamRankingInfoParams {
  leagueUid: string;
  seasonYear: number;
}
