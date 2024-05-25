import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Layout } from "app/layout/Layout";
import { Recipes, recipesLoader } from "pages/Recipes";
import { FC } from "react";
import { PathNames } from "shared/config";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PathNames.HOME,
        element: <div>home</div>,
      },
      {
        path: PathNames.RECIPES,
        element: <Navigate to={"all"} replace={true} />,
      },
      {
        path: `${PathNames.RECIPES}/:recipeCategory`,
        element: <Recipes />,
        loader: recipesLoader,
      },
      {
        path: PathNames.STATS,
        element: <div>stats</div>,
      },
    ],
  },
]);

export const AppRouterProvider: FC = () => {
  return <RouterProvider router={router} />;
};
