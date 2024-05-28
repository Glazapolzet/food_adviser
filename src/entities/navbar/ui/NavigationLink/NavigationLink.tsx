import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import styles from "./NavigationLink.module.scss";
import { FC } from "react";

interface NavigationLinkProps {
  link: string;
  title: string;
  theme: "light" | "dark";
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  link,
  title,
  theme,
}) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        clsx(styles.navlink, styles[`navlink_theme_${theme}`], {
          [styles.navlink_active]: isActive,
        })
      }
    >
      {title}
    </NavLink>
  );
};
