import { type FC, type JSX } from "react";
import { TResponseRecipe } from "shared/api/recipes";
import { Headline, Paragraph } from "shared/ui";
import { Cover } from "./Cover/Cover";
import { Info } from "./Info/Info";
import styles from "./RecipeCard.module.scss";

//TODO: remove ReactNode/JSX.Element and make more strict type check for buttonComponent

interface RecipeCardProps {
  content: TResponseRecipe;
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
