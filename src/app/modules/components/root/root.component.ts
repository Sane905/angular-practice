import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatchService } from "../../services/match.service";
import { Observable } from "rxjs";
import { Match } from "../../model/match";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./root.component.html",
  styleUrl: "./root.component.css",
})
export class RootComponent {
  public matches$: Observable<Match[]>;
  constructor(private matchService: MatchService) {
    this.matches$ = this.matchService.getMatches();
  }
}
