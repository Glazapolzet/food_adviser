import { HeaderNavLink } from "shared/ui";
import styles from "./HeaderNavbar.module.scss";

export const HeaderNavbar = ({ items }) => {
  const navigationContent = items.map((item) => (
    <li key={item.title} className={styles.item}>
      <HeaderNavLink link={item.link} title={item.title} />
    </li>
  ));

  return <ul className={styles.navbar}>{navigationContent}</ul>;
};
