import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable, map } from "rxjs";
import { TeamRankingInfo } from "../../../model/team_ranking_info";
import { TeamRankingInfoService } from "../../../services/team-ranking-info.service";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { LeagueService } from "../../../services/league.service";
import { League } from "../../../model/league";

@Component({
  selector: "app-league-detail",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./league-detail.component.html",
  styleUrl: "./league-detail.component.css",
})
export class LeagueDetailComponent {
  public teamRankingInfos$: Observable<TeamRankingInfo[]>;
  public league$: Observable<League>;
  constructor(
    private teamRankingInfoService: TeamRankingInfoService,
    private route: ActivatedRoute,
    private leagueService: LeagueService
  ) {
    const leagueUid = this.route.snapshot.params["uid"] as string;
    this.league$ = this.leagueService.getLeague(leagueUid);

    this.teamRankingInfos$ = this.teamRankingInfoService
      .getTeamRankingInfosByLeague({
        leagueUid,
        seasonYear: 2023,
      })
      .pipe(
        map((teamRankingInfos) =>
          teamRankingInfos.sort((a, b) => a.currentRank - b.currentRank)
        )
      );
  }
}
