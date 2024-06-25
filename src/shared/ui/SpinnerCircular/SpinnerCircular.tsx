import { CSSProperties } from "react";
import {
  SpinnerProps,
  SecondaryColorSpinnerProps,
  withSharedProps,
} from "shared/lib";
import "./SpinnerCircular.scss";
import { SPINNER_DEFAULTS } from "shared/lib/spinners/defaults";

export type SpinnerCircularProps = SpinnerProps & SecondaryColorSpinnerProps;

export const SpinnerCircular = withSharedProps(
  ({
    secondaryColor = SPINNER_DEFAULTS.secondaryColor,
    speed = SPINNER_DEFAULTS.speed,
    still = SPINNER_DEFAULTS.still,
    thickness = SPINNER_DEFAULTS.thickness,
    ...svgProps
  }: SpinnerCircularProps) => {
    const strokeWidth = 4 * (thickness / 100);
    const circleStyle: CSSProperties = !still
      ? { animation: `spinners-react-circular ${140 / speed}s linear infinite` }
      : {};

    return (
      <svg fill="none" {...svgProps} viewBox="0 0 66 66">
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          stroke={secondaryColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          stroke="currentColor"
          strokeDasharray="1, 174"
          strokeDashoffset="306"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          style={circleStyle}
        />
      </svg>
    );
  },
);
