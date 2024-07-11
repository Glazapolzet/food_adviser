export type FormInputs = {
  title: string;
  cover: File;
  description: string;
  ingredients: string[];
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
};
