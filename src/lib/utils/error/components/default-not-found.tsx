import { useNavigate } from "react-router-dom";
import { Button } from "@/ui/emotion/button";
import { Text } from "@/ui/emotion/text";
import styled from "@emotion/styled";

export const DefaultNotFound = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <DefaultNotFoundLayout>
      <Text color="subtitle" typography="caption">
        페이지를 찾을 수 없습니다
      </Text>

      <Button variant={"primary"} size={"medium"} onClick={navigateHome}>
        메인 페이지
      </Button>
    </DefaultNotFoundLayout>
  );
};

const DefaultNotFoundLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 20px;
`;
