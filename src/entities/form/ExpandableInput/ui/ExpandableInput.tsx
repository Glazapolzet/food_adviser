import {
  type FieldArray,
  FieldValues,
  type RegisterOptions,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { Input } from "../../Input/ui/Input";
import styles from "./ExpandableInput.module.scss";

interface ExpandableInputProps<
  FormValues extends FieldValues,
  FieldName extends string,
> {
  fieldName: FieldName;
  fieldDefaultValue: FieldArray<FormValues, FieldName>;
  label?: string;
  options?: { [key: string]: RegisterOptions };
}

export const ExpandableInput = <
  FormValues extends FieldValues,
  FieldName extends string,
>({
  fieldName,
  fieldDefaultValue,
  label,
  options,
}: ExpandableInputProps<FormValues, FieldName>) => {
  const { register } = useFormContext();

  const { fields, remove, append } = useFieldArray<FormValues, FieldName, "id">(
    {
      name: fieldName,
    },
  );

  const keys = Object.keys(fieldDefaultValue);

  return fields.map((field, index) => (
    <div key={field.id}>
      {keys.map((key) => (
        <Input
          key={key}
          label={index === 0 && label ? label : ""}
          {...register(
            `${fieldName}.${index}.${key}` as const,
            options ? options[key] : {},
          )}
        />
      ))}
      <button
        type={"button"}
        className={styles.addButton}
        onClick={() => append(fieldDefaultValue)}
      >
        +
      </button>
      {index !== 0 && (
        <button
          type={"button"}
          className={styles.removeButton}
          onClick={() => remove(index)}
        >
          -
        </button>
      )}
    </div>
  ));
};
