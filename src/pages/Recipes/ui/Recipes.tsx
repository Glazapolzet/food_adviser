import styles from "./Recipes.module.scss";
import { Preface } from "entities/preface";
import { TabBar } from "entities/tabbar";
import { tabBarLinks } from "shared/consts";
import { useLoaderData } from "react-router-dom";
import { RecipeCardGrid } from "widgets/recipe-card-grid";

export const Recipes = () => {
  const data = useLoaderData();

  const mock = {
    tagName: "lorem",
    title: "lorem ipsum dolor sit amet",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <section className={styles.recipes}>
      <Preface content={mock} theme={"light"} size={"m"} align={"center"} />
      <div className={styles.tabbarContainer}>
        <TabBar items={tabBarLinks} />
      </div>
      <RecipeCardGrid items={data} />
    </section>
  );
};
