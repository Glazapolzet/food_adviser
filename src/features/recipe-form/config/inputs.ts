import { type FormInputs } from "../types/types";

// type UnnestedInputsName = {
//   name: string;
//   fullName: string;
// };
//
// type InputsNames = {
//   name: string;
//   fullName: string;
//   [index: string]: UnnestedInputsName | InputsNames;
// };

// export const InputsNames = {
//   title: {
//     name: "title",
//     fullName: "title",
//   },
//   cover: { name: "cover", fullName: "cover" },
//   description: { name: "description", fullName: "description" },
//   ingredients: { name: "ingredients", fullName: "ingredients" },
//   nutrients: {
//     name: "nutrients",
//     fullName: "nutrients",
//     proteins: { name: "proteins", fullName: "nutrients.proteins" },
//     fats: { name: "fats", fullName: "nutrients.fats" },
//     carbohydrates: {
//       name: "carbohydrates",
//       fullName: "nutrients.carbohydrates",
//     },
//     fiber: { name: "fiber", fullName: "nutrients.fiber" },
//     kcal: { name: "kcal", fullName: "nutrients.kcal" },
//   },
//   timeToCook: { name: "timeToCook", fullName: "timeToCook" },
//   difficulty: { name: "difficulty", fullName: "difficulty" },
//   servings: { name: "servings", fullName: "servings" },
//   category: { name: "category", fullName: "category" },
// } as const;

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

export const difficultyOptions: Array<{ name: string }> = [
  { name: "easy" },
  { name: "medium" },
  { name: "hard" },
];
