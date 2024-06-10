import { ButtonHTMLAttributes, FC, lazy } from "react";
import styles from "./RecipeCard.module.scss";
import { Headline, Paragraph } from "shared/ui";
import { RecipeCardInfo } from "./RecipeCardInfo/RecipeCardInfo";
import { TRecipe } from "shared/api/recipes";

const RecipeCardImage = lazy(() =>
  import("./RecipeCardImage/RecipeCardImage").then(({ RecipeCardImage }) => ({
    default: RecipeCardImage,
  })),
);

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
