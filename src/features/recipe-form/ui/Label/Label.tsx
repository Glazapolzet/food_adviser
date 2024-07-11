import {
  type ComponentPropsWithoutRef,
  type FC,
  forwardRef,
  type ReactNode,
} from "react";
import styles from "./Label.module.scss";

interface LabelProps extends ComponentPropsWithoutRef<"label"> {
  children?: ReactNode;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <label ref={ref} className={styles.label} {...props}>
        <p className={styles.labelText}>{children}</p>
      </label>
    );
  },
);
