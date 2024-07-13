import { type ComponentPropsWithoutRef, forwardRef, useId } from "react";
import { Label } from "shared/ui";
import styles from "./Select.module.scss";

interface SelectProps
  extends Omit<
    ComponentPropsWithoutRef<"select">,
    "className" | "defaultValue" | "children"
  > {
  label?: string;
  name: string;
  options?: Array<string>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, options, ...props }, ref) => {
    const id = useId();

    return (
      <div className={styles.wrapper}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <select
          id={id}
          ref={ref}
          name={name}
          className={styles.select}
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
