import { Component } from "@angular/core";
import { PlayerService } from "../../../services/player.service";
import { Player } from "../../../model/player";
import { Observable } from "rxjs";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrl: "./player-list.component.css",
})
export class PlayerListComponent {
  constructor(private playerService: PlayerService) {}
  public players$ = this.playerService.getPlayers();

  ngOnInit(): void {}
}
