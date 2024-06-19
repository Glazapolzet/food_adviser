import { FC } from "react";
import styles from "./Headline.module.scss";
import { clsx } from "clsx";

interface HeadlineProps {
  title: string;
  type: "1" | "2" | "3";
  theme: "light" | "dark";
  className?: string;
}

export const Headline: FC<HeadlineProps> = ({
  title,
  type,
  theme,
  className,
}) => {
  const cls = clsx(
    styles.headline,
    styles[`headline_type_${type}`],
    styles[`headline_theme_${theme}`],
    { [className ?? ""]: className },
  );

  switch (type) {
    case "1":
      return <h1 className={cls}>{title}</h1>;
    case "2":
      return <h2 className={cls}>{title}</h2>;
    case "3":
      return <h3 className={cls}>{title}</h3>;
  }
};
