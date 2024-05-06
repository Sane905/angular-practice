import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { TeamRankingInfoService } from "../../../../services/team-ranking-info.service";
import { Observable, filter, map, tap } from "rxjs";
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
  public teamRankingInfos$ = this.teamRankingInfo.teamRankingInfos$;
  public filterTeamRankingInfos$: Observable<TeamRankingInfo[]>;
  constructor(
    private teamRankingInfo: TeamRankingInfoService,
    private route: ActivatedRoute
  ) {
    const teamUid = this.route.snapshot.params["uid"] as string;
    this.filterTeamRankingInfos$ = this.teamRankingInfos$.pipe(
      map((teamRankingInfos) => {
        const filter = teamRankingInfos.filter(
          (teamRankingInfo) => teamRankingInfo.team.uid === teamUid
        );
        return teamRankingInfos.filter(
          (teamRankingInfo) =>
            teamRankingInfo.currentRank === filter[0].currentRank ||
            teamRankingInfo.currentRank === filter[0].currentRank - 1 ||
            teamRankingInfo.currentRank === filter[0].currentRank - 2 ||
            teamRankingInfo.currentRank === filter[0].currentRank + 1 ||
            teamRankingInfo.currentRank === filter[0].currentRank + 2
        );
      })
    );
  }

  get teamUid() {
    return this.route.snapshot.params["uid"] as string;
  }
}
