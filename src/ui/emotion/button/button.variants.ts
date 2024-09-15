import type { CSSProperties } from "react";
import type { SpinnerColor, SpinnerSize } from "../spinner/spinner.types";
import type { TypographyType } from "../text/text.types";
import type {
  ButtonPadding,
  ButtonSize,
  ButtonState,
  ButtonVariant,
} from "./button.types";
import { SemanticTextColorKey, vars } from "../../tokens";

export const buttonSizes: Record<
  ButtonSize,
  Omit<CSSProperties, "padding"> & {
    typography: TypographyType;
    padding: ButtonPadding;
    spinnerSize: SpinnerSize;
  }
> = {
  large: {
    spinnerSize: "medium",
    typography: "text-l-bold",
    minWidth: "88px",
    height: "52px",
    padding: {
      default: `0 ${vars.$scale.dimension.dimension250}`,
    },
  },
  medium: {
    spinnerSize: "medium",
    typography: "text-l-bold",
    minWidth: "84px",
    height: "44px",
    padding: {
      default: `0 ${vars.$scale.dimension.dimension225}`,
    },
  },
  small: {
    spinnerSize: "small",
    typography: "text-xs-medium",
    minWidth: "66px",
    height: "36px",
    padding: {
      default: `0 ${vars.$scale.dimension.dimension150}`,
    },
  },
  xSmall: {
    spinnerSize: "small",
    typography: "text-xs",
    minWidth: "60px",
    height: "28px",
    padding: {
      default: `0 ${vars.$scale.dimension.dimension125}`,
    },
  },
};

export const buttonVariant: Record<
  ButtonVariant,
  Record<
    ButtonState,
    CSSProperties & {
      typographyColor: SemanticTextColorKey;
      iconColor: SemanticTextColorKey;
      spinnerColor: SpinnerColor;
    }
  >
> = {
  primary: {
    enabled: {
      iconColor: "white",
      typographyColor: "onColor",
      backgroundColor: vars.$semantic.color.palette.primary,
      borderColor: "transparent",
      spinnerColor: "white",
      color: "white",
      fontSize: "16px",
    },
    hover: {
      iconColor: "onColor",
      typographyColor: "onColor",
      backgroundColor: vars.$semantic.color.palette.primaryHover,
      borderColor: "transparent",
      spinnerColor: "white",
    },
    pressed: {
      iconColor: "onColor",
      typographyColor: "onColor",
      backgroundColor: vars.$semantic.color.palette.primaryPressed,
      borderColor: "transparent",
      spinnerColor: "white",
    },
    disabled: {
      iconColor: "disabled",
      typographyColor: "disabled",
      backgroundColor: vars.$semantic.color.palette.disabled,
      borderColor: "transparent",
      spinnerColor: "white",
    },
  },
  secondary: {
    enabled: {
      iconColor: "primary",
      typographyColor: "primary",
      backgroundColor: vars.$semantic.color.palette.white,
      borderColor: vars.$semantic.color.border.line,
      spinnerColor: "default",
    },
    hover: {
      iconColor: "primaryHover",
      typographyColor: "primaryHover",
      backgroundColor: vars.$semantic.color.palette.secondaryHover,
      borderColor: vars.$semantic.color.border.line,
      spinnerColor: "default",
    },
    pressed: {
      iconColor: "primaryPressed",
      typographyColor: "primaryPressed",
      backgroundColor: vars.$semantic.color.palette.secondaryPressed,
      borderColor: vars.$semantic.color.border.line,
      spinnerColor: "default",
    },
    disabled: {
      iconColor: "disabled",
      typographyColor: "disabled",
      backgroundColor: vars.$semantic.color.palette.disabled,
      borderColor: vars.$semantic.color.border.line,
      spinnerColor: "default",
    },
  },
  tertiary: {
    enabled: {
      iconColor: "primary",
      typographyColor: "primary",
      backgroundColor: vars.$semantic.color.palette.tertiary,
      borderColor: vars.$semantic.color.border.line,
      spinnerColor: "default",
      color: "#6D7582",
      fontSize: "16px",
    },
    hover: {
      iconColor: "primaryHover",
      typographyColor: "primaryHover",
      backgroundColor: vars.$semantic.color.palette.tertiary,
      borderColor: vars.$semantic.color.border.line,
      spinnerColor: "default",
    },
    pressed: {
      iconColor: "primaryPressed",
      typographyColor: "primaryPressed",
      backgroundColor: vars.$semantic.color.palette.tertiary,
      borderColor: vars.$semantic.color.border.line,
      spinnerColor: "default",
    },
    disabled: {
      iconColor: "disabled",
      typographyColor: "disabled",
      backgroundColor: vars.$semantic.color.palette.disabled,
      borderColor: vars.$semantic.color.border.line,
      spinnerColor: "default",
    },
  },
};
