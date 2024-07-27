import { ComponentPropsWithoutRef, forwardRef, useId } from "react";
import styles from "./TextArea.module.scss";
import { clsx } from "clsx";
import { Label } from "shared/ui";

interface TextAreaProps
  extends Omit<ComponentPropsWithoutRef<"textarea">, "id"> {
  label?: string;
  error?: string | undefined;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, required, className, ...props }, ref) => {
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
        <textarea
          id={id}
          ref={ref}
          className={clsx(styles.textarea, error && styles.textarea_error)}
          {...props}
        />
      </div>
    );
  },
);
