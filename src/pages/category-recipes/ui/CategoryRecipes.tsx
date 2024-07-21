import { type FC, Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import {
  RecipeCardGrid,
  RecipeCardGridSkeleton,
} from "widgets/recipe-card-grid";
import { TResponseRecipe } from "shared/api/recipes";
import styles from "./CategoryRecipes.module.scss";

export const CategoryRecipes: FC = () => {
  const data = useLoaderData() as { recipes: Promise<Array<TResponseRecipe>> };

  return (
    <div className={styles.recipesContainer}>
      <Suspense fallback={<RecipeCardGridSkeleton count={1} />}>
        <Await resolve={data.recipes}>
          {(recipes: Array<TResponseRecipe>) => {
            return <RecipeCardGrid items={recipes} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
};
