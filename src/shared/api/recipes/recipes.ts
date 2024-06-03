import { apiInstance } from "shared/api/base";
import { TRecipe } from "./types";

export async function getRecipes(
  recipesCategory: string,
): Promise<Array<TRecipe>> {
  return await apiInstance.fetch(`/recipes/categories/${recipesCategory}`);
}

// export async function getRecipe(recipeId: string): Promise<#data with Markdown recipe file> {}
