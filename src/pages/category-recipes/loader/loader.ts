import { defer, LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { getRecipes } from "shared/api/recipes";
import { isObjectEmpty } from "shared/lib";

type DynamicPathParams = {
  params: {
    categoryId: string | Record<string, never>;
  };
};

export const loader: LoaderFunction = ({
  params,
}: LoaderFunctionArgs<DynamicPathParams>) => {
  if (isObjectEmpty(params)) {
    return defer({
      recipes: getRecipes(),
    });
  }

  return defer({
    recipes: getRecipes({ categoryId: params.categoryId }),
  });
};
