import { Route, Routes } from "react-router-dom";
import { Recipes } from "pages/Recipes";
import { Layout } from "../layout/Layout";
import { paths } from "shared/config";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={paths.home} element={<Recipes />} />
        <Route path={paths.recipes} element={<Recipes />} />
        <Route path={paths.stats} element={<Recipes />} />
      </Route>
    </Routes>
  );
};
