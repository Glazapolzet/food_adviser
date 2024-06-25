import { type FC } from "react";
import styles from "./RecipeCardSkeleton.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const RecipeCardSkeleton: FC = () => {
  return (
    <SkeletonTheme baseColor="#dcdcdc" highlightColor="#f5f5f5" duration={1}>
      <div className={styles.card}>
        <Skeleton
          height={"235px"}
          width={"100%"}
          borderRadius={0}
          containerClassName={styles.imageSkeleton}
        />
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <Skeleton
              count={1}
              height={"1.5rem"}
              width={"100%"}
              containerClassName={styles.headlineSkeleton}
            />
            <Skeleton
              count={1.5}
              height={"1rem"}
              width={"100%"}
              containerClassName={styles.paragraphSkeleton}
            />
          </div>
          <div className={styles.infoContainer}>
            <Skeleton
              count={0.5}
              height={"0.75rem"}
              width={"100%"}
              containerClassName={styles.infoSkeleton}
            />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
