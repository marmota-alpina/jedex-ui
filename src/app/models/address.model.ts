export interface AddressModel {
  postal_code: string;
  type: string;
  address: string;
  latitude: string;
  longitude: string;
  is_active: boolean;
  city: City
  neighborhood: Neighborhood;
  state: State;
}

export interface State {
  name: string;
  capital: string;
  region: string;
  abbreviation: string;
}
export interface City {
  id: number;
  name: string;
}

export interface Neighborhood {
  name: string;
  neighborhood_id: string;
}
