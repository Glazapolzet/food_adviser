import styles from "./Recipes.module.scss";
import { RecipePreface } from "entities/recipe-preface";
import { RecipeNavbar } from "entities/recipe-navbar";

export const Recipes = () => {
  return (
    <>
      <RecipePreface />
      <RecipeNavbar />
    </>
  );
};
