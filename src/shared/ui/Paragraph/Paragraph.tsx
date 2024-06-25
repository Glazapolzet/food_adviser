import { FC, ReactNode } from "react";
import { clsx } from "clsx";
import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  type: "1" | "2" | "3";
  theme: "light" | "dark";
  className?: string;
  children: ReactNode;
}

export const Paragraph: FC<ParagraphProps> = ({
  type,
  theme,
  className,
  children,
}) => {
  const cls = clsx(
    styles.paragraph,
    styles[`paragraph_type_${type}`],
    styles[`paragraph_theme_${theme}`],
    { [className ?? ""]: className },
  );

  return <p className={cls}>{children}</p>;
};
