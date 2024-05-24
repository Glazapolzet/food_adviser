import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Layout } from "app/layout/Layout";
import { Recipes, recipesLoader } from "pages/Recipes";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>home</div>,
      },
      {
        path: "/recipes",
        element: <Navigate to={"all"} replace={true} />,
      },
      {
        path: "/recipes/:recipeCategory",
        element: <Recipes />,
        loader: recipesLoader,
      },
      {
        path: "/stats",
        element: <div>stats</div>,
      },
    ],
  },
]);

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};
