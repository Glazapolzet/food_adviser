import { clsx } from "clsx";
import styles from "./TLink.module.scss";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { type FC, type ReactNode } from "react";

interface TProps extends Omit<NavLinkProps, "to"> {
  link: string;
  children: ReactNode;
}

export const TLink: FC<TProps> = ({ link, children, ...props }) => {
  return (
    <NavLink
      end={true}
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
