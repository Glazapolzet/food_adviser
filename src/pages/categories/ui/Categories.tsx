import { Preface } from "entities/preface";
import { TabBar, TabBarSkeleton } from "entities/tabbar";
import { type FC, Suspense } from "react";
import { Await, generatePath, Outlet, useLoaderData } from "react-router-dom";
import { TResponseCategories } from "shared/api/categories";
import { PATH_CONFIG } from "shared/config";
import styles from "./Categories.module.scss";

export const Categories: FC = () => {
  const data = useLoaderData() as {
    categories: Promise<TResponseCategories>;
  };

  const prefaceData = {
    tagName: "Recipes",
    title: "Recipes",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const defaultLinks = [
    {
      link: PATH_CONFIG.root.recipes.categories.fullPath,
      title: "all",
    },
  ];

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
            {(categories: TResponseCategories) => {
              const categoriesLinks = categories.items.map((category) => {
                return {
                  link: generatePath(
                    PATH_CONFIG.root.recipes.categories.category.fullPath,
                    {
                      categoryId: category.id,
                    }
                  ),
                  title: category.name,
                };
              });

              return <TabBar items={[...defaultLinks, ...categoriesLinks]} />;
            }}
          </Await>
        </Suspense>
      </div>
      <Outlet />
    </section>
  );
};
