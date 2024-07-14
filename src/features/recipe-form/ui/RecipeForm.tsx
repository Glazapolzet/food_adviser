import { type TCategory } from "shared/api/categories";
import styles from "./RecipeForm.module.scss";
import {
  ComponentPropsWithoutRef,
  type FC,
  forwardRef,
  useEffect,
} from "react";
import { Select, Upload, Input, CheckboxList } from "entities/form";
import { type FieldPath, type SubmitHandler, useForm } from "react-hook-form";
import { defaultInputsValues } from "../config/inputs";
import type { FormInputs } from "../types/types";
import { Fieldset } from "shared/ui";
import { Checkbox } from "entities/form/Checkbox/ui/Checkbox";

interface RecipeFormProps
  extends Pick<ComponentPropsWithoutRef<"form">, "id" | "name"> {
  categories: Array<TCategory>;
}

export const RecipeForm = forwardRef<HTMLFormElement, RecipeFormProps>(
  ({ categories, ...props }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormInputs>({
      defaultValues: defaultInputsValues,
    });

    const categoriesOptions = categories
      .map((category) => category.name)
      .filter((c) => c !== "all");
    const difficultyOptions = ["easy", "medium", "hard"];

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
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
            {...register<FieldPath<FormInputs>>("title", {
              required: true,
            })}
          />
          <Input
            placeholder={"Type your text here..."}
            label={"Description"}
            {...register<FieldPath<FormInputs>>("description")}
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
            {...register<FieldPath<FormInputs>>("timeToCook", {
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
                {...register<FieldPath<FormInputs>>("difficulty", {
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
            {...register<FieldPath<FormInputs>>("servings", {
              required: true,
              setValueAs: (v: string) => parseInt(v),
            })}
          />
        </Fieldset>

        <Fieldset legend={"ingredients"} className={styles.fieldsetIngredients}>
          <Input
            label={"Ingredients"}
            {...register<FieldPath<FormInputs>>("ingredients", {
              required: true,
            })}
          />
        </Fieldset>

        <Fieldset legend={"category"} className={styles.fieldsetCategory}>
          <Select
            label={"Category"}
            options={categoriesOptions}
            {...register<FieldPath<FormInputs>>("category", { required: true })}
          />
        </Fieldset>

        <Fieldset legend={"cover"} className={styles.fieldsetCover}>
          <Upload
            label={"Cover"}
            multiple={true}
            accept={"image/png, image/jpeg"}
            {...register<FieldPath<FormInputs>>("cover")}
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
            {...register<FieldPath<FormInputs>>("nutrients.proteins", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            placeholder={"g. in 100g."}
            type={"number"}
            min={0}
            label={"Fats"}
            {...register<FieldPath<FormInputs>>("nutrients.fats", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            placeholder={"g. in 100g."}
            type={"number"}
            min={0}
            label={"Carbohydrates"}
            {...register<FieldPath<FormInputs>>("nutrients.carbohydrates", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            placeholder={"g. in 100g."}
            type={"number"}
            min={0}
            label={"Fiber"}
            {...register<FieldPath<FormInputs>>("nutrients.fiber", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            placeholder={"kcal in 100g."}
            type={"number"}
            min={0}
            label={"Kcal"}
            {...register<FieldPath<FormInputs>>("nutrients.kcal", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
        </Fieldset>
      </form>
    );
  },
) as FC<RecipeFormProps>;
