import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import {
  TeamRankingInfo,
  TeamRankingInfoResponse,
  TeamRankingInfoFromResponse,
} from "../model/team_ranking_info";

@Injectable({
  providedIn: "root",
})
export class TeamRankingInfoService {
  private apiUrl = "http://localhost:3000"; // API URLを指定します
  private _teamRankingInfos$: BehaviorSubject<TeamRankingInfo[]> =
    new BehaviorSubject<TeamRankingInfo[]>([]);

  constructor(private http: HttpClient) {}

  teamRankingInfos$ = this._teamRankingInfos$.asObservable();

  getTeamRankingInfosByLeague(
    params: TeamRankingInfoParams
  ): Observable<TeamRankingInfo[]> {
    return this.http
      .get<TeamRankingInfoResponse[]>(
        `${this.apiUrl}/leagues/${params.leagueUid}/team_ranking_infos.json`,
        {
          params: {
            season_year: params.seasonYear.toString(),
          },
        }
      )
      .pipe(map((response) => response.map(TeamRankingInfoFromResponse)));
  }
}

export interface TeamRankingInfoParams {
  leagueUid: string;
  seasonYear: number;
}
