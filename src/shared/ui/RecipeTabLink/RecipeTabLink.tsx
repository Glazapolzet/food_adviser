import { clsx } from "clsx";
import styles from "./RecipeTabLink.module.scss";
import { NavLink } from "react-router-dom";

export const RecipeTabLink = ({ link, title }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        clsx(styles.tablink, {
          [styles.tablink_active]: isActive,
        })
      }
    >
      {title}
    </NavLink>
  );
};
