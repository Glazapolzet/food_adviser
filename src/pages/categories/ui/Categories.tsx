import styles from "./Categories.module.scss";
import { Preface } from "entities/preface";
import { TabBar } from "entities/tabbar";
import { Outlet, useLoaderData, generatePath } from "react-router-dom";
import { FC } from "react";
import { TCategory } from "shared/api/categories";
import { PATH_CONFIG } from "shared/config";

export const Categories: FC = () => {
  const categories: Array<TCategory> = useLoaderData();

  const tabBarLinks = categories.map((category) => {
    return {
      link: generatePath(
        PATH_CONFIG.root.recipes.categories.category.fullPath,
        {
          categoryName: category.name,
        },
      ),
      title: category.name,
    };
  });

  const prefaceData = {
    tagName: "Recipes",
    title: "Самое время пожрать",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <section className={styles.categories}>
      <Preface
        content={prefaceData}
        theme={"light"}
        size={"m"}
        align={"center"}
      />
      <div className={styles.tabbarContainer}>
        <TabBar items={tabBarLinks} />
      </div>
      <Outlet />
    </section>
  );
};
