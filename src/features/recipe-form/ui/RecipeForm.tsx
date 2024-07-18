import { type TCategory } from "shared/api/categories";
import styles from "./RecipeForm.module.scss";
import { ComponentPropsWithoutRef, forwardRef, useEffect } from "react";
import {
  Select,
  Upload,
  Input,
  CheckboxList,
  Checkbox,
  ExpandableInput,
  TextArea,
} from "entities/form";
import {
  FieldErrors,
  type FieldPath,
  type SubmitHandler,
  useForm,
} from "react-hook-form";
import { defaultFormValues, inputsConfig } from "../config/inputs";
import type { TFormValues } from "../types/types";
import { Fieldset } from "shared/ui";

interface RecipeFormProps
  extends Pick<ComponentPropsWithoutRef<"form">, "id" | "name"> {
  categories: Array<TCategory>;
}

export const RecipeForm = forwardRef<HTMLFormElement, RecipeFormProps>(
  ({ categories, ...props }, ref) => {
    const {
      register,
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<TFormValues>({
      mode: "onBlur",
      shouldFocusError: false,
      defaultValues: defaultFormValues,
    });

    inputsConfig.category.options = categories
      .map((category) => category.name)
      .filter((c) => c !== "all");

    const onSubmit: SubmitHandler<TFormValues> = (data) => {
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
        noValidate={true}
        {...props}
      >
        <Fieldset legend={"main"} className={styles.fieldsetMain}>
          <Input
            required={inputsConfig.title.required}
            placeholder={inputsConfig.title.placeholder}
            label={inputsConfig.title.label}
            error={errors.title?.message}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.title.name,
              inputsConfig.title.registerOptions,
            )}
          />
          <Input
            required={inputsConfig.description.required}
            placeholder={inputsConfig.description.placeholder}
            label={inputsConfig.description.label}
            error={errors.description?.message}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.description.name,
              inputsConfig.description.registerOptions,
            )}
          />
        </Fieldset>

        <Fieldset
          legend={"additional information"}
          className={styles.fieldsetInfo}
        >
          <Input
            required={inputsConfig.timeToCook.required}
            placeholder={inputsConfig.timeToCook.placeholder}
            type={inputsConfig.timeToCook.type}
            min={0}
            label={inputsConfig.timeToCook.label}
            error={errors.timeToCook?.message}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.timeToCook.name,
              inputsConfig.timeToCook.registerOptions,
            )}
          />
          <CheckboxList
            label={inputsConfig.difficulty.label}
            required={inputsConfig.difficulty.required}
          >
            {inputsConfig.difficulty.options.map((option) => (
              <Checkbox
                error={errors.difficulty?.message}
                key={option}
                label={option}
                type={inputsConfig.difficulty.type}
                {...register<FieldPath<TFormValues>>(
                  inputsConfig.difficulty.name,
                  inputsConfig.difficulty.registerOptions,
                )}
              />
            ))}
          </CheckboxList>
          <Input
            required={inputsConfig.servings.required}
            placeholder={inputsConfig.servings.placeholder}
            type={inputsConfig.servings.type}
            label={inputsConfig.servings.label}
            error={errors.servings?.message}
            min={0}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.servings.name,
              inputsConfig.servings.registerOptions,
            )}
          />
        </Fieldset>

        <Fieldset legend={"ingredients"} className={styles.fieldsetIngredients}>
          <ExpandableInput<TFormValues, "ingredients">
            required={inputsConfig.ingredients.required}
            errors={errors.ingredients as Array<FieldErrors<"ingredients">>}
            name={inputsConfig.ingredients.name}
            label={inputsConfig.ingredients.label}
            type={inputsConfig.ingredients.type}
            defaultValue={defaultFormValues.ingredients[0]}
            validationOptions={inputsConfig.ingredients.registerOptions}
            control={control}
            register={register}
          />
        </Fieldset>

        <Fieldset legend={"category"} className={styles.fieldsetCategory}>
          <Select
            error={errors.category?.message}
            required={inputsConfig.category.required}
            label={inputsConfig.category.label}
            options={inputsConfig.category.options}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.category.name,
              inputsConfig.category.registerOptions,
            )}
          />
        </Fieldset>

        <Fieldset legend={"cover"} className={styles.fieldsetCover}>
          <Upload
            required={inputsConfig.cover.required}
            label={inputsConfig.cover.label}
            multiple={false}
            accept={"image/*"}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.cover.name,
              inputsConfig.cover.registerOptions,
            )}
          />
        </Fieldset>

        <Fieldset
          legend={"nutritional values"}
          className={styles.fieldsetNutrients}
        >
          {inputsConfig.nutrients.map((nutrient) => (
            <Input
              key={nutrient.name}
              required={nutrient.required}
              error={errors.nutrients?.[nutrient.name]?.message}
              placeholder={nutrient.placeholder}
              type={nutrient.type}
              min={0}
              label={nutrient.label}
              {...register<FieldPath<TFormValues>>(
                nutrient.fullName,
                nutrient.registerOptions,
              )}
            />
          ))}
        </Fieldset>

        <Fieldset legend={"guideline"} className={styles.fieldsetGuideline}>
          <TextArea
            label={inputsConfig.guideline.label}
            error={errors.guideline?.message}
            required={inputsConfig.guideline.required}
            placeholder={inputsConfig.guideline.placeholder}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.guideline.name,
              inputsConfig.guideline.registerOptions,
            )}
          />
        </Fieldset>
      </form>
    );
  },
);
