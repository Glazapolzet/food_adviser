import {
  FieldPath,
  FieldPathByValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";

export type TFormValues = {
  title: string;
  cover: File;
  description: string;
  ingredients: Array<{ name: string }>;
  nutrients: {
    proteins: number;
    fats: number;
    carbohydrates: number;
    fiber: number;
    kcal: number;
  };
  timeToCook: number;
  difficulty: string;
  servings: number;
  category: string;
  guideline: string;
};

interface TInputConfig<
  TFormValues extends FieldValues,
  TFieldName = FieldPath<TFormValues>,
> {
  required: boolean;
  name: TFieldName;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  options?: Array<string>;
  registerOptions:
    | { [key: string]: RegisterOptions<TFormValues, TFieldName> }
    | RegisterOptions<TFormValues, TFieldName>;
}

interface TArrayInputConfig<
  TFormValues extends FieldValues,
  TObjectLikeFieldName extends FieldPathByValue<
    TFormValues,
    { [index: string]: unknown }
  >,
> extends TInputConfig<TFormValues> {
  fullName: `${TObjectLikeFieldName}.${string}`;
}

type TFieldKey = keyof TFormValues;

export type TInputsConfig = {
  [index: TFieldKey]:
    | TInputConfig<TFormValues>
    | Array<TArrayInputConfig<TFormValues, "ingredients">>;
};
