import { Component } from "@angular/core";
import { PlayerService } from "../../../services/player.service";
import { Player } from "../../../model/player";
import { Observable, map } from "rxjs";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrl: "./player-list.component.css",
})
export class PlayerListComponent {
  public players$: Observable<Player[]>;

  constructor(private playerService: PlayerService) {
    this.players$ = this.playerService.getPlayers().pipe(
      map((players) => {
        return players;
      })
    );
  }

  ngOnInit(): void {}
}
