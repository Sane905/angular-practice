import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { SwPush } from "@angular/service-worker";
import { Observable, Observer } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  private apiUrl = "https://localhost:3000/subscriptions"; // API URLを指定します

  constructor(private swPush: SwPush, private http: HttpClient) {
    this.swPush
      .requestSubscription({
        serverPublicKey:
          "BOJ_BaTcM6LkCH3xcB53hNyb81CPo88k51biP9uQt-cFKHp4zXTw7Z2XVufKsXKLVIYpgcC86V6etVkEHsHbjpE=",
      })
      .then((subscription) => {
        // エンドポイントと暗号化キーをサーバーに送信
        this.http.post(this.apiUrl, subscription).subscribe();
      })
      .catch(console.error);
  }
  ngOnInit() {
    this.swPush.messages.subscribe((message) => {
      console.log(message);
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
