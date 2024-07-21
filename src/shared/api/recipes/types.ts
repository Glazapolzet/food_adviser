import { StringifyObjectValues } from "shared/types";

export interface TRecipe {
  cover: string;
  title: string;
  description: string;
  timeToCook: number;
  difficulty: string;
  servings: number;
  category: string;
  ingredients: string[];
  nutrients: {
    [index: string]: number;
  };
  guideline: string;
}

export interface TResponseRecipe extends Readonly<TRecipe> {
  readonly id: string;
}

export interface TResponseRecipes {
  readonly count: number;
  readonly items: Array<TResponseRecipe>;
}

// type TSearchParams = ConstructorParameters<typeof URLSearchParams>[0];

export type TSearchParams =
  | StringifyObjectValues<{ categoryId: string }>
  | StringifyObjectValues<{ categoryName: string }>;
