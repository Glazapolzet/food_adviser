import { type TCategory } from "shared/api/categories";
import styles from "./RecipeForm.module.scss";
import { ComponentPropsWithoutRef, type FC, forwardRef } from "react";
import { Input } from "./Input/Input";
import { Select } from "./Select/Select";
import { type FieldPath, type SubmitHandler, useForm } from "react-hook-form";
import { defaultInputsValues, difficultyOptions } from "../config/inputs";
import { Upload } from "./Upload/Upload";
import type { FormInputs } from "../types/types";
import { Fieldset } from "./Fieldset/Fieldset";

interface RecipeFormProps
  extends Pick<ComponentPropsWithoutRef<"form">, "id" | "name"> {
  categories: Array<TCategory>;
}

export const RecipeForm = forwardRef<HTMLFormElement, RecipeFormProps>(
  ({ categories, ...props }, ref) => {
    const { register, handleSubmit } = useForm<FormInputs>({
      defaultValues: defaultInputsValues,
    });

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
      console.log({ data });
    };

    return (
      <form
        ref={ref}
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        {...props}
      >
        <Fieldset legend={"main"} className={styles.fieldsetMain}>
          <Input
            label={"Title"}
            {...register<FieldPath<FormInputs>>("title", {
              required: true,
            })}
          />
          <Input
            label={"Description"}
            {...register<FieldPath<FormInputs>>("description")}
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
            defaultValue={""}
            {...register<FieldPath<FormInputs>>("category", { required: true })}
          >
            <option value={""} disabled={true}>
              -- Select category --
            </option>
            {categories.map(
              (category) =>
                //TODO: remove this condition when the real API will be done
                category.name !== "all" && (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ),
            )}
          </Select>
        </Fieldset>

        <Fieldset
          legend={"nutritional values"}
          className={styles.fieldsetNutrients}
        >
          <Input
            type={"number"}
            label={"Proteins"}
            {...register<FieldPath<FormInputs>>("nutrients.proteins", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            type={"number"}
            label={"Fats"}
            {...register<FieldPath<FormInputs>>("nutrients.fats", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            type={"number"}
            label={"Carbohydrates"}
            {...register<FieldPath<FormInputs>>("nutrients.carbohydrates", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            type={"number"}
            label={"Fiber"}
            {...register<FieldPath<FormInputs>>("nutrients.fiber", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Input
            type={"number"}
            label={"Kcal"}
            {...register<FieldPath<FormInputs>>("nutrients.kcal", {
              setValueAs: (v: string) => parseInt(v),
            })}
          />
        </Fieldset>

        <Fieldset
          legend={"additional information"}
          className={styles.fieldsetInfo}
        >
          <Input
            type={"number"}
            label={"Time to cook"}
            {...register<FieldPath<FormInputs>>("timeToCook", {
              required: true,
              setValueAs: (v: string) => parseInt(v),
            })}
          />
          <Select
            label={"Difficulty"}
            {...register<FieldPath<FormInputs>>("difficulty", {
              required: true,
            })}
          >
            <option value={""} disabled={true}>
              -- Select difficulty --
            </option>
            {difficultyOptions.map((difficultyOption) => (
              <option key={difficultyOption.name} value={difficultyOption.name}>
                {difficultyOption.name}
              </option>
            ))}
          </Select>
          <Input
            type={"number"}
            label={"Servings"}
            {...register<FieldPath<FormInputs>>("servings", {
              required: true,
              setValueAs: (v: string) => parseInt(v),
            })}
          />
        </Fieldset>
      </form>
    );
  },
) as FC<RecipeFormProps>;
