import "./SpinnerRoundOutlined.scss";
import {
  type SpinnerAdditionalProps,
  type SpinnerProps,
  withSharedProps,
} from "shared/lib";
import { SPINNER_DEFAULTS } from "shared/lib/spinners/defaults";
import { type FC } from "react";

const animations = [
  {
    name: "spinners-react-round-outlined",
    r: 2,
  },
  {
    name: "spinners-react-round-outlined",
    r: 14,
  },
  {
    name: "spinners-react-round-outlined",
    r: 28,
  },
];

export type SpinnerRoundOutlinedProps = SpinnerProps & SpinnerAdditionalProps;

export const SpinnerRoundOutlined = withSharedProps(
  ({
    speed = SPINNER_DEFAULTS.speed,
    still = SPINNER_DEFAULTS.still,
    thickness = SPINNER_DEFAULTS.thickness,
    ...svgProps
  }: SpinnerRoundOutlinedProps) => {
    const strokeWidth = 3 * (thickness / 100);

    return (
      <svg fill="none" {...svgProps} viewBox="0 0 66 66">
        {animations.map((animation, i) => (
          <circle
            key={`spinner-round-outlined-r${animation.r}`}
            cx="33"
            cy="33"
            fill="none"
            r={animation.r}
            stroke="currentColor"
            strokeWidth={i ? strokeWidth : 4}
            style={
              animation.name && !still
                ? {
                    animation: `${animation.name} ${140 / speed}s ease-in-out infinite`,
                  }
                : {}
            }
          />
        ))}
      </svg>
    );
  },
) as FC<SpinnerRoundOutlinedProps>;
