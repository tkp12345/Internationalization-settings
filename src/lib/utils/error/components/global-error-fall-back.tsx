import { DefaultNotFound } from './default-not-found.tsx';
import { NotFoundError } from '@/types/api/error-types.ts';

interface GlobalErrorFallBackProps {
  error?: Error;
}

/*
전역에서 처리할 에러를 핸들링하는 컴포넌트입니다
 */
export const GlobalErrorFallBack = ({ error }: GlobalErrorFallBackProps) => {
  let render = null;
  (function () {
    switch (error?.constructor) {
      case NotFoundError:
        render = <DefaultNotFound />;
        break;
      default:
        render = <DefaultNotFound />;
        break;
    }
  })();
  return <>{render}</>;
};
