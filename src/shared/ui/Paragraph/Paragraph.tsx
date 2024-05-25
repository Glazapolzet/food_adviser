import { FC } from "react";
import { clsx } from "clsx";
import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  title: string;
  type: "1" | "2" | "3";
  theme: "light" | "dark";
}

export const Paragraph: FC<ParagraphProps> = ({ title, type, theme }) => {
  const cls = clsx(
    styles.paragraph,
    styles[`paragraph_type_${type}`],
    styles[`paragraph_theme_${theme}`],
  );

  return <p className={cls}>{title}</p>;
};
