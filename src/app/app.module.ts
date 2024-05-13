import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./modules/shared/header/top-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { AppRoutingModule } from "./app.routes.module";
import { TeamDetailComponent } from "./modules/components/team/detail/team-detail.component";
import { BelongingPlayerListComponent } from "./modules/components/team/detail/belonging-player-list/belonging-player-list.component";
import { MatchInfoComponent } from "./modules/components/team/detail/match-info/match-info.component";
import { TeamInfoComponent } from "./modules/components/team/detail/team-info/team-info.component";
import { LeagueModule } from "./modules/components/league/league.module";
import { PlayerModule } from "./modules/components/player/player.module";
import { TeamModule } from "./modules/components/team/team.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { provideFirebaseApp, getApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
const config = {
  apiKey: "AIzaSyD6E9OYBX72KCRcnwPAzDjVy8MmDbbEgfw",
  authDomain: "stackblitzfire.firebaseapp.com",
  databaseURL: "https://stackblitzfire.firebaseio.com",
  storageBucket: "stackblitzfire.appspot.com",
  messagingSenderId: "42917465053",
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
    provideFirebaseApp(() => initializeApp()),
    provideFirestore(() => getFirestore()),
  ],
  declarations: [AppComponent, TopBarComponent],
  exports: [],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
