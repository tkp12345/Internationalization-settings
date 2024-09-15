import type {CSSProperties} from "react";
import type {SpinnerColor, SpinnerSize} from "./spinner.types";
import {vars} from "../../tokens";

export const spinnerSize: Record<
  SpinnerSize,
  { width: number; height: number; strokeWidth: number }
> = {
  large: {
    width: 42,
    height: 42,
    strokeWidth: 6,
  },
  medium: {
    width: 20,
    height: 20,
    strokeWidth: 4,
  },
  small: {
    width: 16,
    height: 16,
    strokeWidth: 3,
  },
} as const;

export const spinnerStyle: Record<SpinnerColor, CSSProperties> = {
  default: {
    stroke: vars.$semantic.color.palette.primary,
    opacity: 0.16,
  },
  white: {
    stroke: vars.$semantic.color.background.default,
  },
};
