import { TCategory } from "shared/api/categories/types";
import { apiInstance } from "shared/api/base";

export async function getCategories(): Promise<Array<TCategory>> {
  return await apiInstance.fetch(`/recipes/categories`);
}
