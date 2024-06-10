import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import { Layout } from "app/layout/Layout";
import { Categories, categoriesLoader } from "pages/categories";
import { FC } from "react";
import { Recipe, recipeLoader } from "pages/recipe";
import { RecipesCategoryRedirect } from "pages/recipes-category-redirect";
import {
  RecipesFromCategory,
  recipesFromCategoryLoader,
} from "pages/recipes-from-category";
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
      element: <RecipesCategoryRedirect categoryName={"all"} />,
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
