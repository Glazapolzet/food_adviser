import styles from "./NavBar.module.scss";
import { FC } from "react";
import { NLink } from "./NLink/NLink";
import { clsx } from "clsx";

type NavBarItem = {
  link: string;
  title: string;
};

interface NavBarProps {
  items: Array<NavBarItem>;
  theme: "light" | "dark";
}

export const NavBar: FC<NavBarProps> = ({ items, theme, ...props }) => {
  const navigationItems = items.map((item) => (
    <li key={item.title} className={styles.item}>
      <NLink link={item.link} theme={theme} {...props}>
        {item.title}
      </NLink>
    </li>
  ));

  return (
    <ul className={clsx(styles.navbar, styles[`navbar_theme_${theme}`])}>
      {navigationItems}
    </ul>
  );
};
