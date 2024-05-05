import { League, LeagueFromResponse, LeagueResponse } from "./league";

export interface Season {
  uid: string;
  endDate: string;
  league: League;
  startDate: string;
  year: number;
}

export interface SeasonResponse {
  uid: string;
  end_date: string;
  league: LeagueResponse;
  start_date: string;
  year: number;
}

export const SeasonFromResponse = (resp: SeasonResponse): Season => {
  return {
    uid: resp.uid,
    endDate: resp.end_date,
    league: LeagueFromResponse(resp.league),
    startDate: resp.start_date,
    year: resp.year,
  };
};
