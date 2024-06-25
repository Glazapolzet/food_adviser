import { LoaderFunction, LoaderFunctionArgs, defer } from "react-router-dom";
import { getRecipes, TRecipe } from "shared/api/recipes";

type DynamicPathParams = {
  params: {
    categoryName: string;
  };
};

type ReturnParams = {
  recipes: Promise<Array<TRecipe>>;
};

export const loader: LoaderFunction = ({
  params,
}: LoaderFunctionArgs<DynamicPathParams>): Promise<ReturnParams> => {
  return defer({ recipes: getRecipes(params.categoryName ?? "") });
};
