export interface TCategory {
  name: string;
}

export interface TResponseCategory extends Readonly<TCategory> {
  readonly id: string;
}

export interface TResponseCategories {
  readonly count: number;
  readonly items: Array<TResponseCategory>;
}
