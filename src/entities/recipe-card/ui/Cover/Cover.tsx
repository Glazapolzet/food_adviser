import type { ComponentPropsWithoutRef, FC } from "react";
import styles from "./Cover.module.scss";
import { forwardRef } from "react";

interface ImageProps extends ComponentPropsWithoutRef<"img"> {
  src: string;
  alt: string;
}

export const Cover = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, ...props }, ref) => {
    return (
      <img ref={ref} className={styles.image} src={src} alt={alt} {...props} />
    );
  },
) as FC<ImageProps>;
