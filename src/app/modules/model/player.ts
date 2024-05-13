import { Country, CountryFromResponse, CountryResponse } from "./country";

export interface Player {
  uid: number;
  name: string;
  age: number;
  photoUrl: string;
  position: string;
  country: Country;
}

export interface PlayerResponse {
  uid: number;
  name: string;
  age: number;
  photo_url: string;
  position: string;
  country: CountryResponse;
}

export const PlayerFromResponse = (resp: PlayerResponse): Player => {
  return {
    uid: resp.uid,
    name: resp.name,
    age: resp.age,
    photoUrl: resp.photo_url,
    position: resp.position,
    country: CountryFromResponse(resp.country),
  };
};
