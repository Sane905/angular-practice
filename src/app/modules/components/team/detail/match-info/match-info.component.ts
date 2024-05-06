import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { TeamRankingInfoService } from "../../../../services/team-ranking-info.service";
import { Observable, filter, map, switchMap, tap } from "rxjs";
import { TeamRankingInfo } from "../../../../model/team_ranking_info";
import { Team } from "../../../../model/team";
import { TeamService } from "../../../../services/team.service";

@Component({
  selector: "app-match-info",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./match-info.component.html",
  styleUrl: "./match-info.component.css",
})
export class MatchInfoComponent {
  public team$: Observable<Team>;
  public teamRankingInfos$: Observable<TeamRankingInfo[]>;
  public filterTeamRankingInfos$: Observable<TeamRankingInfo[]>;
  constructor(
    private teamRankingInfo: TeamRankingInfoService,
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {
    this.team$ = this.teamService.getTeam(this.teamUid);

    this.teamRankingInfos$ = this.team$.pipe(
      switchMap((team) =>
        this.teamRankingInfo.getTeamRankingInfosByLeague({
          seasonYear: 2023,
          leagueUid: team.league.uid,
        })
      )
    );

    this.filterTeamRankingInfos$ = this.teamRankingInfos$.pipe(
      map((teamRankingInfos) => {
        const filter = teamRankingInfos.filter(
          (teamRankingInfo) => teamRankingInfo.team.uid === this.teamUid
        );

        return teamRankingInfos
          .filter(
            (teamRankingInfo) =>
              teamRankingInfo.currentRank === filter[0].currentRank ||
              teamRankingInfo.currentRank === filter[0].currentRank - 1 ||
              teamRankingInfo.currentRank === filter[0].currentRank - 2 ||
              teamRankingInfo.currentRank === filter[0].currentRank + 1 ||
              teamRankingInfo.currentRank === filter[0].currentRank + 2
          )
          .sort((a, b) => a.currentRank - b.currentRank);
      })
    );
  }

  get teamUid() {
    return this.route.snapshot.params["uid"] as string;
  }
}
