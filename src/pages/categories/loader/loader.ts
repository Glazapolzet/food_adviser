import { getCategories, TCategory } from "shared/api/categories";

export async function loader(): Promise<Array<TCategory>> {
  return await getCategories();
}
