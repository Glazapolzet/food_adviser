import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type HTMLInputTypeAttribute,
  useId,
} from "react";
import styles from "./Input.module.scss";
import { FieldError, Label } from "shared/ui";
import { clsx } from "clsx";

interface InputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "id" | "type"> {
  label?: string;
  type?: Exclude<
    HTMLInputTypeAttribute,
    | "checkbox"
    | "radio"
    | "color"
    | "file"
    | "range"
    | "reset"
    | "submit"
    | "button"
  >;
  error?: string | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, error, required, placeholder, className, ...props }, ref) => {
    const id = useId();

    return (
      <div
        className={clsx(styles.wrapper, {
          [className ?? ""]: className,
        })}
      >
        {label && (
          <Label htmlFor={id} forRequiredField={required}>
            {label}
          </Label>
        )}
        <div className={styles.inputContainer}>
          <input
            type={type}
            id={id}
            ref={ref}
            placeholder={placeholder}
            className={clsx(styles.input, error && styles.input_error)}
            {...props}
          />
          {error && <FieldError message={error} className={styles.error} />}
        </div>
      </div>
    );
  },
);
