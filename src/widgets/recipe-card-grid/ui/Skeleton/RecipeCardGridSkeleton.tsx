import styles from "./RecipeCardGridSkeleton.module.scss";
import { RecipeCardSkeleton } from "entities/recipe-card";
import { type FC } from "react";

interface RecipeCardGridSkeletonProps {
  count: number;
}

export const RecipeCardGridSkeleton: FC<RecipeCardGridSkeletonProps> = ({
  count,
}) => {
  const items = new Array(count).fill({ id: crypto.randomUUID() }) as Array<{
    id: ReturnType<typeof crypto.randomUUID>;
  }>;

  const recipeCards = items.map((item) => {
    return (
      <li key={item.id} className={styles.item}>
        <RecipeCardSkeleton />
      </li>
    );
  });

  return <ul className={styles.cardGrid}>{recipeCards}</ul>;
};
