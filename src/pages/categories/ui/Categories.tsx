import styles from "./Categories.module.scss";
import { Preface } from "entities/preface";
import { TabBar, TabBarSkeleton } from "entities/tabbar";
import { Await, generatePath, Outlet, useLoaderData } from "react-router-dom";
import { type FC, Suspense } from "react";
import { TResponseCategory } from "shared/api/categories";
import { PATH_CONFIG } from "shared/config";

export const Categories: FC = () => {
  const data = useLoaderData() as {
    categories: Promise<Array<TResponseCategory>>;
  };

  const prefaceData = {
    tagName: "Recipes",
    title: "Recipes",
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
            {(categories: Array<TResponseCategory>) => {
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
