import styles from "./RecipeCardGridSkeleton.module.scss";
import { RecipeCardSkeleton } from "entities/recipe-card";
import { type FC } from "react";

interface RecipeCardGridSkeletonProps {
  count: number;
}

export const RecipeCardGridSkeleton: FC<RecipeCardGridSkeletonProps> = ({
  count,
}) => {
  const items = new Array(count).fill(null);

  const recipeCards = items.map((_, index) => {
    return (
      <li key={index} className={styles.item}>
        <RecipeCardSkeleton />
      </li>
    );
  });

  return <ul className={styles.cardGrid}>{recipeCards}</ul>;
};
