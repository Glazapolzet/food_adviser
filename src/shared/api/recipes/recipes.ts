import { apiInstance } from "shared/api/base";
import {
  TRecipe,
  TResponseRecipe,
  TResponseRecipes,
  TSearchParams,
} from "./types";

export async function getRecipes(
  searchParams?: TSearchParams,
): Promise<TResponseRecipes> {
  if (!searchParams) {
    return await apiInstance.fetch(`/recipes`);
  }
  const urlSearchParams = new URLSearchParams(searchParams).toString();

  return await apiInstance.fetch(`/recipes?${urlSearchParams}`);
}

export async function createRecipe(data: TRecipe): Promise<TResponseRecipe> {
  return await apiInstance.fetch(`/recipes`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getRecipe(recipeId: string): Promise<TResponseRecipe> {
  return await apiInstance.fetch(`/recipes/${recipeId}`);
}

export async function editRecipe(
  recipeId: string,
  data: TRecipe,
): Promise<TResponseRecipe> {
  return await apiInstance.fetch(`/recipes/${recipeId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteRecipe(recipeId: string): Promise<TResponseRecipe> {
  return await apiInstance.fetch(`/recipes/${recipeId}`, {
    method: "DELETE",
  });
}
