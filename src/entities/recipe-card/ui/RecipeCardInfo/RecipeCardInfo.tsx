import { FC } from "react";
import styles from "./RecipeCardInfo.module.scss";

interface RecipeCardInfoProps {
  content: {
    timeToCook: number;
    difficulty: string;
    servings: number;
  };
}

export const RecipeCardInfo: FC<RecipeCardInfoProps> = ({ content }) => {
  return (
    <div className={styles.info}>
      <p className={styles.text}>
        {content.timeToCook} - {content.difficulty} - {content.servings} serves
      </p>
    </div>
  );
};
