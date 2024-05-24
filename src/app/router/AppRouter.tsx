import { Route, Routes, Navigate } from "react-router-dom";
import { Recipes } from "pages/Recipes";
import { paths } from "shared/config";
import { Layout } from "app/layout/Layout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={"/"}
          element={<Navigate to={paths.recipes.all} replace={true} />}
        />
        <Route path={paths.home} element={<div>home</div>} />
        <Route path={paths.recipes.all} element={<Recipes />}>
          <Route path={"*"} element={<div>recipes child route!</div>} />
        </Route>
        <Route path={paths.stats} element={<div>stats</div>} />
      </Route>
    </Routes>
  );
};
