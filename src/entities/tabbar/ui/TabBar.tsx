import styles from "./TabBar.module.scss";
import { FC } from "react";
import { TabLink } from "entities/tabbar/ui/TabLink/TabLink";

type TabBarItem = {
  link: string;
  title: string;
};

interface TabBarProps {
  items: Array<TabBarItem>;
}

export const TabBar: FC<TabBarProps> = ({ items }) => {
  const tabBarItems = items.map((item) => (
    <li key={item.title} className={styles.item}>
      <TabLink link={item.link} title={item.title} />
    </li>
  ));

  return <ul className={styles.tabbar}>{tabBarItems}</ul>;
};
