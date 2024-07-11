import { type FC, type JSX } from "react";
import styles from "./RecipeCard.module.scss";
import { Headline, Paragraph } from "shared/ui";
import { Info } from "./Info/Info";
import { TRecipe } from "shared/api/recipes";
import { Cover } from "./Cover/Cover";

//TODO: remove ReactNode/JSX.Element and make more strict type check on buttonComponent

interface RecipeCardProps {
  content: TRecipe;
  buttonComponent: JSX.Element;
}

export const RecipeCard: FC<RecipeCardProps> = ({
  content,
  buttonComponent,
}) => {
  const { timeToCook, difficulty, servings } = content;

  return (
    <div className={styles.card}>
      <Cover src={content.cover} alt={content.title} loading={"lazy"} />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <Headline type={"3"} theme={"light"} className={styles.headline}>
            {content.title}
          </Headline>
          <Paragraph type={"2"} theme={"light"} className={styles.paragraph}>
            {content.description}
          </Paragraph>
        </div>
        <div className={styles.infoContainer}>
          <Info content={{ timeToCook, difficulty, servings }} />
          {buttonComponent}
        </div>
      </div>
    </div>
  );
};
