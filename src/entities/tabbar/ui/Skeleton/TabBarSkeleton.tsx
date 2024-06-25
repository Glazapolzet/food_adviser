import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./TabBarSkeleton.module.scss";
import { type FC } from "react";

interface TabBarSkeletonProps {
  count: number;
}

export const TabBarSkeleton: FC<TabBarSkeletonProps> = ({ count }) => {
  const items = new Array(count).fill(null);

  const tabBarItems = items.map((_, index) => {
    return (
      <li key={index} className={styles.item}>
        <Skeleton
          height={"40px"}
          width={"100px"}
          containerClassName={styles.tabSkeleton}
        />
      </li>
    );
  });

  return (
    <ul className={styles.tabbar}>
      <SkeletonTheme baseColor="#fffcf9" highlightColor="#fffffe" duration={1}>
        {tabBarItems}
      </SkeletonTheme>
    </ul>
  );
};
