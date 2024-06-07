import { RouteObject } from "react-router-dom";
import { ReadonlyDeep } from "type-fest";
import { RecursiveTransform } from "./types";

export const constantRoute = (
  path: string,
  fullPath: string,
): {
  path: string;
  fullPath: string;
} => ({
  path,
  fullPath,
});

export function mergeArrayOfObjects(arr: RouteObject[], path = "") {
  const [first, ...rest] = arr;
  if (first) {
    return {
      ...recursiveTransform(first, path),
      ...mergeArrayOfObjects(rest, path),
    };
  }
  return {};
}

const replaceTrailingSlash = (path: string) => path.replace(/\/\//g, "/");

function concatPath(path: string, currentPath: string) {
  return replaceTrailingSlash(`${path}/${currentPath}`);
}

export function recursiveTransform(obj: RouteObject, fullPath = "") {
  const { id, path, children } = obj;
  if (id && path) {
    const concatedPath = concatPath(fullPath, path);

    if (children) {
      return {
        [id]: {
          ...mergeArrayOfObjects(children, concatedPath),
          ...constantRoute(path, concatedPath),
        },
      };
    }
    return {
      [id]: constantRoute(path, concatedPath),
    };
  }
  return {};
}

export const extractParam = (path: any) => {
  if (typeof path === "string" && path.startsWith(":")) {
    const param = path.slice(1);

    return {
      [param]: "",
    };
  } else {
    return {};
  }
};

export const extractParams = (path: string): Record<string, string> => {
  const firstSlash = path.indexOf("/");
  if (firstSlash === -1) {
    return extractParam(path);
  }
  const [segment, rest] = [
    path.slice(0, firstSlash),
    path.slice(firstSlash + 1),
  ];
  return {
    ...extractParam(segment),
    ...extractParams(rest),
  };
};

export const transformRoutes = <T extends ReadonlyDeep<RouteObject>>(
  routes: T,
) => {
  // @ts-ignore
  const traverse = (current: IRoute, fullPath: string = current.path) => {
    const { path, children, id } = current;
    if (children == null) {
      return {
        [id]: {
          id,
          path,
          fullPath,
        },
      };
    }

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      [id]: children
        .map((route) => traverse(route, `${fullPath}/${route.path}`))
        .reduce(
          (previousValue, currentValue) => ({
            ...previousValue,
            ...currentValue,
          }),
          {
            path,
            fullPath,
          },
        ),
    };
  };
  return traverse(routes) as RecursiveTransform<T>;
};
