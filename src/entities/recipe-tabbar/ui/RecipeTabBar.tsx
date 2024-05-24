import { RecipeTabLink } from "shared/ui";
import styles from "./RecipeTabBar.module.scss";

export const RecipeTabBar = ({ items }) => {
  const tabBarContent = items.map((item) => (
    <li key={item.title} className={styles.item}>
      <RecipeTabLink link={item.link} title={item.title} />
    </li>
  ));

  return <ul className={styles.tabbar}>{tabBarContent}</ul>;
};
