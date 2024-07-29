export interface Neighborhood {
  name: string;
  apiId: number;
}

export interface District {
  name: string;
  apiId: number;
  neighborhoods: Neighborhood[];
}

export interface Province {
  name: string;
  apiId: number;
  districts: District[];
}
