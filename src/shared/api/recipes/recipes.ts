import { apiInstance } from "shared/api/base";
import { TRecipe } from "./types";

export async function getRecipes(recipesCategory: string): Promise<TRecipe> {
  return await apiInstance.fetch(`/recipes/${recipesCategory}`);
}
