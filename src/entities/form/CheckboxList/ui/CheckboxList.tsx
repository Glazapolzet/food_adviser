import { type ComponentProps, type FC, type ReactElement } from "react";
import styles from "./CheckboxList.module.scss";
import { Label } from "shared/ui";

interface CheckboxListProps {
  required?: boolean | undefined;
  label?: string;
  children?: Array<ReactElement<ComponentProps<"Checkbox">, "Checkbox">>;
}

export const CheckboxList: FC<CheckboxListProps> = ({
  label,
  required,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
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
