import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const RecipesCategoryRedirect: FC = () => {
  return (
    <>
      <Navigate to={"categories/all"} replace={true} />
      <Outlet />
    </>
  );
};
