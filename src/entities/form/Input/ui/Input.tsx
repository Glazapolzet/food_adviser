import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type HTMLInputTypeAttribute,
  useId,
} from "react";
import styles from "./Input.module.scss";
import { Label } from "shared/ui";
import { clsx } from "clsx";
import { Error } from "shared/ui/Error/Error";

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
      <div className={styles.wrapper}>
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
            className={clsx(styles.input, error && styles.input_error, {
              [className ?? ""]: className,
            })}
            {...props}
          />
          {error && <Error message={error} className={styles.error} />}
        </div>
      </div>
    );
  },
);
