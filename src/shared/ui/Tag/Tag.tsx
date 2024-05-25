import { FC } from "react";
import styles from "./Tag.module.scss";
import { clsx } from "clsx";

interface TagProps {
  title: string;
  size: "m" | "l";
}

export const Tag: FC<TagProps> = ({ title, size }) => {
  return (
    <div className={clsx(styles.tag, styles[`tag_size_${size}`])}>
      <p className={clsx(styles.title, styles[`title_size_${size}`])}>
        {title}
      </p>
    </div>
  );
};
