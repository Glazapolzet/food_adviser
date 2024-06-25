import { ComponentProps, FC, ReactNode } from "react";
import { clsx } from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  theme: "light" | "dark";
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  theme,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, styles[`button_theme_${theme}`])}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
