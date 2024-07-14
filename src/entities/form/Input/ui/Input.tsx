import { type ComponentPropsWithoutRef, forwardRef, useId } from "react";
import styles from "./Input.module.scss";
import { Label } from "shared/ui";

interface InputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "className"> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    const id = useId();

    return (
      <div className={styles.wrapper}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <input id={id} ref={ref} className={styles.input} {...props} />
      </div>
    );
  },
);
