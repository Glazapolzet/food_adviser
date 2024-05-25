import { TabLink } from "shared/ui";
import styles from "./TabBar.module.scss";

export const TabBar = ({ items }) => {
  const tabBarContent = items.map((item) => (
    <li key={item.title} className={styles.item}>
      <TabLink link={item.link} title={item.title} />
    </li>
  ));

  return <ul className={styles.tabbar}>{tabBarContent}</ul>;
};
