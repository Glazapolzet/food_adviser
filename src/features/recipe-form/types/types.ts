import {
  FieldPath,
  FieldPathByValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";
import { TRecipe } from "shared/api/recipes";

export type TFormValues = Omit<TRecipe, "cover" | "ingredients"> & {
  cover: FileList | string;
  ingredients: Array<{ name: string }>;
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
