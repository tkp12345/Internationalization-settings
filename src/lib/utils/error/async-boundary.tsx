import type { PropsWithChildren, ReactElement } from 'react';
import { Suspense } from 'react';
import ErrorBoundary from './error-boundary';
import { DefaultErrorFallBack } from './components/default-error-fall-back';
import { useQueryErrorResetBoundary } from 'react-query';
import { DefaultSuspenseLoading } from './components/default-suspense-loading';
import { CustomErrorClass, NotFoundError } from '@/types/api/error-types.ts';

interface AsyncBoundaryProps {
  defaultErrorMsg?: string;
  loadingFallback?: ReactElement;
  errorFallback?: ReactElement;
  errorFallbackHeight?: string;
  defaultErrorFallBackWrap?: ReactElement;
  ignoreError?: CustomErrorClass[];
}

export const AsyncBoundary = ({
  defaultErrorMsg,
  children,
  errorFallback,
  loadingFallback,
  errorFallbackHeight,
  defaultErrorFallBackWrap,
  ignoreError = [],
}: PropsWithChildren<AsyncBoundaryProps>) => {
  const { reset } = useQueryErrorResetBoundary();

  //전역범위 에서 처리할 에러
  const defaultIgnoreError: CustomErrorClass[] = [NotFoundError];

  return (
    <ErrorBoundary
      fallback={
        errorFallback || (
          <DefaultErrorFallBack
            defaultErrorFallBackWrap={defaultErrorFallBackWrap}
            defaultErrorMsg={defaultErrorMsg}
            height={errorFallbackHeight}
          />
        )
      }
      ignoreError={new Set([...defaultIgnoreError, ...ignoreError])}
      resetQuery={reset}
    >
      <Suspense fallback={loadingFallback || <DefaultSuspenseLoading />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};
