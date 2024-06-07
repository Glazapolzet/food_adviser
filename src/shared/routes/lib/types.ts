import { RouteObject } from "react-router-dom";

type ConstantRoute<FullPath extends string, Path extends string> = Omit<
  RouteObject,
  "path"
> & {
  path: Path;
  fullPath: FullPath;
};

type MergeArrayOfObjects<T, Path extends string = ""> = T extends readonly [
  infer R,
  ...infer Rest,
]
  ? RecursiveTransform<R, Path> & MergeArrayOfObjects<Rest, Path>
  : unknown;

type ReplaceTrailingSlash<T extends string> = T extends `//${infer R}`
  ? `/${R}`
  : T;

type ConcatPath<
  FullPath extends string,
  Path extends string,
> = ReplaceTrailingSlash<`${FullPath}/${Path}`>;

export type RecursiveTransform<
  RouteObject,
  FullPath extends string = "",
> = RouteObject extends {
  id: infer Name extends string;
  path: infer Path extends string;
}
  ? TransformIdToProperty<Name, RouteObject, Path, FullPath>
  : {};

type TransformIdToProperty<
  ID extends string,
  RouteObject,
  Path extends string,
  FullPath extends string,
  ConcatedPath extends string = ConcatPath<FullPath, Path>,
> = {
  [Prop in ID]: RouteObject extends { children: infer Children }
    ? MergeArrayOfObjects<Children, ConcatedPath> &
        ConstantRoute<ConcatedPath, Path>
    : ConstantRoute<ConcatedPath, Path>;
};
