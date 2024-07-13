import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
} from "react";
import styles from "./Label.module.scss";
import { clsx } from "clsx";

interface LabelProps extends ComponentPropsWithoutRef<"label"> {
  forRequiredField?: boolean;
  children?: ReactNode;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ forRequiredField = false, className, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(styles.label, {
          [styles.required]: forRequiredField,
          [className ?? ""]: className,
        })}
        {...props}
      >
        <p className={styles.labelText}>{children}</p>
      </label>
    );
  },
);
