import styles from "./RecipePage.module.scss";
import { RecipeGrid } from "../../../widgets/RecipeGrid";
import { RecipePreface } from "../../../components";
import { RecipeNavbar } from "../../../components";

export const RecipePage = () => {
  return (
    <>
      <RecipePreface />
      <RecipeNavbar />
      <RecipeGrid />
    </>
  );
};
