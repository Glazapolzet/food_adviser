import { type FC, lazy } from "react";
import {
  createBrowserRouter,
  generatePath,
  type RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "../layout/Layout";
import { categoriesLoader } from "pages/categories";
import { categoryRecipesLoader } from "pages/category-recipes";
import { recipeLoader } from "pages/recipe";
import { PATH_CONFIG } from "shared/config";
import CreateRecipe, { createRecipeLoader } from "pages/create-recipe";

const Categories = lazy(() => import("pages/categories"));
const CategoryRecipes = lazy(() => import("pages/category-recipes"));
const Recipe = lazy(() => import("pages/recipe"));
const Redirect = lazy(() =>
  import("features/redirect").then(({ Redirect }) => ({
    default: Redirect,
  })),
);

const routes: RouteObject = {
  id: PATH_CONFIG.root.id,
  path: PATH_CONFIG.root.path,
  element: <Layout />,
  errorElement: <div>Page 404</div>,
  children: [
    {
      id: PATH_CONFIG.root.home.id,
      path: PATH_CONFIG.root.home.path,
      element: (
        <div>
          <b>Coming soon!</b>
        </div>
      ),
    },
    {
      id: PATH_CONFIG.root.recipes.id,
      path: PATH_CONFIG.root.recipes.path,
      element: (
        <Redirect
          from={PATH_CONFIG.root.recipes.fullPath}
          to={generatePath(PATH_CONFIG.root.recipes.categories.fullPath)}
          options={{ replace: true }}
        />
      ),
      children: [
        {
          id: PATH_CONFIG.root.recipes.categories.id,
          path: PATH_CONFIG.root.recipes.categories.path,
          element: <Categories />,
          loader: categoriesLoader,
          children: [
            {
              index: true,
              element: <CategoryRecipes />,
              loader: categoryRecipesLoader,
            },
            {
              id: PATH_CONFIG.root.recipes.categories.category.id,
              path: PATH_CONFIG.root.recipes.categories.category.path,
              element: <CategoryRecipes />,
              loader: categoryRecipesLoader,
            },
          ],
        },
        {
          id: PATH_CONFIG.root.recipes.new.id,
          path: PATH_CONFIG.root.recipes.new.path,
          element: <CreateRecipe />,
          loader: createRecipeLoader,
        },
        {
          id: PATH_CONFIG.root.recipes.recipe.id,
          path: PATH_CONFIG.root.recipes.recipe.path,
          element: <Recipe />,
          loader: recipeLoader,
        },
      ],
    },
    {
      id: PATH_CONFIG.root.stats.id,
      path: PATH_CONFIG.root.stats.path,
      element: <div>Coming soon!</div>,
    },
  ],
};

export const AppRouterProvider: FC = () => {
  return <RouterProvider router={createBrowserRouter([routes])} />;
};
