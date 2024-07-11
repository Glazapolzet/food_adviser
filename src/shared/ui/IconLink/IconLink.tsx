import { type FC } from "react";
import styles from "./IconLink.module.scss";
import { type LinkProps, Link } from "react-router-dom";
import { clsx } from "clsx";

interface IconButtonProps extends Omit<LinkProps, "to"> {
  icon: string;
  link: string;
  className?: string;
}

export const IconLink: FC<IconButtonProps> = ({
  icon,
  link,
  className,
  ...props
}) => {
  return (
    <Link className={styles.link} to={link} {...props}>
      <img
        className={clsx(styles.icon, { [className ?? ""]: className })}
        src={icon}
        alt={"icon link"}
      />
    </Link>
  );
};
