import styles from "./RecipeCardGrid.module.scss";
import { FC } from "react";
import { RecipeCard, RecipeCardTypes } from "entities/recipe-card";
import { Button } from "shared/ui/Button/Button";

//api ??

interface RecipeCardGridProps {
  items: Array<RecipeCardTypes.Card>;
}

export const RecipeCardGrid: FC<RecipeCardGridProps> = ({ items }) => {
  return (
    <ul className={styles.cardGrid}>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <RecipeCard
            content={item}
            buttonComponent={
              <Button
                title={"view recipe"}
                theme={"light"}
                onClick={() => console.log("clicked")}
              />
            }
          />
        </li>
      ))}
    </ul>
  );
};
