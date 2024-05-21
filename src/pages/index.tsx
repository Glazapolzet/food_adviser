import { Route, Routes } from "react-router-dom";
import { Header } from "../widgets/Header";
import { RecipePage } from "./RecipePage";

const paths = {
  main: "/",
};

export const Router = () => {
  return (
    <Routes>
      <Route element={<Header />} />
      <Route path={paths.main} element={<RecipePage />} />
    </Routes>
  );
};
