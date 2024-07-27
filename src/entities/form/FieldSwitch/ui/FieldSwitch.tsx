import { ComponentProps, type FC, ReactElement, useState } from "react";
import styles from "./FieldSwitch.module.scss";
import { Label } from "shared/ui";
import { clsx } from "clsx";

type InputTypes = "input" | "select" | "textarea";

type InputComponent = ReactElement<
  ComponentProps<InputTypes> & {
    id: string;
    name: string;
  },
  InputTypes
>;

interface FieldSwitchProps {
  fields: Array<{
    label: string;
    onSwitch: () => void;
    component: InputComponent;
  }>;
  required?: boolean | undefined;
  label?: string;
}

export const FieldSwitch: FC<FieldSwitchProps> = ({
  label,
  fields,
  required,
}) => {
  const [visibleFieldId, setVisibleFieldId] = useState<string>(
    fields[0].component.props.id,
  );

  const buttons = fields.map(({ component, label, onSwitch }) => (
    <li key={component.props.id} className={styles.buttonListItem}>
      <button
        type={"button"}
        className={clsx(styles.button, {
          [styles.button_active]: visibleFieldId === component.props.id,
        })}
        onClick={() => {
          setVisibleFieldId(component.props.id);
          onSwitch();
        }}
      >
        {label}
      </button>
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      {label && <Label forRequiredField={required}>{label}</Label>}
      <div className={styles.fieldSwitch}>
        <ul className={styles.buttonList}>{buttons}</ul>
        {fields.map(({ component }) => {
          if (visibleFieldId !== component.props.id) {
            return;
          }

          return (
            <div key={component.props.id} className={styles.field}>
              {component}
            </div>
          );
        })}
      </div>
    </div>
  );
};
