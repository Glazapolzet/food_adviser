import styles from "./Footer.module.scss";
import Icon from "assets/icons/pepicons-print_hamburger-circle-filled_monochrome.svg";
import { NavBar } from "entities/navbar";
import { navbarItems } from "shared/consts";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={Icon} alt={Icon} />
          <div className={styles.titleContainer}>
            <p className={styles.logoTitle}>food</p>
            <p className={styles.logoTitle}>adviser</p>
          </div>
        </div>
        <div className={styles.navbarContainer}>
          <NavBar items={navbarItems} theme={"dark"} />
        </div>
        <div className={styles.mediaContainer}>media</div>
      </div>
      <div className={styles.copyrightContainer}>
        <p className={styles.copyright}>Copyright: © 2024 Cooks Delight.</p>
      </div>
    </div>
  );
};
