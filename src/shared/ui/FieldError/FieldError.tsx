import { clsx } from "clsx";
import styles from "./FieldError.module.scss";
import { type FC } from "react";

interface FieldErrorProps {
  message: string;
  className?: string;
}

export const FieldError: FC<FieldErrorProps> = ({ message, className }) => {
  return (
    <span
      className={clsx(styles.error, {
        [className ?? ""]: className,
      })}
    >
      {message}
    </span>
  );
};
