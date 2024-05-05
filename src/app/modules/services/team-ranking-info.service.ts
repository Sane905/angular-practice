import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
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

  constructor(private http: HttpClient) {}

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
      .pipe(map((response) => response.map(TeamRankingInfoFromResponse)));
  }
}

export interface TeamRankingInfoParams {
  leagueUid: string;
  seasonYear: number;
}
