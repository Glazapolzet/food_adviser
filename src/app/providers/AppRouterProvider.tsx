import { type FC, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  generatePath,
  type RouteObject,
} from "react-router-dom";
import { Layout } from "../layout/Layout";
const Categories = lazy(() => import("pages/categories"));
const Recipe = lazy(() => import("pages/recipe"));
const Redirect = lazy(() =>
  import("features/redirect").then(({ Redirect }) => ({
    default: Redirect,
  })),
);
const RecipesFromCategory = lazy(() => import("pages/recipes-from-category"));
import { categoriesLoader } from "pages/categories";
import { recipeLoader } from "pages/recipe";
import { recipesFromCategoryLoader } from "pages/recipes-from-category";
import { PATH_CONFIG } from "shared/config";

const routes: RouteObject = {
  id: "root",
  path: PATH_CONFIG.root.path,
  element: <Layout />,
  errorElement: <div>Page 404</div>,
  children: [
    {
      id: "home",
      path: PATH_CONFIG.root.home.path,
      element: <div>home</div>,
    },
    {
      id: "recipes",
      path: PATH_CONFIG.root.recipes.path,
      element: (
        <Redirect
          from={PATH_CONFIG.root.recipes.fullPath}
          to={generatePath(
            PATH_CONFIG.root.recipes.categories.category.fullPath,
            {
              categoryName: "all",
            },
          )}
          options={{ replace: true }}
        />
      ),
      children: [
        {
          id: "categories",
          path: PATH_CONFIG.root.recipes.categories.path,
          element: <Categories />,
          loader: categoriesLoader,
          children: [
            {
              id: "category",
              path: PATH_CONFIG.root.recipes.categories.category.path,
              element: <RecipesFromCategory />,
              loader: recipesFromCategoryLoader,
            },
          ],
        },
        {
          id: "recipe",
          path: PATH_CONFIG.root.recipes.recipe.path,
          element: <Recipe />,
          loader: recipeLoader,
        },
      ],
    },
    {
      id: "stats",
      path: PATH_CONFIG.root.stats.path,
      element: <div>stats</div>,
    },
  ],
};

export const AppRouterProvider: FC = () => {
  return <RouterProvider router={createBrowserRouter([routes])} />;
};
