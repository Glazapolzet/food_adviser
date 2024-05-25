import { NavigationLink } from "shared/ui";
import styles from "./NavBar.module.scss";
import { FC } from "react";

type NavBarItem = {
  link: string;
  title: string;
};

interface NavBarProps {
  items: Array<NavBarItem>;
}

export const NavBar: FC<NavBarProps> = ({ items }) => {
  const navigationContent = items.map((item) => (
    <li key={item.title} className={styles.item}>
      <NavigationLink link={item.link} title={item.title} />
    </li>
  ));

  return <ul className={styles.navbar}>{navigationContent}</ul>;
};
