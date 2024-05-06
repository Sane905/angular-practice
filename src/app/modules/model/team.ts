import { League, LeagueFromResponse, LeagueResponse } from "./league";

export interface Team {
  uid: string;
  logoUrl: string;
  name: string;
  shortName: string;
  league: League;
}

export interface TeamResponse {
  uid: string;
  logo_url: string;
  name: string;
  short_name: string;
  league: LeagueResponse;
}

export const TeamFromResponse = (resp: TeamResponse): Team => {
  return {
    uid: resp.uid,
    logoUrl: resp.logo_url,
    name: resp.name,
    shortName: resp.short_name,
    league: LeagueFromResponse(resp.league),
  };
};
