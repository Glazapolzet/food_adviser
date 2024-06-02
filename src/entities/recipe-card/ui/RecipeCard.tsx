import { ButtonHTMLAttributes, FC } from "react";
import { RecipeCardImage } from "entities/recipe-card/ui/RecipeCardImage/RecipeCardImage";
import styles from "./RecipeCard.module.scss";
import { Headline } from "shared/ui";
import { Paragraph } from "shared/ui/Paragraph/Paragraph";
import { RecipeCardInfo } from "entities/recipe-card/ui/RecipeCardInfo/RecipeCardInfo";
import { TRecipe } from "shared/api/recipes";

interface RecipeCardProps {
  content: TRecipe;
  buttonComponent: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const RecipeCard: FC<RecipeCardProps> = ({
  content,
  buttonComponent,
}) => {
  const { timeToCook, difficulty, servings } = content;

  return (
    <div className={styles.card}>
      <RecipeCardImage src={content.cover} alt={content.title} />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <Headline
            title={content.title}
            type={"3"}
            theme={"light"}
            className={styles.headline}
          />
          <Paragraph
            title={content.description}
            type={"2"}
            theme={"light"}
            className={styles.paragraph}
          />
        </div>
        <div className={styles.infoContainer}>
          <RecipeCardInfo content={{ timeToCook, difficulty, servings }} />
          {buttonComponent}
        </div>
      </div>
    </div>
  );
};
