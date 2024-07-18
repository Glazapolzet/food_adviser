import { type TFormValues } from "../types/types";

export const defaultFormValues: TFormValues = {
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
  guideline: "",
};

const ingredientsFields = Object.keys(defaultFormValues.ingredients[0]);

export const inputsConfig = {
  title: {
    required: true,
    name: "title",
    label: "Title",
    type: "text",
    placeholder: "Type your text here...",
    registerOptions: { required: "Title is required" },
  },
  description: {
    required: true,
    name: "description",
    label: "Description",
    type: "text",
    placeholder: "Type your text here...",
    registerOptions: { required: "Description is required" },
  },
  timeToCook: {
    required: true,
    name: "timeToCook",
    label: "Time to cook",
    type: "number",
    placeholder: "Time in minutes...",
    registerOptions: {
      required: "Cooking time is required",
      valueAsNumber: true,
    },
  },
  difficulty: {
    required: true,
    name: "difficulty",
    label: "Difficulty",
    type: "radio",
    options: ["easy", "medium", "hard"],
    registerOptions: { required: "Difficulty is required" },
  },
  servings: {
    required: true,
    name: "servings",
    label: "Servings",
    type: "number",
    placeholder: "Servings per portion...",
    registerOptions: {
      required: "Servings is required",
      valueAsNumber: true,
    },
  },
  ingredients: {
    required: true,
    name: "ingredients",
    label: "Ingredients",
    type: "text",
    registerOptions: {
      [ingredientsFields[0]]: {
        required: "Fill in this field",
      },
    },
  },
  category: {
    required: true,
    name: "category",
    label: "Category",
    options: [],
    registerOptions: { required: "Category is required" },
  },
  cover: {
    required: false,
    name: "cover",
    label: "Cover",
    registerOptions: {},
  },
  nutrients: [
    {
      required: false,
      name: "proteins",
      fullName: "nutrients.proteins",
      label: "Proteins",
      type: "number",
      placeholder: "g. in 100g.",
      registerOptions: {
        valueAsNumber: true,
      },
    },
    {
      required: false,
      name: "fats",
      fullName: "nutrients.fats",
      label: "Fats",
      type: "number",
      placeholder: "g. in 100g.",
      registerOptions: {
        valueAsNumber: true,
      },
    },
    {
      required: false,
      name: "carbohydrates",
      fullName: "nutrients.carbohydrates",
      label: "Carbohydrates",
      type: "number",
      placeholder: "g. in 100g.",
      registerOptions: {
        valueAsNumber: true,
      },
    },
    {
      required: false,
      name: "fiber",
      fullName: "nutrients.fiber",
      label: "Fiber",
      type: "number",
      placeholder: "g. in 100g.",
      registerOptions: {
        valueAsNumber: true,
      },
    },
    {
      required: false,
      name: "kcal",
      fullName: "nutrients.kcal",
      label: "Kcal",
      type: "number",
      placeholder: "kcal in 100g.",
      registerOptions: {
        valueAsNumber: true,
      },
    },
  ],
  guideline: {
    required: true,
    name: "guideline",
    label: "Recipe guide",
    placeholder: "Write your recipe guide here...",
    registerOptions: {
      required: "Guideline is required",
    },
  },
} as const;
