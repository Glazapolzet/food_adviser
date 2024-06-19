import { ComponentProps, FC } from "react";
import { clsx } from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  title: string;
  theme: "light" | "dark";
}

export const Button: FC<ButtonProps> = ({
  title,
  theme,
  onClick,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, styles[`button_theme_${theme}`])}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
};
