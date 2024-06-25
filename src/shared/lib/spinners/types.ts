import { CSSProperties, HTMLAttributes } from "react";

type SpinnerCustomProps = {
  color: CSSProperties["color"];
  enabled: boolean;
  size: CSSProperties["width"];
  style: CSSProperties;
};

export type SpinnerProps = Partial<SpinnerCustomProps>;

type SpinnerAdditionalCustomProps = {
  speed: number;
  still: boolean;
  thickness: number;
};

export type SpinnerAdditionalProps = HTMLAttributes<SVGElement> &
  Partial<SpinnerAdditionalCustomProps>;

type SecondaryColorCustomProps = {
  secondaryColor: CSSProperties["color"];
};

export type SecondaryColorSpinnerProps = SpinnerAdditionalProps &
  Partial<SecondaryColorCustomProps>;
