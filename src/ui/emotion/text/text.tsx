import { vars } from "../../tokens";
import styled from "@emotion/styled";
import { forwardRef } from "react";
import type { TextProps } from "./text.types";

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    { className, as, color, typography, children, lineLimit, align, style },
    ref,
  ) => (
    <StyledText
      ref={ref}
      className={className}
      as={as}
      color={color}
      typography={typography}
      lineLimit={lineLimit}
      align={align}
      style={style}
    >
      {children}
    </StyledText>
  ),
);

const StyledText = styled.span<
  Required<Pick<TextProps, "color" | "typography">> &
    Pick<TextProps, "align" | "lineLimit">
>`
  display: inline-block;
  ${({ typography }) => vars.$semantic.typography[typography]};

  color: ${({ color }) => vars.$semantic.color.text[color]};
  text-align: ${({ align }) => align};

  ${({ lineLimit }) =>
    lineLimit &&
    `
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${lineLimit};
    -webkit-box-orient: vertical;
    word-break: break-all;
  `};
`;
