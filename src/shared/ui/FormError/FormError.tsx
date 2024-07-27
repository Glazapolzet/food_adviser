import type { FC } from "react";
import styles from "./FormError.module.scss";
import { clsx } from "clsx";

interface FormErrorProps {
  message: string;
  className?: string;
}

export const FormError: FC<FormErrorProps> = ({ message, className }) => {
  return (
    <div className={styles.formError}>
      <div className={styles.container}>
        <p className={clsx(styles.errorText, { [className ?? ""]: className })}>
          {message}
        </p>
      </div>
    </div>
  );
};