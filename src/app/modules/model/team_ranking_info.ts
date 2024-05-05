import { Season, SeasonFromResponse, SeasonResponse } from "./season";
import { Team, TeamFromResponse, TeamResponse } from "./team";

export interface TeamRankingInfoResponse {
  uid: string;
  current_rank: number;
  equal_count: number;
  lose_count: number;
  total_point: number;
  win_count: number;
  match_count: number;
  team: TeamResponse;
  season: SeasonResponse;
}

export interface TeamRankingInfo {
  uid: string;
  currentRank: number;
  equalCount: number;
  loseCount: number;
  totalPoint: number;
  winCount: number;
  matchCount: number;
  team: Team;
  season: Season;
}

export const TeamRankingInfoFromResponse = (
  resp: TeamRankingInfoResponse
): TeamRankingInfo => {
  return {
    uid: resp.uid,
    currentRank: resp.current_rank,
    equalCount: resp.equal_count,
    loseCount: resp.lose_count,
    totalPoint: resp.total_point,
    winCount: resp.win_count,
    matchCount: resp.match_count,
    team: TeamFromResponse(resp.team),
    season: SeasonFromResponse(resp.season),
  };
};
