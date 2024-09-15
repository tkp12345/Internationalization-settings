import type { MouseEventHandler, ReactNode } from "react";

export type ButtonState = "enabled" | "hover" | "pressed" | "disabled";

export type ButtonPadding = {
  default: string;
};

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonSize = "large" | "medium" | "small" | "xSmall";

export type ButtonProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  children: string | string[] | ReactNode;
  pending?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  stretch?: boolean;
};
