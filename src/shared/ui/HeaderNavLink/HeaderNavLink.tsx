import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import styles from "./HeaderNavLink.module.scss";

export const HeaderNavLink = ({ link, title }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        clsx(styles.navlink, {
          [styles.navlink_active]: isActive,
        })
      }
    >
      {title}
    </NavLink>
  );
};
