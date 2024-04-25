import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlayerListComponent } from "./modules/components/player/list/player-list.component";
import { LeagueListComponent } from "./modules/components/league/list/league-list.component";

const routes: Routes = [
  { path: "players", component: PlayerListComponent },
  { path: "leagues", component: LeagueListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
