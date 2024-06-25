import { type FC, ReactNode } from "react";
import styles from "./RecipeCard.module.scss";
import { Headline, Paragraph } from "shared/ui";
import { RecipeCardInfo } from "./RecipeCardInfo/RecipeCardInfo";
import { TRecipe } from "shared/api/recipes";
import { RecipeCardImage } from "./RecipeCardImage/RecipeCardImage";

//TODO: убрать ReactNode и сделать более жесткую проверку на тип кнопки

interface RecipeCardProps {
  content: TRecipe;
  buttonComponent: ReactNode;
}

export const RecipeCard: FC<RecipeCardProps> = ({
  content,
  buttonComponent,
}) => {
  const { timeToCook, difficulty, servings } = content;

  return (
    <div className={styles.card}>
      <RecipeCardImage
        src={content.cover}
        alt={content.title}
        loading={"lazy"}
      />
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
          <RecipeCardInfo content={{ timeToCook, difficulty, servings }} />
          {buttonComponent}
        </div>
      </div>
    </div>
  );
};
