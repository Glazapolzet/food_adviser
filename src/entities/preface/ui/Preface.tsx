import styles from "./Preface.module.scss";
import { Headline, Tag, Paragraph } from "shared/ui";
import { FC, JSX } from "react";
import { clsx } from "clsx";

type PrefaceContent = {
  tagName: string;
  title: string;
  description: string;
};

interface PrefaceProps {
  content: PrefaceContent;
  theme: "light" | "dark";
  size: "m" | "l";
  align?: "left" | "center" | "right";
}

export const Preface: FC<PrefaceProps> = ({
  content,
  theme,
  size,
  align = "left",
}) => {
  let headlineComponent: JSX.Element;
  let paragraphComponent: JSX.Element;

  const paragraphCls = styles.paragraph;

  switch (size) {
    case "l":
      headlineComponent = (
        <Headline title={content.title} type={"1"} theme={theme} />
      );
      paragraphComponent = (
        <Paragraph
          title={content.description}
          type={"1"}
          theme={theme}
          className={paragraphCls}
        />
      );
      break;
    case "m":
      headlineComponent = (
        <Headline title={content.title} type={"2"} theme={theme} />
      );
      paragraphComponent = (
        <Paragraph
          title={content.description}
          type={"2"}
          theme={theme}
          className={paragraphCls}
        />
      );
      break;
  }

  return (
    <div className={clsx(styles.preface, styles[`preface_align_${align}`])}>
      <Tag title={content.tagName} size={size} />
      <div className={styles.headlineContainer}>{headlineComponent}</div>
      <div className={styles.paragraphContainer}>{paragraphComponent}</div>
    </div>
  );
};
