import { ButtonHTMLAttributes, FC, lazy, Suspense } from "react";
import styles from "./RecipeCard.module.scss";
import { Headline } from "shared/ui";
import { Paragraph } from "shared/ui/Paragraph/Paragraph";
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
      <Suspense>
        <RecipeCardImage src={content.cover} alt={content.title} />
      </Suspense>
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
