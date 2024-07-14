import { type FC, type ReactNode } from "react";
import styles from "./CheckboxList.module.scss";
import { Label } from "shared/ui";

interface CheckboxListProps {
  label?: string;
  children?: ReactNode;
}

export const CheckboxList: FC<CheckboxListProps> = ({ label, children }) => {
  return (
    <div className={styles.wrapper}>
      {label && <Label>{label}</Label>}
      <div className={styles.checkboxList}>{children}</div>
    </div>
  );
};
