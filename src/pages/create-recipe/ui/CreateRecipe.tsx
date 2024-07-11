import { type FC, Suspense } from "react";
import styles from "./CreateRecipe.module.scss";
import { Button, Headline, Paragraph, Tag } from "shared/ui";
import { type TCategory } from "shared/api/categories";
import { useLoaderData, Await } from "react-router-dom";
import { RecipeForm } from "features/recipe-form";
import { Preface } from "entities/preface";

export const CreateRecipe: FC = () => {
  const data = useLoaderData() as { categories: Promise<Array<TCategory>> };

  const prefaceData = {
    tagName: "Create",
    title: "New recipe",
    description: "Fill the form below to create a new recipe",
  };

  return (
    <section className={styles.createRecipe}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <Preface
            content={prefaceData}
            theme={"light"}
            size={"m"}
            align={"center"}
          />
        </div>
        <div className={styles.formContainer}>
          <Suspense fallback={<div>loading form</div>}>
            <Await resolve={data.categories}>
              {(categories: Array<TCategory>) => {
                return <RecipeForm id={"recipeForm"} categories={categories} />;
              }}
            </Await>
          </Suspense>
        </div>
        <div className={styles.buttonContainer}>
          <Button theme={"light"} type={"submit"} form={"recipeForm"}>
            Create recipe
          </Button>
        </div>
      </div>
    </section>
  );
};
