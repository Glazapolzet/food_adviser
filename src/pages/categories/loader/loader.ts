import { LoaderFunction } from "react-router-dom";
import { getCategories, TCategory } from "shared/api/categories";

export const loader: LoaderFunction = async (): Promise<Array<TCategory>> => {
  return await getCategories();
};
