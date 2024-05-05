export interface Team {
  uid: string;
  logoUrl: string;
  name: string;
  shortName: string;
}

export interface TeamResponse {
  uid: string;
  logo_url: string;
  name: string;
  short_name: string;
}

export const TeamFromResponse = (resp: TeamResponse): Team => {
  return {
    uid: resp.uid,
    logoUrl: resp.logo_url,
    name: resp.name,
    shortName: resp.short_name,
  };
};
