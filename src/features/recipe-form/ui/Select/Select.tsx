import {
  type ComponentPropsWithoutRef,
  type FC,
  forwardRef,
  type ReactNode,
  useId,
} from "react";
import { Label } from "../Label/Label";
import styles from "./Select.module.scss";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label?: string;
  children?: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, children, ...props }, ref) => {
    const id = useId();

    return (
      <div className={styles.wrapper}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <select id={id} ref={ref} className={styles.select} {...props}>
          {children}
        </select>
      </div>
    );
  },
);
