import styles from "./TabBar.module.scss";
import { FC } from "react";
import { TLink } from "./TLink/TLink";

type TabBarItem = {
  link: string;
  title: string;
};

interface TabBarProps {
  items: Array<TabBarItem>;
}

export const TabBar: FC<TabBarProps> = ({ items, ...props }) => {
  const tabBarItems = items.map((item) => (
    <li key={item.link + item.title} className={styles.item}>
      <TLink link={item.link} {...props}>
        {item.title}
      </TLink>
    </li>
  ));

  return <ul className={styles.tabbar}>{tabBarItems}</ul>;
};
