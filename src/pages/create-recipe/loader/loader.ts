import { LoaderFunction, defer } from "react-router-dom";
import { getCategories } from "shared/api/categories";

export const loader: LoaderFunction = () => {
  return defer({ categories: getCategories() });
};
