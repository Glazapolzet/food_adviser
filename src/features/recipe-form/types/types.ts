export type FormValues = {
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
};
