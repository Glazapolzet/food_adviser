import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import { RecipeCardGrid } from "widgets/recipe-card-grid";
import { TRecipe } from "shared/api/recipes";

export const RecipesFromCategory: FC = () => {
  const data: Array<TRecipe> = useLoaderData();

  return <RecipeCardGrid items={data} />;
};
