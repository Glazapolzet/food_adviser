import { clsx } from "clsx";
import styles from "./TabLink.module.scss";
import { NavLink } from "react-router-dom";
import { FC } from "react";

interface TabLinkProps {
  link: string;
  title: string;
}

export const TabLink: FC<TabLinkProps> = ({ link, title }) => {
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
