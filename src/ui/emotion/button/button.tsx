import { vars } from "../../tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { forwardRef, useMemo } from "react";
import { Spinner } from "../spinner";
import { Text } from "../text";
import type {
  ButtonProps,
  ButtonSize,
  ButtonState,
  ButtonVariant,
} from "./button.types";
import { buttonSizes, buttonVariant } from "./button.variants";

const TextClassName = "ruler-button-text";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      children,
      disabled,
      onClick,
      className,
      pending = false,
      stretch = false,
      style,
    },
    ref,
  ) => {
    const { typography, spinnerSize } = buttonSizes[size];

    const {
      enabled: { typographyColor, spinnerColor },
    } = buttonVariant[variant];

    const label = useMemo(() => {
      if (pending) {
        return <Spinner color={spinnerColor} size={spinnerSize} />;
      }

      return (
        <Text
          style={{ display: "flex", gap: "2px", alignItems: "center" }}
          typography={typography}
          color={typographyColor}
          className={TextClassName}
        >
          {children}
        </Text>
      );
    }, [
      children,
      pending,
      spinnerColor,
      spinnerSize,
      typography,
      typographyColor,
    ]);

    return (
      <StyledButton
        variant={variant}
        size={size}
        disabled={disabled}
        pending={pending}
        stretch={stretch}
        onClick={onClick}
        className={className}
        style={style}
        ref={ref}
      >
        {label}
      </StyledButton>
    );
  },
);

const BaseButtonStyle = css`
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  position: relative;
  border-radius: 8px;

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  pending: boolean;
  stretch: boolean;
}>`
  ${BaseButtonStyle};

  ${({ size, stretch }) => getSizeStyle({ size, stretch })};

  ${({ variant }) => getVariantStyleByState(variant, "enabled")};

  &:hover {
    ${({ variant }) => getVariantStyleByState(variant, "hover")};
  }

  &:active {
    ${({ variant }) => getVariantStyleByState(variant, "pressed")};
  }

  &:disabled {
    ${({ variant }) => getVariantStyleByState(variant, "disabled")};
  }

  &:focus-visible {
    outline: none;
    &:after {
      content: "";
      position: absolute;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      left: -3px;
    }
  }

  ${({ pending, variant }) =>
    pending &&
    css`
      ${getVariantStyleByState(variant, "enabled")};
      pointer-events: none;
      cursor: progress;

      &:hover,
      &:active,
      &:disabled {
        ${getVariantStyleByState(variant, "enabled")};
      }
    `};
`;

function getSizeStyle({
  size,
  stretch,
}: {
  size: ButtonSize;
  stretch: boolean;
}) {
  const { ...rest } = buttonSizes[size];

  return css`
    ${rest}

    flex: ${stretch ? 1 : "initial"};

    padding: 13px 20px 13px 20px;
  `;
}

function getVariantStyleByState(variant: ButtonVariant, state: ButtonState) {
  const { iconColor, typographyColor, ...rest } = buttonVariant[variant][state];

  return css`
    ${rest}

    .${TextClassName} {
      color: ${vars.$semantic.color.text[typographyColor]};
    }

    svg {
      path {
        fill: ${vars.$semantic.color.text[iconColor]};
      }
    }
  `;
}
