import { ReactElement } from 'react';
import { Button } from '@/ui/emotion/button';
import { Text } from '@/ui/emotion/text';
import styled from '@emotion/styled';

interface Props {
  defaultErrorFallBackWrap?: ReactElement;
  defaultErrorMsg?: string;
  resetBoundary?: () => void;
  height?: string; // 높이를 지정할 수 있는 prop 추가
}
export const DefaultErrorFallBack = ({
  defaultErrorFallBackWrap,
  defaultErrorMsg,
  resetBoundary,
  height = '100%',
}: Props) => {
  const defaultErrorFallBack = (
    <DefaultErrorFallBackLayOut style={{ height }}>
      <Text color="primary" typography="text-xl-bold">
        {defaultErrorMsg ?? '오류가 발생했습니다'}
      </Text>

      <Button variant={'tertiary'} size={'medium'} onClick={resetBoundary}>
        다시 시도
      </Button>
    </DefaultErrorFallBackLayOut>
  );

  if (defaultErrorFallBackWrap) {
    return (
      <>
        {defaultErrorFallBackWrap}
        {defaultErrorFallBack}
      </>
    );
  }

  return defaultErrorFallBack;
};

const DefaultErrorFallBackLayOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
