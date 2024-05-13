import { Team, TeamFromResponse, TeamResponse } from "./team";

export interface Match {
  uid: string;
  name: string;
  status: string;
  matchDay: number;
  startDate: string;
  homeTeamScore: number;
  awayTeamScore: number;
  homeTeam: Team;
  awayTeam: Team;
}

export interface MatchResponse {
  uid: string;
  name: string;
  status: string;
  match_day: number;
  start_date: string;
  home_team_score: number;
  away_team_score: number;
  home_team: TeamResponse;
  away_team: TeamResponse;
}

export const MatchFromResponse = (resp: MatchResponse): Match => {
  return {
    uid: resp.uid,
    name: resp.name,
    status: resp.status,
    matchDay: resp.match_day,
    startDate: resp.start_date,
    homeTeamScore: resp.home_team_score,
    awayTeamScore: resp.away_team_score,
    homeTeam: TeamFromResponse(resp.home_team),
    awayTeam: TeamFromResponse(resp.away_team),
  };
};
