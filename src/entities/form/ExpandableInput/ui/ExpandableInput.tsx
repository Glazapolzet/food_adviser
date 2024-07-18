import {
  type Control,
  type FieldArray,
  FieldErrors,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
  useFieldArray,
  type UseFormRegister,
} from "react-hook-form";
import { Input } from "../../Input/ui/Input";
import styles from "./ExpandableInput.module.scss";
import { Label } from "shared/ui";
import plusIcon from "assets/icons/plus.svg";
import minusIcon from "assets/icons/minus.svg";
import { ComponentPropsWithRef } from "react";

interface ExpandableInputProps<
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
> extends ComponentPropsWithRef<"input"> {
  name: TFieldName;
  control: Control<TFormValues>;
  register: UseFormRegister<TFormValues>;
  defaultValue: FieldArray<TFormValues, TFieldName>;
  errors?: Array<FieldErrors<TFieldName>>;
  label?: string;
  validationOptions?: { [key: string]: RegisterOptions };
}

export const ExpandableInput = <
  TFormValues extends FieldValues,
  TFieldName extends FieldPath<TFormValues>,
>({
  name,
  control,
  register,
  defaultValue,
  required,
  errors,
  label,
  validationOptions,
  ...props
}: ExpandableInputProps<TFormValues, TFieldName>) => {
  const { fields, remove, insert } = useFieldArray<
    TFormValues,
    TFieldName,
    "id"
  >({
    control,
    name: name,
  });

  const keys = Object.keys(defaultValue) as Array<TFieldName>;

  return (
    <div className={styles.wrapper}>
      {label && <Label forRequiredField={required}>{label}</Label>}
      <ul className={styles.inputList}>
        {fields.map((field, index) => (
          <li key={field.id} className={styles.expandedInput}>
            <button
              type={"button"}
              className={styles.addButton}
              onClick={() => insert(index + 1, defaultValue)}
            >
              <div
                className={styles.plusIcon}
                style={{
                  backgroundImage: `url("${plusIcon}")`,
                }}
              />
            </button>
            {index !== 0 ? (
              <button
                type={"button"}
                className={styles.removeButton}
                onClick={() => remove(index)}
              >
                <div
                  className={styles.minusIcon}
                  style={{
                    backgroundImage: `url("${minusIcon}")`,
                  }}
                />
              </button>
            ) : (
              <div />
            )}
            {keys.map((key) => (
              <Input
                key={key}
                className={styles.input}
                error={errors?.[index]?.[key].message}
                {...props}
                {...register(
                  `${name}.${index}.${key}` as keyof TFieldName,
                  validationOptions ? validationOptions[key] : {},
                )}
              />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};
