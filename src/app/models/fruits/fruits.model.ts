export interface FruitModel {
  id: number;
  name: string;
  category: string;
  color: string;
  vitamins: string[];
  season: string[];
  price: number;
}

export interface FruitsResponse {
  fruits: FruitModel[];
}