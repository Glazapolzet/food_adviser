import { type FC } from "react";
import styles from "./IconLink.module.scss";
import { type LinkProps, Link } from "react-router-dom";

interface IconButtonProps extends Omit<LinkProps, "to"> {
  icon: string;
  link: string;
}

export const IconLink: FC<IconButtonProps> = ({ icon, link, ...props }) => {
  return (
    <Link className={styles.link} to={link} {...props}>
      <img className={styles.icon} src={icon} alt={"icon link"} />
    </Link>
  );
};
