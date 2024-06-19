import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { getRecipes, TRecipe } from "shared/api/recipes";

type DynamicPathParams = {
  params: {
    categoryName: string;
  };
};

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs<DynamicPathParams>): Promise<Array<TRecipe>> => {
  return await getRecipes(params.categoryName ?? "");
};
