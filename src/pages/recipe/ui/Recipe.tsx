import styles from "./Recipe.module.scss";
import { Preface } from "entities/preface";
import { useLoaderData } from "react-router-dom";

export const Recipe = () => {
  const id: string = useLoaderData() as string;

  const mock = {
    tagName: "id of recipe",
    title: `${id}`,
    description: "This is mock description",
  };

  return (
    <section className={styles.recipe}>
      <Preface content={mock} theme={"light"} size={"m"} align={"center"} />
    </section>
  );
};
