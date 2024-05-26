import styles from "./Header.module.scss";
import { NavBar } from "entities/navbar";
import { headerNavbarItems } from "shared/consts";

export const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.logoContainer}>logo</div>
      <div className={styles.navbarContainer}>
        <NavBar items={headerNavbarItems} />
      </div>
      <div className={styles.searchContainer}>search</div>
    </div>
  );
};
