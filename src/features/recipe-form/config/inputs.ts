import { type TFormValues } from "../types/types";

export const defaultFormValues: TFormValues = {
  title: "",
  cover: "",
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

export const inputsConfig = {
  title: {
    name: "title",
    label: "Title",
    type: "text",
    placeholder: "Type your text here...",
    registerOptions: { required: "Title is required" },
  },
  description: {
    name: "description",
    label: "Description",
    type: "text",
    placeholder: "Type your text here...",
    registerOptions: { required: "Description is required" },
  },
  timeToCook: {
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
    name: "difficulty",
    label: "Difficulty",
    type: "radio",
    options: ["easy", "medium", "hard"],
    registerOptions: { required: "Difficulty is required" },
  },
  servings: {
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
    name: "ingredients",
    label: "Ingredients",
    type: "text",
    registerOptions: {
      name: {
        required: "Fill in this field",
      },
    },
  },
  category: {
    name: "category",
    label: "Category",
    options: [],
    registerOptions: { required: "Category is required" },
  },
  cover: {
    name: "cover",
    label: "Cover",
    registerOptions: {
      required: false,
    },
  },
  nutrients: [
    {
      name: "proteins",
      fullName: "nutrients.proteins",
      label: "Proteins",
      type: "number",
      placeholder: "g. in 100g.",
      registerOptions: {
        required: "Proteins is required",
        valueAsNumber: true,
      },
    },
    {
      name: "fats",
      fullName: "nutrients.fats",
      label: "Fats",
      type: "number",
      placeholder: "g. in 100g.",
      registerOptions: {
        required: "Fats is required",
        valueAsNumber: true,
      },
    },
    {
      name: "carbohydrates",
      fullName: "nutrients.carbohydrates",
      label: "Carbohydrates",
      type: "number",
      placeholder: "g. in 100g.",
      registerOptions: {
        required: "Carbohydrates is required",
        valueAsNumber: true,
      },
    },
    {
      name: "fiber",
      fullName: "nutrients.fiber",
      label: "Fiber",
      type: "number",
      placeholder: "g. in 100g.",
      registerOptions: {
        required: "Fiber is required",
        valueAsNumber: true,
      },
    },
    {
      name: "kcal",
      fullName: "nutrients.kcal",
      label: "Kcal",
      type: "number",
      placeholder: "kcal in 100g.",
      registerOptions: {
        required: "Kcal is required",
        valueAsNumber: true,
      },
    },
  ],
  guideline: {
    name: "guideline",
    label: "Recipe guide",
    placeholder: "Write your recipe guide here...",
    registerOptions: {
      required: "Guideline is required",
    },
  },
} as const;
