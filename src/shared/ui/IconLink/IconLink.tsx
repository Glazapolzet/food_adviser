import { FC } from "react";
import styles from "./IconLink.module.scss";
import { Link, type LinkProps } from "react-router-dom";

interface IconLinkProps extends Omit<LinkProps, "to"> {
  icon: string;
  link: string;
}

export const IconLink: FC<IconLinkProps> = ({ icon, link, ...props }) => {
  return (
    <Link className={styles.link} to={link} {...props}>
      <img className={styles.icon} src={icon} alt={link} />
    </Link>
  );
};
