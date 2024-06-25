import { type FC, Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import {
  RecipeCardGrid,
  RecipeCardGridSkeleton,
} from "widgets/recipe-card-grid";
import { TRecipe } from "shared/api/recipes";

export const RecipesFromCategory: FC = () => {
  const data = useLoaderData() as { recipes: Promise<Array<TRecipe>> };

  return (
    <Suspense fallback={<RecipeCardGridSkeleton count={1} />}>
      <Await resolve={data.recipes}>
        {(recipes: Awaited<Array<TRecipe>>) => {
          return <RecipeCardGrid items={recipes} />;
        }}
      </Await>
    </Suspense>
  );
};
