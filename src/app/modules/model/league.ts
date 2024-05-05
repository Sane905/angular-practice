export interface League {
  uid: string;
  name: string;
}

export interface LeagueResponse {
  uid: string;
  name: string;
}

export const LeagueFromResponse = (resp: LeagueResponse): League => {
  return {
    uid: resp.uid,
    name: resp.name,
  };
};
