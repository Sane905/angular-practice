import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LeagueListComponent } from "../league/list/league-list.component";
import { RootComponent } from "./root.component";

const routes: Routes = [{ path: "", component: RootComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RootModule {}
