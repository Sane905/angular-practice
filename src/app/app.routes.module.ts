import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/components/root/root.module").then((m) => m.RootModule),
  },
  {
    path: "leagues",
    loadChildren: () =>
      import("./modules/components/league/league.module").then(
        (m) => m.LeagueModule
      ),
  },
  {
    path: "players",
    loadChildren: () =>
      import("./modules/components/player/player.module").then(
        (m) => m.PlayerModule
      ),
  },
  {
    path: "teams",
    loadChildren: () =>
      import("./modules/components/team/team.module").then((m) => m.TeamModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
