export type Info = {
  timeToCook: number;
  difficulty: string;
  servings: number;
};

export type Card = {
  imageSrc: string;
  title: string;
  description: string;
  info: Info;
};
