import {
  Checkbox,
  CheckboxList,
  ExpandableInput,
  FieldSwitch,
  Input,
  Select,
  TextArea,
  Upload,
} from "entities/form";
import { ComponentPropsWithoutRef, forwardRef, useEffect } from "react";
import {
  FieldErrors,
  type FieldPath,
  type SubmitHandler,
  useForm,
} from "react-hook-form";
import { type TResponseCategory } from "shared/api/categories";
import { createRecipe } from "shared/api/recipes";
import { isObjectEmpty, toBase64 } from "shared/lib";
import { Fieldset, FormError } from "shared/ui";
import { defaultFormValues, inputsConfig } from "../config/inputs";
import type { TFormValues } from "../types/types";
import styles from "./RecipeForm.module.scss";

//! this is trash and needs to be refactored

interface RecipeFormProps
  extends Pick<ComponentPropsWithoutRef<"form">, "id" | "name"> {
  categories: Array<TResponseCategory>;
}

export const RecipeForm = forwardRef<HTMLFormElement, RecipeFormProps>(
  ({ categories, ...props }, ref) => {
    const {
      register,
      control,
      handleSubmit,
      resetField,
      formState: { errors },
    } = useForm<TFormValues>({
      mode: "onBlur",
      shouldFocusError: false,
      defaultValues: defaultFormValues,
    });

    const onSubmit: SubmitHandler<TFormValues> = async ({
      category: formCategory,
      cover: formCover,
      ingredients: formIngredients,
      ...formData
    }) => {
      const category = categories.find(
        (category) => category.name === formCategory
      ).id;
      const ingredients = formIngredients.map(({ name }) => name);
      const cover = formCover
        ? typeof formCover === "string"
          ? formCover
          : await toBase64(formCover[0])
        : formCover;

      const data = { cover, ingredients, category, ...formData };
      const serverResponse = await createRecipe(data);
      console.log({ serverResponse });
    };

    useEffect(() => {
      console.log({ errors });
    });

    inputsConfig.category.options = categories.map((category) => category.name);

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
            required={!!inputsConfig.title.registerOptions?.required}
            placeholder={inputsConfig.title.placeholder}
            label={inputsConfig.title.label}
            error={errors.title?.message}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.title.name,
              inputsConfig.title.registerOptions
            )}
          />
          <Input
            required={!!inputsConfig.description.registerOptions?.required}
            placeholder={inputsConfig.description.placeholder}
            label={inputsConfig.description.label}
            error={errors.description?.message}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.description.name,
              inputsConfig.description.registerOptions
            )}
          />
        </Fieldset>

        <Fieldset
          legend={"additional information"}
          className={styles.fieldsetInfo}
        >
          <Input
            required={!!inputsConfig.timeToCook.registerOptions?.required}
            placeholder={inputsConfig.timeToCook.placeholder}
            type={inputsConfig.timeToCook.type}
            min={0}
            label={inputsConfig.timeToCook.label}
            error={errors.timeToCook?.message}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.timeToCook.name,
              inputsConfig.timeToCook.registerOptions
            )}
          />
          <CheckboxList
            label={inputsConfig.difficulty.label}
            required={!!inputsConfig.difficulty.registerOptions?.required}
          >
            {inputsConfig.difficulty.options.map((option) => (
              <Checkbox
                error={errors.difficulty?.message}
                key={option}
                label={option}
                type={inputsConfig.difficulty.type}
                {...register<FieldPath<TFormValues>>(
                  inputsConfig.difficulty.name,
                  inputsConfig.difficulty.registerOptions
                )}
              />
            ))}
          </CheckboxList>
          <Input
            required={!!inputsConfig.servings.registerOptions?.required}
            placeholder={inputsConfig.servings.placeholder}
            type={inputsConfig.servings.type}
            label={inputsConfig.servings.label}
            error={errors.servings?.message}
            min={0}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.servings.name,
              inputsConfig.servings.registerOptions
            )}
          />
        </Fieldset>

        <Fieldset legend={"ingredients"} className={styles.fieldsetIngredients}>
          <ExpandableInput<TFormValues, "ingredients">
            required={
              !!inputsConfig.ingredients.registerOptions?.name?.required
            }
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
            required={!!inputsConfig.category.registerOptions?.required}
            label={inputsConfig.category.label}
            options={inputsConfig.category.options}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.category.name,
              inputsConfig.category.registerOptions
            )}
          />
        </Fieldset>

        <Fieldset legend={"cover"} className={styles.fieldsetCover}>
          <FieldSwitch
            label={inputsConfig.cover.label}
            fields={[
              {
                label: "upload image",
                onSwitch: () => resetField<"cover">(inputsConfig.cover.name),
                component: (
                  <Upload
                    id={"upload"}
                    required={!!inputsConfig.cover.registerOptions?.required}
                    multiple={false}
                    accept={"image/*"}
                    {...register<FieldPath<TFormValues>>(
                      inputsConfig.cover.name,
                      inputsConfig.cover.registerOptions
                    )}
                  />
                ),
              },
              {
                label: "insert link",
                onSwitch: () => resetField<"cover">(inputsConfig.cover.name),
                component: (
                  <Input
                    id={"link"}
                    required={!!inputsConfig.cover.registerOptions?.required}
                    {...register<FieldPath<TFormValues>>(
                      inputsConfig.cover.name,
                      inputsConfig.cover.registerOptions
                    )}
                  />
                ),
              },
            ]}
          />
        </Fieldset>

        <Fieldset
          legend={"nutritional values"}
          className={styles.fieldsetNutrients}
        >
          {inputsConfig.nutrients.map((nutrient) => (
            <Input
              key={nutrient.name}
              required={!!nutrient.registerOptions?.required}
              error={errors.nutrients?.[nutrient.name]?.message}
              placeholder={nutrient.placeholder}
              type={nutrient.type}
              min={0}
              label={nutrient.label}
              {...register<FieldPath<TFormValues>>(
                nutrient.fullName,
                nutrient.registerOptions
              )}
            />
          ))}
        </Fieldset>

        <Fieldset legend={"guideline"} className={styles.fieldsetGuideline}>
          <TextArea
            label={inputsConfig.guideline.label}
            error={errors.guideline?.message}
            required={!!inputsConfig.guideline.registerOptions?.required}
            placeholder={inputsConfig.guideline.placeholder}
            {...register<FieldPath<TFormValues>>(
              inputsConfig.guideline.name,
              inputsConfig.guideline.registerOptions
            )}
          />
        </Fieldset>

        {!isObjectEmpty(errors) && (
          <FormError message={`Please fix errors to submit your recipe`} />
        )}
      </form>
    );
  }
);
