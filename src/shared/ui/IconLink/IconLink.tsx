import { FC } from "react";
import styles from "./IconLink.module.scss";
import { Link } from "react-router-dom";

interface IconLinkProps {
  icon: string;
  link: string;
  target?: string;
}

export const IconLink: FC<IconLinkProps> = ({
  icon,
  link,
  target = "_self",
}) => {
  return (
    <Link className={styles.link} to={link} target={target}>
      <img className={styles.icon} src={icon} alt={link} />
    </Link>
  );
};
