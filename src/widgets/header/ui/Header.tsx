import styles from "./Header.module.scss";
import { NavBar } from "entities/navbar";
import { navbarLinks, PATH_CONFIG } from "shared/config";
import logo from "assets/icons/pepicons-print_hamburger-circle-filled.svg";
import { Button } from "shared/ui";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

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
      <div className={styles.searchContainer}>
        <Button
          theme={"dark"}
          onClick={() => navigate(PATH_CONFIG.root.recipes.new.fullPath)}
        >
          &#65291;New recipe
        </Button>
      </div>
    </div>
  );
};
