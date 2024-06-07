import { FC } from "react";
import { Navigate, Outlet, generatePath } from "react-router-dom";
import { PATH_CONFIG } from "shared/config";

interface RecipesCategoryRedirectProps {
  categoryName: string;
}

export const RecipesCategoryRedirect: FC<RecipesCategoryRedirectProps> = ({
  categoryName,
}) => {
  return (
    <>
      <Navigate
        to={generatePath(
          PATH_CONFIG.root.recipes.categories.category.fullPath,
          {
            categoryName: categoryName,
          },
        )}
        replace={true}
      />
      <Outlet />
    </>
  );
};
