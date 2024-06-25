export interface TRecipe {
  readonly id: string;
  readonly cover: string;
  readonly title: string;
  readonly description: string;
  readonly timeToCook: number;
  readonly difficulty: string;
  readonly servings: number;
  readonly category: string;
  readonly ingredients: string[];
  readonly nutrients: {
    [index: string]: string;
  };
}
