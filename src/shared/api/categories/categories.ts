import { TCategory, TResponseCategories, TResponseCategory } from "./types";
import { apiInstance } from "../base";

export async function getCategories(): Promise<TResponseCategories> {
  return await apiInstance.fetch(`/recipes/categories`);
}

export async function createCategory(
  data: TCategory,
): Promise<TResponseCategory> {
  return await apiInstance.fetch(`/recipes/categories`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getCategory(
  categoryId: string,
): Promise<TResponseCategory> {
  return await apiInstance.fetch(`/recipes/categories/${categoryId}`);
}

export async function editCategory(
  categoryId: string,
  data: TCategory,
): Promise<TResponseCategory> {
  return await apiInstance.fetch(`/recipes/categories/${categoryId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteCategory(
  categoryId: string,
): Promise<TResponseCategory> {
  return await apiInstance.fetch(`/recipes/categories/${categoryId}`, {
    method: "DELETE",
  });
}
