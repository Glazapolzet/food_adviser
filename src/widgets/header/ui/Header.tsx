import styles from "./Header.module.scss";
import { HeaderNavBar } from "entities/header-navbar";
import { headerNavbarContent } from "shared/consts";

export const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.logo_container}>logo</div>
      <div className={styles.navbar_container}>
        <HeaderNavBar items={headerNavbarContent} />
      </div>
      <div className={styles.search_container}>search</div>
    </div>
  );
};
