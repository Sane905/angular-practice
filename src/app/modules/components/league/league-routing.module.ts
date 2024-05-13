import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeagueListComponent } from "./list/league-list.component";
import { LeagueDetailComponent } from "./detail/league-detail.component";

const routes: Routes = [
  {
    path: "",
    component: LeagueListComponent,
  },
  {
    path: ":uid",
    component: LeagueDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueRoutingModule {}
