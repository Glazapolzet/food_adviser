import { LoaderFunction, LoaderFunctionArgs, defer } from "react-router-dom";
import { getRecipes } from "shared/api/recipes";

type DynamicPathParams = {
  params: {
    categoryName: string;
  };
};

export const loader: LoaderFunction = ({
  params,
}: LoaderFunctionArgs<DynamicPathParams>) => {
  return defer({ recipes: getRecipes(params.categoryName ?? "") });
};
