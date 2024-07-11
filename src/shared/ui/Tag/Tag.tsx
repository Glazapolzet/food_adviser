import type { FC, ReactNode } from "react";
import styles from "./Tag.module.scss";
import { clsx } from "clsx";

interface TagProps {
  size: "m" | "l";
  children: ReactNode;
}

export const Tag: FC<TagProps> = ({ size, children }) => {
  return (
    <div className={clsx(styles.tag, styles[`tag_size_${size}`])}>
      <p className={clsx(styles.title, styles[`title_size_${size}`])}>
        {children}
      </p>
    </div>
  );
};
