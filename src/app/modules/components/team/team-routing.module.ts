import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TeamDetailComponent } from "./detail/team-detail.component";

const routes: Routes = [{ path: ":uid", component: TeamDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
