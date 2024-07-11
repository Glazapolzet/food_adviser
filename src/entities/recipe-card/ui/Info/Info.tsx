import { FC } from "react";
import styles from "./Info.module.scss";

interface InfoProps {
  content: {
    timeToCook: number;
    difficulty: string;
    servings: number;
  };
}

export const Info: FC<InfoProps> = ({ content }) => {
  return (
    <div className={styles.info}>
      <p className={styles.text}>
        {content.timeToCook} - {content.difficulty} - {content.servings} serves
      </p>
    </div>
  );
};
