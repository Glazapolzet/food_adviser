import styles from "./Header.module.scss";
import { NavBar } from "entities/navbar";
import { navbarItems } from "shared/consts";
import Icon from "assets/icons/pepicons-print_hamburger-circle-filled.svg";

export const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={Icon} alt={Icon} />
        <div className={styles.titleContainer}>
          <p className={styles.logoTitle}>food</p>
          <p className={styles.logoTitle}>adviser</p>
        </div>
      </div>
      <div className={styles.navbarContainer}>
        <NavBar items={navbarItems} theme={"light"} />
      </div>
      <div className={styles.searchContainer}>search</div>
    </div>
  );
};
