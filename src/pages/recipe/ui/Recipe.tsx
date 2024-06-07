import styles from "./Recipe.module.scss";
import { Preface } from "entities/preface";
import { useLoaderData } from "react-router-dom";

export const Recipe = () => {
  const id = useLoaderData();

  const mock = {
    tagName: `id: ${id}`,
    title: "test lorem ipsum bla blamet",
    description: "bla bla bla bla bla bla bla bla bla bla bla bla",
  };

  return (
    <section className={styles.recipe}>
      <Preface content={mock} theme={"light"} size={"m"} align={"center"} />
    </section>
  );
};
