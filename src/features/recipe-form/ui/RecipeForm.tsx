import { type TCategory } from "shared/api/categories";
import styles from "./RecipeForm.module.scss";
import {
  ComponentPropsWithoutRef,
  type FC,
  forwardRef,
  useEffect,
} from "react";
import {
  Select,
  Upload,
  Input,
  CheckboxList,
  Checkbox,
  ExpandableInput,
} from "entities/form";
import {
  type FieldPath,
  type SubmitHandler,
  FormProvider,
  useForm,
  FieldArray,
  useFieldArray,
} from "react-hook-form";
import { defaultFormValues } from "../config/inputs";
import type { FormValues } from "../types/types";
import { Fieldset } from "shared/ui";

interface RecipeFormProps
  extends Pick<ComponentPropsWithoutRef<"form">, "id" | "name"> {
  categories: Array<TCategory>;
}

export const RecipeForm = forwardRef<HTMLFormElement, RecipeFormProps>(
  ({ categories, ...props }, ref) => {
    const methods = useForm<FormValues>({
      defaultValues: defaultFormValues,
    });

    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = methods;

    // const { fields, remove, append } = useFieldArray<
    //   FormValues,
    //   "ingredients",
    //   "id"
    // >({
    //   control,
    //   name: "ingredients",
    // });

    const categoriesOptions = categories
      .map((category) => category.name)
      .filter((c) => c !== "all");
    const difficultyOptions = ["easy", "medium", "hard"];

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      console.log({ data });
    };

    useEffect(() => {
      console.log({ errors });
    });

    return (
      <form
        ref={ref}
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        {...props}
      >
        <Fieldset legend={"main"} className={styles.fieldsetMain}>
          <Input
            placeholder={"Type your text here..."}
            label={"Title"}
            {...register<FieldPath<FormValues>>("title", {
              required: true,
            })}
          />
          <Input
            placeholder={"Type your text here..."}
            label={"Description"}
            {...register<FieldPath<FormValues>>("description")}
          />
        </Fieldset>

        <Fieldset
          legend={"additional information"}
          className={styles.fieldsetInfo}
        >
          <Input
            placeholder={"Time in minutes..."}
            type={"number"}
            min={0}
            label={"Time to cook"}
            {...register<FieldPath<FormValues>>("timeToCook", {
              required: true,
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <CheckboxList label={"Difficulty"}>
            {difficultyOptions.map((option) => (
              <Checkbox
                key={option}
                label={option}
                type={"radio"}
                {...register<FieldPath<FormValues>>("difficulty", {
                  required: true,
                })}
              />
            ))}
          </CheckboxList>
          <Input
            placeholder={"Servings per portion..."}
            type={"number"}
            label={"Servings"}
            min={0}
            {...register<FieldPath<FormValues>>("servings", {
              required: true,
              setValueAs: (v: string) => parseInt(v),
            })}
          />
        </Fieldset>

        <Fieldset legend={"ingredients"} className={styles.fieldsetIngredients}>
          <FormProvider {...methods}>
            <ExpandableInput<FormValues, "ingredients">
              fieldName={"ingredients"}
              fieldDefaultValue={{ name: "" }}
              label={"ingredients"}
              options={{ name: { required: true } }}
            />
          </FormProvider>
        </Fieldset>

        <Fieldset legend={"category"} className={styles.fieldsetCategory}>
          <Select
            label={"Category"}
            options={categoriesOptions}
            {...register<FieldPath<FormValues>>("category", {
              required: true,
            })}
          />
        </Fieldset>

        <Fieldset legend={"cover"} className={styles.fieldsetCover}>
          <Upload
            label={"Cover"}
            multiple={false}
            accept={"image/png, image/jpeg"}
            {...register<FieldPath<FormValues>>("cover")}
          />
        </Fieldset>

        <Fieldset
          legend={"nutritional values"}
          className={styles.fieldsetNutrients}
        >
          <Input
            placeholder={"g. in 100g."}
            type={"number"}
            min={0}
            label={"Proteins"}
            {...register<FieldPath<FormValues>>("nutrients.proteins", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            placeholder={"g. in 100g."}
            type={"number"}
            min={0}
            label={"Fats"}
            {...register<FieldPath<FormValues>>("nutrients.fats", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            placeholder={"g. in 100g."}
            type={"number"}
            min={0}
            label={"Carbohydrates"}
            {...register<FieldPath<FormValues>>("nutrients.carbohydrates", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            placeholder={"g. in 100g."}
            type={"number"}
            min={0}
            label={"Fiber"}
            {...register<FieldPath<FormValues>>("nutrients.fiber", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            placeholder={"kcal in 100g."}
            type={"number"}
            min={0}
            label={"Kcal"}
            {...register<FieldPath<FormValues>>("nutrients.kcal", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
        </Fieldset>
      </form>
    );
  },
) as FC<RecipeFormProps>;
