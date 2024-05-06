import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./modules/shared/header/top-bar.component";
import { PlayerListComponent } from "./modules/components/player/list/player-list.component";
import { HttpClientModule } from "@angular/common/http";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { AppRoutingModule } from "./app.routes.module";
import { TeamDetailComponent } from "./modules/components/team/detail/team-detail.component";
import { BelongingPlayerListComponent } from "./modules/components/team/detail/belonging-player-list/belonging-player-list.component";
import { MatchInfoComponent } from "./modules/components/team/detail/match-info/match-info.component";
import { TeamInfoComponent } from "./modules/components/team/detail/team-info/team-info.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BelongingPlayerListComponent,
    MatchInfoComponent,
    TeamInfoComponent,
  ],
  declarations: [AppComponent, TopBarComponent, PlayerListComponent],
  exports: [PlayerListComponent],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
