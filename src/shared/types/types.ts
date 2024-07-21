export type StringifyObjectValues<T> = {
  [key in keyof T]: T[key] extends string ? T[key] : string;
};
