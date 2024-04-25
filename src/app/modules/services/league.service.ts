import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { League } from "../model/league";

@Injectable({
  providedIn: "root",
})
export class LeagueService {
  private apiUrl = "http://localhost:3000/leagues"; // API URLを指定します

  constructor(private http: HttpClient) {}

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(this.apiUrl);
  }
}
