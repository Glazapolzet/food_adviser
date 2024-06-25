import { clsx } from "clsx";
import styles from "./TabLink.module.scss";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { type FC, type ReactNode } from "react";

interface TabLinkProps extends Omit<NavLinkProps, "to"> {
  link: string;
  children: ReactNode;
}

export const TabLink: FC<TabLinkProps> = ({ link, children, ...props }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        clsx(styles.tablink, {
          [styles.tablink_active]: isActive,
        })
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
