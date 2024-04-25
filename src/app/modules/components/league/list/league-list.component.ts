import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayerService } from "../../../services/player.service";
import { LeagueService } from "../../../services/league.service";

@Component({
  selector: "app-league-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./league-list.component.html",
  styleUrl: "./league-list.component.css",
})
export class LeagueListComponent {
  constructor(private leagueService: LeagueService) {}
  public leagues$ = this.leagueService.getLeagues();

  ngOnInit(): void {}
}
