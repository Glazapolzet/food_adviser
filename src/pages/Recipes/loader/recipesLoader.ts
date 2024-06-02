import { getRecipes } from "shared/api/recipes";

export async function recipesLoader({ params }) {
  console.log(params);

  return await getRecipes(params.recipesCategory);
}
