import { FC } from "react";
import styles from "./RecipeCardImage.module.scss";

interface RecipeCardImageProps {
  src: string;
  alt: string;
}

export const RecipeCardImage: FC<RecipeCardImageProps> = ({ src, alt }) => {
  return <img className={styles.image} src={src} alt={alt} />;
};
