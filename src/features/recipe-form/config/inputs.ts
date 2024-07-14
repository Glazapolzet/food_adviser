import { type FormInputs } from "../types/types";

export const defaultInputsValues: FormInputs = {
  title: "",
  cover: new File([], ""),
  description: "",
  ingredients: new Array<string>(0),
  nutrients: {
    proteins: NaN,
    fats: NaN,
    carbohydrates: NaN,
    fiber: NaN,
    kcal: NaN,
  },
  timeToCook: NaN,
  difficulty: "",
  servings: NaN,
  category: "",
};
