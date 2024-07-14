import { type FormValues } from "../types/types";

export const defaultFormValues: FormValues = {
  title: "",
  cover: new File([], ""),
  description: "",
  ingredients: [{ name: "" }],
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
