import { CSSProperties } from "react";
import { Spinner } from "@/ui/emotion/spinner";
import styled from "@emotion/styled";

interface DefaultSuspenseLoadingProps {
  customStyles?: CSSProperties;
}
export const DefaultSuspenseLoading = ({
  customStyles,
}: DefaultSuspenseLoadingProps) => {
  return (
    <DefaultSuspenseLoadingLayout style={customStyles}>
      <Spinner size={"medium"} />
    </DefaultSuspenseLoadingLayout>
  );
};

const DefaultSuspenseLoadingLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
