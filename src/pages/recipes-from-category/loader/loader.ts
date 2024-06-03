import { getRecipes, TRecipe } from "shared/api/recipes";

type DynamicPathParams = {
  params: {
    categoryName: string;
  };
};

export async function loader({
  params,
}: DynamicPathParams): Promise<Array<TRecipe>> {
  return await getRecipes(params.categoryName);
}
