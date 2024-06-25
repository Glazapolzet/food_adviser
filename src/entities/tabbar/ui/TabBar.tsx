import styles from "./TabBar.module.scss";
import { FC } from "react";
import { TabLink } from "./TabLink/TabLink";

type TabBarItem = {
  link: string;
  title: string;
};

interface TabBarProps {
  items: Array<TabBarItem>;
}

export const TabBar: FC<TabBarProps> = ({ items, ...props }) => {
  const tabBarItems = items.map((item) => (
    <li key={item.title} className={styles.item}>
      <TabLink link={item.link} {...props}>
        {item.title}
      </TabLink>
    </li>
  ));

  return <ul className={styles.tabbar}>{tabBarItems}</ul>;
};
