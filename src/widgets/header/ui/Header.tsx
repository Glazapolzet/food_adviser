import styles from "./Header.module.scss";
import { NavBar } from "entities/navbar";
import { navbarLinks } from "shared/constants";
import logo from "assets/icons/pepicons-print_hamburger-circle-filled.svg";

export const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt={"logo"} />
        <div className={styles.titleContainer}>
          <p className={styles.logoTitle}>food</p>
          <p className={styles.logoTitle}>adviser</p>
        </div>
      </div>
      <div className={styles.navbarContainer}>
        <NavBar items={navbarLinks} theme={"light"} />
      </div>
      <div className={styles.searchContainer}>search</div>
    </div>
  );
};
