import {
  ComponentPropsWithoutRef,
  forwardRef,
  HTMLInputTypeAttribute,
  useId,
  useRef,
} from "react";
import { Label } from "shared/ui";
import styles from "./Checkbox.module.scss";
import { useShareRefs } from "shared/lib";
import tickIcon from "assets/icons/tick.svg";
import { clsx } from "clsx";

interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<"input">, "id" | "type" | "className"> {
  error?: string;
  label?: string;
  type?: Extract<HTMLInputTypeAttribute, "checkbox" | "radio">;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, type = "checkbox", value, error, required, ...props }, ref) => {
    const id = useId();
    const innerRef = useRef<HTMLInputElement | null>(null);
    const refs = useShareRefs([innerRef, ref]);

    return (
      <div className={styles.wrapper}>
        <button
          className={clsx(styles.checkbox, error && styles.checkbox_error)}
          type={"button"}
          onClick={() => innerRef.current!.click()}
        >
          <input
            ref={refs}
            type={type}
            value={value || label}
            className={styles.hiddenCheckbox}
            {...props}
          />
          <div
            className={styles.tickIcon}
            style={{
              backgroundImage: `url("${tickIcon}")`,
            }}
          />
        </button>
        {label && (
          <Label htmlFor={id} forRequiredField={required}>
            {label}
          </Label>
        )}
      </div>
    );
  },
);
