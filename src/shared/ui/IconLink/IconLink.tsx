import { FC } from "react";
import styles from "./IconLink.module.scss";
import { Link } from "react-router-dom";

interface IconLinkProps {
  icon: string;
  link: string;
}

export const IconLink: FC<IconLinkProps> = ({ icon, link }) => {
  return (
    <Link className={styles.link} to={link}>
      <img className={styles.icon} src={icon} alt={link} />
    </Link>
  );
};
