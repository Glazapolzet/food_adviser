export type Info = {
  timeToCook: number;
  difficulty: string;
  servings: number;
};

export type Card = {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  info: Info;
};
