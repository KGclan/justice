import { apiInstance } from "./base";

interface IHops {
  add: string;
  amount: { value: number, unit: string };
  attribute: string;
  name: string;
}

interface IMalt {
  amount: { value: number, unit: string };
  name: string;
}

interface IIngridients {
  hops: IHops[];
  malt: IMalt[];
  yeast: string;
}

export interface IBeer {
  abv: number;
  attenuation_level: number;
  boil_volume: { value: number, unit: string };
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: IIngridients;
  method: any;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: { value: number, unit: string; };
}

export const getBeers = () => (
  apiInstance.get<IBeer[]>("beers")
);
