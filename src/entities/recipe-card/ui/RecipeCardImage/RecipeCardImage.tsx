import { FC, ImgHTMLAttributes } from "react";
import styles from "./RecipeCardImage.module.scss";

interface RecipeCardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const RecipeCardImage: FC<RecipeCardImageProps> = ({
  src,
  alt,
  ...props
}) => {
  return <img className={styles.image} src={src} alt={alt} {...props} />;
};
