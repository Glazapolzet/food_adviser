import { type FC, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import {
  RecipeCardGrid,
  RecipeCardGridSkeleton,
} from "widgets/recipe-card-grid";
import { TResponseRecipes } from "shared/api/recipes";
import styles from "./CategoryRecipes.module.scss";

export const CategoryRecipes: FC = () => {
  const data = useLoaderData() as { recipes: Promise<TResponseRecipes> };

  return (
    <div className={styles.recipesContainer}>
      <Suspense fallback={<RecipeCardGridSkeleton count={1} />}>
        <Await resolve={data.recipes}>
          {(recipes: TResponseRecipes) => {
            return <RecipeCardGrid items={recipes.items} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
};
