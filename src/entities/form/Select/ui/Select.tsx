import { type ComponentPropsWithoutRef, forwardRef, useId } from "react";
import { Label } from "shared/ui";
import styles from "./Select.module.scss";
import { clsx } from "clsx";

interface SelectProps
  extends Omit<
    ComponentPropsWithoutRef<"select">,
    "className" | "defaultValue" | "children"
  > {
  name: string;
  label?: string;
  error?: string | undefined;
  options?: Array<string>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, options, error, required, ...props }, ref) => {
    const id = useId();

    return (
      <div className={styles.wrapper}>
        {label && (
          <Label htmlFor={id} forRequiredField={required}>
            {label}
          </Label>
        )}
        <select
          id={id}
          ref={ref}
          name={name}
          className={clsx(styles.select, error && styles.error)}
          defaultValue={""}
          {...props}
        >
          <option value={""} disabled={true}>
            -- Select {name} --
          </option>
          {options?.length &&
            options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
        </select>
      </div>
    );
  },
);
