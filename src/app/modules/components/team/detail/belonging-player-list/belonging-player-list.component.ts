import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayerService } from "../../../../services/player.service";
import { ActivatedRoute } from "@angular/router";
import { Observable, map } from "rxjs";
import { Player } from "../../../../model/player";

@Component({
  selector: "app-belonging-player-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./belonging-player-list.component.html",
  styleUrl: "./belonging-player-list.component.css",
})
export class BelongingPlayerListComponent {
  public players$: Observable<Player[]>;
  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) {
    const teamUid = this.route.snapshot.params["uid"] as string;
    this.players$ = this.playerService.getPlayersByTeam(teamUid);
  }
}
