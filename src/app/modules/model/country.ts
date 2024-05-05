export interface Country {
  uid: string;
  name: string;
}

export interface CountryResponse {
  uid: string;
  name: string;
}

export const CountryFromResponse = (resp: CountryResponse): Country => {
  return {
    uid: resp.uid,
    name: resp.name,
  };
};
