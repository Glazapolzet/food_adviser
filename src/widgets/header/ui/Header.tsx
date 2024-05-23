import styles from "./Header.module.scss";
import { HeaderNavbar } from "entities/header-navbar";
import { headerNavbarContent } from "shared/consts";

export const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderNavbar items={headerNavbarContent} />
    </div>
  );
};
