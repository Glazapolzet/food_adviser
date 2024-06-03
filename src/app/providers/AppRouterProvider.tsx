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

const routes_config: RouteObject = {
  id: "root",
  path: "",
  element: <Layout />,
  errorElement: <div>Page 404</div>,
  children: [
    {
      id: "home",
      path: "",
      element: <div>home</div>,
    },
    {
      id: "recipes",
      path: "recipes",
      element: <RecipesCategoryRedirect />,
      children: [
        {
          id: "categories",
          path: "categories",
          element: <Categories />,
          loader: categoriesLoader,
          children: [
            {
              id: "category",
              path: ":categoryName",
              element: <RecipesFromCategory />,
              loader: recipesFromCategoryLoader,
            },
          ],
        },
        {
          id: "recipe",
          path: ":recipeId",
          element: <Recipe />,
          loader: recipeLoader,
        },
      ],
    },
    {
      id: "stats",
      path: "stats",
      element: <div>stats</div>,
    },
  ],
};

// const router: Array<RouteObject> = createBrowserRouter([
//   {
//     element: <Layout />,
//     errorElement: <div>Page 404</div>,
//     children: [
//       {
//         path: "/",
//         element: <div>home</div>,
//         index: true,
//       },
//       {
//         path: "/recipes-category-redirect",
//         element: <Navigate to={"all"} replace={true} />,
//       },
//       {
//         path: `/recipes-category-redirect/:recipesCategory`,
//         element: <categories />,
//         loader: loader,
//       },
//       {
//         path: `/recipes-category-redirect/:recipesCategory/:recipeId`,
//         element: <recipe />,
//         loader: loader,
//       },
//       {
//         path: "/stats",
//         element: <div>stats</div>,
//       },
//     ],
//   },
// ]);

export const AppRouterProvider: FC = () => {
  return <RouterProvider router={createBrowserRouter([routes_config])} />;
};
