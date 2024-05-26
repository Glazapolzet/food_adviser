import { FC } from "react";
import { RecipeCardTypes } from "entities/recipe-card/model";
import styles from "./RecipeCardInfo.module.scss";

interface RecipeCardInfoProps {
  content: RecipeCardTypes.Info;
}

export const RecipeCardInfo: FC<RecipeCardInfoProps> = ({ content }) => {
  return (
    <div className={styles.info}>
      <p className={styles.text}>
        {content.timeToCook} - {content.difficulty} - {content.servings}
      </p>
    </div>
  );
};
