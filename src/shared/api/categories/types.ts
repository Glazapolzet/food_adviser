import { TRecipe } from "shared/api/recipes";

export interface TCategory {
  readonly name: string;
  readonly content: Array<TRecipe>;
}
