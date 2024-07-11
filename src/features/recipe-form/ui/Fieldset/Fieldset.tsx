import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./Fieldset.module.scss";

interface FieldsetProps extends ComponentPropsWithoutRef<"fieldset"> {
  legend?: string;
  children?: ReactNode;
}

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ legend, children, className, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        className={clsx(styles.fieldset, { [className ?? ""]: className })}
        {...props}
      >
        {legend && <legend className={styles.legend}>{legend}</legend>}
        {children}
      </fieldset>
    );
  },
);
