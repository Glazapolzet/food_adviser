import { NavigationLink } from "shared/ui";
import styles from "./NavBar.module.scss";

export const NavBar = ({ items }) => {
  const navigationContent = items.map((item) => (
    <li key={item.title} className={styles.item}>
      <NavigationLink link={item.link} title={item.title} />
    </li>
  ));

  return <ul className={styles.navbar}>{navigationContent}</ul>;
};
