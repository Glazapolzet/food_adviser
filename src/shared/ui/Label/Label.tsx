import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
} from "react";
import styles from "./Label.module.scss";
import { clsx } from "clsx";

interface LabelProps extends ComponentPropsWithoutRef<"label"> {
  forRequiredField?: boolean | undefined;
  children?: ReactNode;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ forRequiredField, className, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(styles.label, forRequiredField && styles.required, {
          [className ?? ""]: className,
        })}
        {...props}
      >
        <p className={styles.labelText}>{children}</p>
      </label>
    );
  },
);
