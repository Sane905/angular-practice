import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayerService } from "../../../services/player.service";
import { LeagueService } from "../../../services/league.service";
import { RouterModule } from "@angular/router";
import { Observable } from "rxjs";
import { League } from "../../../model/league";

@Component({
  selector: "app-league-list",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./league-list.component.html",
  styleUrl: "./league-list.component.css",
})
export class LeagueListComponent {
  public leagues$: Observable<League[]>;
  constructor(private leagueService: LeagueService) {
    this.leagues$ = this.leagueService.getLeagues();
  }

  ngOnInit(): void {}
}
