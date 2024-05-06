import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { TeamRankingInfo } from "../../../../model/team_ranking_info";
import { TeamRankingInfoService } from "../../../../services/team-ranking-info.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-team-info",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./team-info.component.html",
  styleUrl: "./team-info.component.css",
})
export class TeamInfoComponent {
  // public teamRankingInfo$: Observable<TeamRankingInfo[]>;

  constructor(
    private teamRankingInfoService: TeamRankingInfoService,
    private route: ActivatedRoute
  ) {}
}
