import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import type { SpinnerColor, SpinnerProps } from "./spinner.types";
import { spinnerSize, spinnerStyle } from "./spinner.variants";

const PATH_LENGTH = 50 as const;

export const Spinner = ({ size, color = "default" }: SpinnerProps) => {
  const { width, height, strokeWidth } = spinnerSize[size];

  const viewBox = `-${width / 2} -${height / 2} ${width} ${height}`;
  const circleRadius = width / 2 - strokeWidth / 2;

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <StyledCircle
        r={circleRadius}
        strokeWidth={strokeWidth}
        fill="none"
        pathLength={PATH_LENGTH}
        color={color}
      />
    </StyledSvg>
  );
};

const spinnerAnimation = keyframes`
  0% {
    stroke-dashoffset: ${PATH_LENGTH};
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -${PATH_LENGTH};
  }
`;

const StyledSvg = styled.svg`
  stroke-dasharray: ${PATH_LENGTH};
  stroke-dashoffset: ${PATH_LENGTH};
  rotate: -90deg;
  animation: ${spinnerAnimation} 1.6s ease-in-out infinite;
`;

const StyledCircle = styled.circle<{ color: SpinnerColor }>`
  stroke: ${({ color }) =>
    color === "default" ? "#4880EE" : spinnerStyle[color].stroke || "#4880EE"};
  stroke-width: 4px;
  fill: none;
`;
