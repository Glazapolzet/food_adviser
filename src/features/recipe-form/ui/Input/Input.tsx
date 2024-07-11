import {
  type ComponentPropsWithoutRef,
  type FC,
  forwardRef,
  useId,
} from "react";
import styles from "./Input.module.scss";
import { Label } from "../Label/Label";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
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
