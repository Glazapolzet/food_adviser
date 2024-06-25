import { LoaderFunction, defer } from "react-router-dom";
import { getCategories, TCategory } from "shared/api/categories";

type ReturnParams = {
  categories: Promise<Array<TCategory>>;
};

export const loader: LoaderFunction = (): Promise<ReturnParams> => {
  return defer({ categories: getCategories() });
};
