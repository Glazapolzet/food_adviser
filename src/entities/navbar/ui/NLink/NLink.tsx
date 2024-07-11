import { NavLink, type NavLinkProps } from "react-router-dom";
import { clsx } from "clsx";
import styles from "./NLink.module.scss";
import { type FC, type ReactNode } from "react";

interface NLinkProps extends Omit<NavLinkProps, "to"> {
  link: string;
  theme: "light" | "dark";
  children: ReactNode;
}

export const NLink: FC<NLinkProps> = ({ link, theme, children, ...props }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        clsx(styles.navlink, styles[`navlink_theme_${theme}`], {
          [styles.navlink_active]: isActive,
        })
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
