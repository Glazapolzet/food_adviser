import { clsx } from "clsx";
import styles from "./Error.module.scss";
import { type FC } from "react";

interface ErrorProps {
  message: string;
  className?: string;
}

export const Error: FC<ErrorProps> = ({ message, className, ...props }) => {
  return (
    <span
      className={clsx(styles.error, {
        [className ?? ""]: className,
      })}
      {...props}
    >
      {message}
    </span>
  );
};
