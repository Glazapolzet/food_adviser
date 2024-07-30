import { type ComponentProps, type FC, type ReactElement } from "react";
import styles from "./CheckboxList.module.scss";
import { Label } from "shared/ui";
import { clsx } from "clsx";

interface CheckboxListProps {
  required?: boolean | undefined;
  label?: string;
  className?: string;
  children?: Array<ReactElement<ComponentProps<"input">, "input">>;
}

export const CheckboxList: FC<CheckboxListProps> = ({
  label,
  required,
  className,
  children,
}) => {
  return (
    <div
      className={clsx(styles.wrapper, {
        [className ?? ""]: className,
      })}
    >
      {label && (
        <Label htmlFor={"checkboxList"} forRequiredField={required}>
          {label}
        </Label>
      )}
      <div id={"checkboxList"} className={styles.checkboxList}>
        {children}
      </div>
    </div>
  );
};
