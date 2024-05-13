import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlayerDetailComponent } from "./detail/player-detail.component";

const routes: Routes = [
  {
    path: ":uid",
    component: PlayerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
