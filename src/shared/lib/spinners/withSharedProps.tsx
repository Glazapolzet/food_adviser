import { ComponentType } from "react";
import { SpinnerProps } from "./types";
import { SPINNER_DEFAULTS } from "shared/lib/spinners/defaults";

const normalizeSize = (size: string | number) =>
  parseFloat(size.toString()).toString() === size.toString()
    ? `${size}px`
    : size.toString();

export const withSharedProps = <P extends SpinnerProps>(
  Component: ComponentType<P>,
) => {
  return (props: P) => {
    const {
      color = SPINNER_DEFAULTS.color,
      enabled = SPINNER_DEFAULTS.enabled,
      size = SPINNER_DEFAULTS.size,
      style = SPINNER_DEFAULTS.style,
      ...otherProps
    } = props;
    const componentProps = {
      ...otherProps,
      style: {
        color,
        overflow: "visible",
        width: normalizeSize(size),
        ...style,
      },
    };

    if (!enabled) return null;

    return <Component {...(componentProps as P)} />;
  };
};
