import styles from "./RecipeCardGrid.module.scss";
import { FC } from "react";
import { Button } from "shared/ui";
import { useNavigate, generatePath } from "react-router-dom";
import { TRecipe } from "shared/api/recipes";
import { PATH_CONFIG } from "shared/config";
import { RecipeCard } from "entities/recipe-card";

interface RecipeCardGridProps {
  items: Array<TRecipe>;
}

export const RecipeCardGrid: FC<RecipeCardGridProps> = ({ items }) => {
  const navigate = useNavigate();

  const recipeCards = items.map((item) => {
    const handleClick = () => {
      navigate(
        generatePath(PATH_CONFIG.root.recipes.recipe.fullPath, {
          recipeId: item.id,
        }),
      );
    };

    return (
      <li key={item.title} className={styles.item}>
        <RecipeCard
          content={item}
          buttonComponent={
            <Button theme={"light"} onClick={handleClick}>
              view recipe
            </Button>
          }
        />
      </li>
    );
  });

  return <ul className={styles.cardGrid}>{recipeCards}</ul>;
};
