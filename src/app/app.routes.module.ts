import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlayerListComponent } from "./modules/components/player/list/player-list.component";
import { LeagueListComponent } from "./modules/components/league/list/league-list.component";
import { LeagueDetailComponent } from "./modules/components/league/detail/league-detail.component";
import { TeamDetailComponent } from "./modules/components/team/detail/team-detail.component";
import { PlayerDetailComponent } from "./modules/components/player/detail/player-detail.component";

const routes: Routes = [
  { path: "players", component: PlayerListComponent },
  { path: "players/:uid", component: PlayerDetailComponent },
  { path: "leagues", component: LeagueListComponent },
  { path: "leagues/:uid", component: LeagueDetailComponent }, // Add this line to set the path for league detail page
  { path: "teams/:uid", component: TeamDetailComponent }, // Add this line to set the path for league detail page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
