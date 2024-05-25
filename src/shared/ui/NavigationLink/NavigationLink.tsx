import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import styles from "./NavigationLink.module.scss";

export const NavigationLink = ({ link, title }) => {
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
