import styles from "./RecipeCardGrid.module.scss";
import { FC } from "react";
import { RecipeCard, RecipeCardTypes } from "entities/recipe-card";
import { Button } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";

interface RecipeCardGridProps {
  items: Array<RecipeCardTypes.Card>;
}

export const RecipeCardGrid: FC<RecipeCardGridProps> = ({ items }) => {
  const navigate = useNavigate();

  const recipeCards = items.map((item) => {
    const handleClick = () => {
      console.log("ok");
      navigate(`${item.id}`);
    };

    return (
      <li key={item.title} className={styles.item}>
        <RecipeCard
          content={item}
          buttonComponent={
            <Button
              title={"view recipe"}
              theme={"light"}
              onClick={handleClick}
            />
          }
        />
      </li>
    );
  });

  return <ul className={styles.cardGrid}>{recipeCards}</ul>;
};
