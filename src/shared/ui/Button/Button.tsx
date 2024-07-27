import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
} from "react";
import { clsx } from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  theme: "light" | "dark";
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ theme, children, className, ...props }, ref) => {
    return (
      <button
        className={clsx(styles.button, styles[`button_theme_${theme}`], {
          [className ?? ""]: className,
        })}
        ref={ref}
        {...props}
      >
        {children || "button"}
      </button>
    );
  },
);
