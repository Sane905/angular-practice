import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { TeamService } from "../../../services/team.service";
import { Observable } from "rxjs";
import { Team } from "../../../model/team";
import { BelongingPlayerListComponent } from "./belonging-player-list/belonging-player-list.component";
import { MatchInfoComponent } from "./match-info/match-info.component";
import { TeamInfoComponent } from "./team-info/team-info.component";

@Component({
  selector: "app-team-detail",
  standalone: true,
  imports: [
    CommonModule,
    BelongingPlayerListComponent,
    MatchInfoComponent,
    TeamInfoComponent,
  ],
  templateUrl: "./team-detail.component.html",
  styleUrl: "./team-detail.component.css",
})
export class TeamDetailComponent implements OnInit {
  public team$: Observable<Team>;
  public selectedTab: string = "matches"; // デフォルトのタブを設定

  constructor(private teamService: TeamService, private route: ActivatedRoute) {
    const teamUid = this.route.snapshot.params["uid"] as string;
    this.team$ = this.teamService.getTeam(teamUid);
  }

  ngOnInit() {}

  // タブを選択するメソッドを追加
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
