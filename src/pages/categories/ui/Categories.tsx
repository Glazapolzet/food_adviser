import styles from "./Categories.module.scss";
import { Preface } from "entities/preface";
import { TabBar, TabBarSkeleton } from "entities/tabbar";
import { Outlet, useLoaderData, generatePath, Await } from "react-router-dom";
import { type FC, Suspense } from "react";
import { TCategory } from "shared/api/categories";
import { PATH_CONFIG } from "shared/config";

export const Categories: FC = () => {
  const data: { categories: Promise<Array<TCategory>> } = useLoaderData();

  const prefaceData = {
    tagName: "Recipes",
    title: "Fabulous Title",
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
        <Suspense fallback={<TabBarSkeleton count={5} />}>
          <Await resolve={data.categories}>
            {(categories: Array<TCategory>) => {
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

              return <TabBar items={tabBarLinks} />;
            }}
          </Await>
        </Suspense>
      </div>
      <Outlet />
    </section>
  );
};
